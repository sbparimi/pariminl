# Suresh Parimi — The Quality Series

A cinematic portfolio for Suresh Parimi in Amsterdam. Built with React, TypeScript and Vite.

## Run locally

Run `npm ci` if dependencies are missing, then `npm run dev -- --host 127.0.0.1 --port 5174`. Build with `npm run build`. Check the evaluation engine with `node scripts/check-evaluation.mjs`.

## Current experience

The homepage opens with a skippable cinematic sequence, followed by career chapters, selected work, skills and résumé actions. Story playback and Continue controls are available immediately. All narration is locally hosted; audible autoplay may require a visitor interaction. Native modal dialogs provide the highlight reel, project case studies and résumé viewer. Sound controls manage music, narration and volume.

The retained editorial interface includes an AI quality lab with six deterministic assertions against three fictional fixtures (grounding, tool calls and routing). It is not mounted by the cinematic homepage. Its checks use no live models, credentials or production traces, and its answer check is a string assertion rather than semantic faithfulness scoring.

Career facts remain in `src/data/portfolio.ts`, maintained from the supplied source résumés. Enterprise engagements are career case studies; Jarvis is a personal project. No unsupported employers, metrics, public repositories or certificate URLs were added. The résumé PDF is the unchanged supplied source.

The current interface is composed in `src/App.tsx`, with cinematic components and styles in `src/index.css`. It uses an intro, custom cursor and Lenis scrolling. The retained editorial alternative lives in `src/components/PortfolioExperience.tsx` and `src/portfolio.css`; its lab is in `src/components/QualityLab.tsx` and `src/data/evaluation.ts`.

## Hosting

Existing GitHub/Vercel integration is preserved. Build: `npm run build`; output: `dist`. No environment variables or API keys are needed. Pushes to the connected production branch can trigger deployment; local changes do not publish automatically.

Original design foundation: [Sushmitadasari/Portfolio_series](https://github.com/Sushmitadasari/Portfolio_series). The current layout is a local redesign of that portfolio.
