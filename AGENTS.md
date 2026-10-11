# Portfolio workspace

This repository owns the Suresh Parimi portfolio. Read `PROJECT.md` and
`README.md` for project structure, content, development, testing, and hosting
details. Keep portfolio work within this repository; do not use the Jarvis
workspace as its working directory or documentation store.

## Autonomous development and deployment authorization

The user has explicitly authorized the assistant to develop, review, test,
commit, push, and deploy requested changes for this portfolio without asking
for separate approval at each intermediate step.

- Implement the user's requested edits directly in this repository.
- Inspect related code and make necessary supporting fixes when they are within
  the requested scope.
- Review changes, run the available build and evaluation checks, and fix
  failures introduced by the changes before deployment.
- Commit and push verified changes to the existing GitHub production branch
  (`main`) when safe.
- Use the existing GitHub/Vercel integration. Verify deployment status and
  check the production site after pushing.
- Do not wait for manual review of routine implementation, code review, tests,
  commits, pushes, or deployments that are covered by the user's authorization.
- Report blockers when a required permission, unavailable tool, failing external
  service, or unresolved technical risk prevents completion. Never claim a
  check or deployment succeeded unless it was verified.

This standing authorization covers routine code changes and deployment for this
website. It does not authorize sign-in, account linking, granting new access,
purchasing services, changing billing, exposing secrets, or destructive actions
outside the requested scope. Obtain explicit user approval for those actions.

## Content and security safeguards

Preserve verified career facts and keep unsupported claims out of the site and
resume. Never print, commit, or expose local secrets, credentials, tokens, or
private environment values. Do not invent experience, employers, customers,
metrics, certifications, or links. Preserve the existing GitHub/Vercel project
connection and deployment configuration unless the user's requested change
requires a specific, justified adjustment.
