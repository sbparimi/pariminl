# Suresh Parimi portfolio

This project is independent of the Jarvis workspace. Its repository root is
`/Users/sparimi/Documents/sparimi-portfolio`.

- Production website: https://parimi.nl
- Vercel project alias: https://pariminl.vercel.app
- GitHub repository: https://github.com/sbparimi/pariminl
- Original design foundation: https://github.com/Sushmitadasari/Portfolio_series
- Local preview: http://127.0.0.1:5174/
- Production branch: `main`; existing Vercel Git integration deploys pushes.
- Framework: React, TypeScript and Vite; build command `npm run build`, output `dist`.

The complete checkout was relocated on 11 October 2026, preserving `.git`,
Vercel project linkage, local configuration, dependencies, generated assets and
build output. This relocation does not push code or change the hosted deployment.
The preview was restarted here and returned HTTP 200.

## Content and presentation

Career content lives in `src/data/portfolio.ts`. The site presents Suresh's
quality engineering and AI career through an editorial engineering portfolio,
with the original series theme retained as a visual influence. The portrait
is an SP monogram. Resume downloads and career claims must remain grounded in
verified source material; do not invent experience, clients, metrics or links.

Music is an original synthesized score. Local section narration uses generated
Kokoro `bm_lewis` English audio assets, including the locally hosted opening story.
Browser autoplay restrictions can require the site's sound-enabling interaction.
Runtime music/narration does not make model calls.
Optional regeneration scripts are in `scripts/`; see the README for dependencies.

The current homepage uses the cinematic interface composed in `src/App.tsx`,
including a skippable opening, audio controls, custom cursor and Lenis scrolling.
The introduction and its Play Intro replay use the identical approved 15-second
MP4 in `public/video/suresh-parimi-luxury-intro.mp4`, with its original soundtrack
and narration. It is displayed without cropping, filters, text overlays or
additional intro audio. Playback and Skip/Continue controls are available
immediately; completing playback enters the portfolio. The file's SHA-256 is
recorded in `public/video/intro-manifest.json` and checked during every build.
Career chapters and music use local assets. The editorial alternative in
`PortfolioExperience.tsx` and `portfolio.css` is retained but not mounted. Its
browser-local AI quality lab uses fictional fixtures, six deterministic assertions,
editable answers, trace inspection and JSON report export. It makes no live model
calls and does not claim to measure semantic faithfulness. Run
`npm run check:evaluation` for its 43 gate assertions.

Pending content request: review the resume's PostNL entry and include verified
Cognigy, Salesforce automation, Oracle Fusion, agentic SDLC, and ML recommendation
system experience using linear regression. These requested content changes have
not been marked complete merely by moving the repository.

## Local development

Run from this project directory:

```sh
npm run dev -- --host 127.0.0.1 --port 5174 --strictPort
```

Use `npm ci` if dependencies need reinstalling. Local environment files and
deployment metadata remain private; never copy their values into documentation.
Keep portfolio code, assets, hosting notes and future portfolio changes here.
