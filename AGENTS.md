# Repository Instructions

This file follows [AGENTS.md](https://agents.md/), the open, tool-agnostic
convention for coding-agent instructions (specification led by OpenAI with
Google/Cursor/Factory, donated to the Linux Foundation's Agentic AI
Foundation in December 2025). `CLAUDE.md` in this repo is a symlink to this
file — Claude Code does not yet read `AGENTS.md` natively (as of this
writing), so the symlink keeps Claude Code's auto-load working while this
file stays the single, tool-agnostic source any other AGENTS.md-aware agent
can read directly. Edit this file, not `CLAUDE.md`.

## Korean Writing Register

Korean copy in this repo (`site/*.html`, `.github/ISSUE_TEMPLATE/beta-interest.yml`)
is governed by a cross-repo writing system that lives in the sibling
`autocon` repo, not duplicated here:

- Genre/site rules for this repo:
  `/home/statpan/workspace/contents/autocon/docs/writing-voice-wiki/sites/kakao-relay-beta.md`
  (genre: `demand-test-landing-copy` + `legal-privacy-boundary-notice`).
- Document skeleton:
  `/home/statpan/workspace/contents/autocon/docs/writing-voice-wiki/templates/demand-test-landing-page.md`.
- Cross-genre craft principles (from published Korean/English writing
  teachers, not company-specific):
  `/home/statpan/workspace/contents/autocon/docs/writing-voice-wiki/masters.md`.
- Before presenting any Korean copy change in this repo as finished, run the
  lexical-register audit as a separate-context call:
  `/home/statpan/workspace/contents/autocon/skills/content/lexical-register-audit/SKILL.md`.
  A structural read-through is not the same as this audit — see that file
  for why it has to be a separate context, not the authoring session
  re-reading its own draft.
- `site/verify.mjs` enforces exact required Korean substrings across
  `site/index.html`, `site/guide.html`, `site/use-cases.html`, and
  `.github/ISSUE_TEMPLATE/beta-interest.yml`. `grep` the exact phrase across
  this whole repo before editing any word that might be part of one — a
  locked phrase is usually copied into more than one file with none of them
  canonical.

This keeps `autocon` as the single source of truth for Korean writing
register instead of duplicating rules per repo. If a rule here turns out
wrong or a new kind of Korean copy appears in this repo, edit the files
above (in `autocon`), not a local copy in this repo.
