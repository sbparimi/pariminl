import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const required = [
  ['page title', /<title>[^<]{20,}<\/title>/i],
  ['meta description', /<meta name="description" content="[^"]{80,}"\s*\/>/i],
  ['indexing directive', /<meta name="robots" content="index, follow/i],
  ['canonical URL', /<link rel="canonical" href="https:\/\/parimi\.nl\/"\s*\/>/i],
  ['Open Graph image', /<meta property="og:image" content="https:\/\/parimi\.nl\/assets\/og-image\.jpg"/i],
  ['Twitter image', /<meta name="twitter:image" content="https:\/\/parimi\.nl\/assets\/og-image\.jpg"/i],
  ['Person structured data', /"@type":"Person"/],
  ['LinkedIn profile', /https:\/\/www\.linkedin\.com\/in\/sparimi\//],
];

for (const [name, pattern] of required) {
  assert.match(html, pattern, `Missing or invalid SEO requirement: ${name}`);
}
assert.doesNotMatch(html, /127\.0\.0\.1:5174/, 'Production HTML must not redirect visitors to a local development server');

for (const path of [
  '../public/favicon.svg',
  '../public/assets/og-image.jpg',
  '../public/assets/Suresh_Parimi_Resume.pdf',
  '../public/audio/opening.wav',
  '../public/robots.txt',
  '../public/sitemap.xml',
]) {
  assert.ok(existsSync(new URL(path, import.meta.url)), `Required public asset is missing: ${path}`);
}

const opening = readFileSync(new URL('../src/components/OpeningSequence.tsx', import.meta.url), 'utf8');
assert.match(opening, /SKIP INTRO/, 'The cinematic opening must always expose a skip control');
const introManifest = JSON.parse(readFileSync(new URL('../public/video/intro-manifest.json', import.meta.url), 'utf8'));
const introVideo = readFileSync(new URL(`../public/video/${introManifest.file}`, import.meta.url));
assert.equal(introVideo.toString('ascii', 4, 8), 'ftyp', 'Introduction must be a valid MP4 file');
assert.equal(createHash('sha256').update(introVideo).digest('hex'), introManifest.sha256, 'The introduction must match the approved master exactly');
assert.ok(existsSync(new URL('../public/video/suresh-parimi-luxury-intro-poster.jpg', import.meta.url)), 'Intro poster must be available');

const hero = readFileSync(new URL('../src/components/Hero.tsx', import.meta.url), 'utf8');
assert.doesNotMatch(hero, /calendar\.google\.com\/calendar\/render\?action=TEMPLATE/, 'Do not present an event template as a booking workflow');
assert.match(hero, /Request a coffee chat/, 'The coffee CTA must accurately describe its action');
const storyAudio = readFileSync(new URL('../public/audio/opening.wav', import.meta.url));
assert.equal(storyAudio.toString('ascii', 0, 4), 'RIFF', 'Opening story must be a WAV file, not an HTML response');
assert.equal(storyAudio.toString('ascii', 8, 12), 'WAVE', 'Opening story must contain WAV audio');
assert.ok(storyAudio.length > 44, 'Opening story must contain audio samples');

const styles = readFileSync(new URL('../src/portfolio.css', import.meta.url), 'utf8');
assert.doesNotMatch(styles, /scroll-margin-top:\s*-\d/, 'Anchor targets must not be positioned above the fixed header');

const robots = readFileSync(new URL('../public/robots.txt', import.meta.url), 'utf8');
assert.match(robots, /User-agent:\s*\*/i);
assert.match(robots, /Allow:\s*\//i);
assert.match(robots, /https:\/\/parimi\.nl\/sitemap\.xml/i);

const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
assert.match(sitemap, /<loc>https:\/\/parimi\.nl\/<\/loc>/);
console.log('Site checks passed: SEO metadata, indexability, canonical URL, structured data and required public assets.');

const lifeManifest = JSON.parse(readFileSync(new URL('../public/video/life-story-manifest.json', import.meta.url), 'utf8'));
const lifeVideo = readFileSync(new URL(`../public/video/${lifeManifest.file}`, import.meta.url));
assert.equal(createHash('sha256').update(lifeVideo).digest('hex'), lifeManifest.sha256, 'Life story must match the reviewed film');
assert.equal(createHash('sha256').update(storyAudio).digest('hex'), lifeManifest.sourceNarrationSha256, 'Preserve the original life narration');
assert.ok(existsSync(new URL('../public/video/suresh-parimi-life-story.vtt', import.meta.url)), 'Story captions must be available');

const storyboard = JSON.parse(readFileSync(new URL('../docs/life-story-storyboard.json', import.meta.url), 'utf8'));
const personalPhotos = new Set(['childhood-original', 'college-original', 'corporate-original', 'amsterdam-original', 'leader-original']);
for (const scene of storyboard.scenes) {
  assert.ok(personalPhotos.has(scene.photo), 'Every scene must feature a supplied original photograph');
  assert.ok(scene.background === scene.photo || (scene.photo === 'childhood-original' && scene.background === '01-village'), 'No generated people or unrelated background images may appear in the story');
}
