# Suresh — The Quality Series

Personalised local portfolio for Suresh Parimi. Content is maintained in `src/data/portfolio.ts`, using the AI QA Lead source résumé, cross-checked against the Test Manager résumé. Jarvis is identified as a personal workspace project; enterprise engagements are career case studies.

Run `npm ci` and `npm run dev -- --host 127.0.0.1 --port 5174`. Build with `npm run build`.

The portrait is original SP monogram artwork, not a photograph. The downloadable résumé is an unchanged copy of the source AI QA Lead PDF. No GitHub account or certificate verification URLs have been invented.

Design foundation: [Sushmitadasari/Portfolio_series](https://github.com/Sushmitadasari/Portfolio_series).

Cinematic audio is opt-in: use **Enable sound** while browsing. Music and voice can be muted independently. Short section announcements use locally generated Kokoro `bm_lewis` English neural narration; the score is an original synthesized composition, not Netflix audio. Both are static local assets with no runtime model or API requests. Narration waits for scrolling to settle, music ducks under speech, and audio pauses for overlays or hidden tabs.

Regenerate audio with `scripts/build-narration.py` (Kokoro, NumPy, soundfile, system espeak-ng) and `scripts/build-score.py` (NumPy, soundfile). These optional build tools are not needed to run the site.

## Hosting

Import this repository in Vercel. Framework: Vite; root directory: repository root; install: `npm ci`; build: `npm run build`; output: `dist`. No environment variables or API keys are required. GitHub pushes to the production branch trigger deployments when the Git integration is connected.
