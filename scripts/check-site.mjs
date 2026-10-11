import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

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
  '../public/robots.txt',
  '../public/sitemap.xml',
]) {
  assert.ok(existsSync(new URL(path, import.meta.url)), `Required public asset is missing: ${path}`);
}

const robots = readFileSync(new URL('../public/robots.txt', import.meta.url), 'utf8');
assert.match(robots, /User-agent:\s*\*/i);
assert.match(robots, /Allow:\s*\//i);
assert.match(robots, /https:\/\/parimi\.nl\/sitemap\.xml/i);

const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
assert.match(sitemap, /<loc>https:\/\/parimi\.nl\/<\/loc>/);
console.log('Site checks passed: SEO metadata, indexability, canonical URL, structured data and required public assets.');
