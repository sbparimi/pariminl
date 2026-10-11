# Suresh Parimi — The Quality Series

An editorial portfolio for Suresh Parimi, AI Quality Engineering Leader in Amsterdam. Built with React, TypeScript and Vite.

## Run locally

Run `npm ci` if dependencies are missing, then `npm run dev -- --host 127.0.0.1 --port 5174`. Build with `npm run build`. Check the evaluation engine with `node scripts/check-evaluation.mjs`.

## Current experience

The homepage opens directly to Suresh's positioning and an illustrative AI quality architecture. Selected work can be filtered, and native modal dialogs show context, contributions and documented outcomes. An expertise explorer links skills to career engagements. The timeline uses keyboard-accessible disclosure controls. The persistent top-right business card includes email, LinkedIn, résumé download and a contact (.vcf) export.

The AI quality lab runs six deterministic assertions against three fictional fixtures (grounding, tool calls and routing). Visitors can switch failing/corrected traces, edit an answer, inspect JSON and export evaluation reports. It uses no live models, external requests, credentials or production traces. Its answer check is a string assertion, not a semantic faithfulness metric. The on-page explanation distinguishes these checks from model-based evaluation and human review.

Career facts remain in `src/data/portfolio.ts`, maintained from the supplied source résumés. Enterprise engagements are career case studies; Jarvis is a personal project. No unsupported employers, metrics, public repositories or certificate URLs were added. The résumé PDF is the unchanged supplied source.

The current interface is in `src/components/PortfolioExperience.tsx` and `src/portfolio.css`; the lab is in `src/components/QualityLab.tsx` and `src/data/evaluation.ts`. Earlier cinematic components and audio assets are retained in the repository but are not loaded by the homepage. The current runtime has no intro gate, custom cursor or scroll interception.

## Hosting

Existing GitHub/Vercel integration is preserved. Build: `npm run build`; output: `dist`. No environment variables or API keys are needed. Pushes to the connected production branch can trigger deployment; local changes do not publish automatically.

Original design foundation: [Sushmitadasari/Portfolio_series](https://github.com/Sushmitadasari/Portfolio_series). The current layout is a local redesign of that portfolio.
