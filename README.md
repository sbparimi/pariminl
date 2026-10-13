# Suresh Parimi — The Quality Series

A cinematic portfolio for Suresh Parimi in Amsterdam. Built with React, TypeScript and Vite.

## Run locally

Run `npm ci` if dependencies are missing, then `npm run dev -- --host 127.0.0.1 --port 5174`. Build with `npm run build`. Check the evaluation engine with `node scripts/check-evaluation.mjs`.

## Current experience

The homepage opens with the edited 44-second life-story MP4, followed by career chapters, selected work, skills and résumé actions. The landing introduction and Play Intro replay use the same edited film in `public/video/`; the earlier 15-second master remains preserved. The player preserves the full frame with `object-fit: contain`, plays inline on phones and has native media controls. Playback starts through an explicit sound-enabled button; Skip/Continue remains available and finishing the film enters the portfolio. Its existing soundtrack and narration are the only intro audio. `intro-manifest.json` records the original SHA-256, verified during every build. Native modal dialogs provide the introduction, project case studies and résumé viewer.

The retained editorial interface includes an AI quality lab with six deterministic assertions against three fictional fixtures (grounding, tool calls and routing). It is not mounted by the cinematic homepage. Its checks use no live models, credentials or production traces, and its answer check is a string assertion rather than semantic faithfulness scoring.

Career facts remain in `src/data/portfolio.ts`, maintained from the supplied source résumés. Enterprise engagements are career case studies; Jarvis is a personal project. No unsupported employers, metrics, public repositories or certificate URLs were added. The résumé PDF is the unchanged supplied source.

The current interface is composed in `src/App.tsx`, with cinematic components and styles in `src/index.css`. It uses an intro, custom cursor and Lenis scrolling. The retained editorial alternative lives in `src/components/PortfolioExperience.tsx` and `src/portfolio.css`; its lab is in `src/components/QualityLab.tsx` and `src/data/evaluation.ts`.

## Hosting

Existing GitHub/Vercel integration is preserved. Build: `npm run build`; output: `dist`. No environment variables or API keys are needed. Pushes to the connected production branch can trigger deployment; local changes do not publish automatically.

Original design foundation: [Sushmitadasari/Portfolio_series](https://github.com/Sushmitadasari/Portfolio_series). The current layout is a local redesign of that portfolio.

## Current life-story film

The introduction and replay use the locally edited 44-second existing HeyGen film “From Village Dreams to Quality Engineering”, selected by the user. Full-screen moving presenter footage replaces the framed-photo film. The edit preserves speech timing, replaces the unrelated stock-person shot with engineering detail footage from the same source, applies restrained color grading and audio leveling, and includes English captions. Source resolution is 1280×720 at 25 fps; embedded watermarks remain. No new generation or paid-plan upgrade was used. The film hash is checked during builds. See `docs/cinematic-film-edit.md`.
