# Suresh Parimi — The Quality Series

A cinematic portfolio for Suresh Parimi in Amsterdam. Built with React, TypeScript and Vite.

## Run locally

Run `npm ci` if dependencies are missing, then `npm run dev -- --host 127.0.0.1 --port 5174`. Build with `npm run build`. Check the evaluation engine with `node scripts/check-evaluation.mjs`.

## Current experience

The homepage opens with the approved 15-second luxury cinematic MP4, followed by career chapters, selected work, skills and résumé actions. The landing introduction and Play Intro replay use the same unmodified master in `public/video/`. The player preserves the full frame with `object-fit: contain`, plays inline on phones and has native media controls. Playback starts through an explicit sound-enabled button; Skip/Continue remains available and finishing the film enters the portfolio. Its existing soundtrack and narration are the only intro audio. `intro-manifest.json` records the original SHA-256, verified during every build. Native modal dialogs provide the introduction, project case studies and résumé viewer.

The retained editorial interface includes an AI quality lab with six deterministic assertions against three fictional fixtures (grounding, tool calls and routing). It is not mounted by the cinematic homepage. Its checks use no live models, credentials or production traces, and its answer check is a string assertion rather than semantic faithfulness scoring.

Career facts remain in `src/data/portfolio.ts`, maintained from the supplied source résumés. Enterprise engagements are career case studies; Jarvis is a personal project. No unsupported employers, metrics, public repositories or certificate URLs were added. The résumé PDF is the unchanged supplied source.

The current interface is composed in `src/App.tsx`, with cinematic components and styles in `src/index.css`. It uses an intro, custom cursor and Lenis scrolling. The retained editorial alternative lives in `src/components/PortfolioExperience.tsx` and `src/portfolio.css`; its lab is in `src/components/QualityLab.tsx` and `src/data/evaluation.ts`.

## Hosting

Existing GitHub/Vercel integration is preserved. Build: `npm run build`; output: `dist`. No environment variables or API keys are needed. Pushes to the connected production branch can trigger deployment; local changes do not publish automatically.

Original design foundation: [Sushmitadasari/Portfolio_series](https://github.com/Sushmitadasari/Portfolio_series). The current layout is a local redesign of that portfolio.

## Personal-photo life story

The landing introduction and replay now use `public/video/suresh-parimi-life-story.mp4`: the complete 51.7-second original narration, synchronized with the five supplied personal photographs. The standing older child appears upright over the village setting, followed by the college photograph and corporate portraits. Portraits are imported from the original files; faces are not regenerated. Village and technical settings are cinematic illustrations, not verified historical location footage. English captions accompany the film. The approved 15-second master remains preserved. `life-story-manifest.json` records the reviewed film and source narration hashes, both checked during builds.
