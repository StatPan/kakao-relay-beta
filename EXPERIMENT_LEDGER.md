# Kakao Relay Beta Experiment Ledger

**Status:** active public demand test

**Last updated:** 2026-08-05 KST

**Decision review:** no later than 2026-09-04 KST

This ledger records what this experiment has actually added. It does not call
pre-existing owner infrastructure free, and it does not treat a launch-day
zero as proof that no demand exists.

## Cost boundary

| Boundary | Assets or spend | Treatment in this experiment |
| --- | --- | --- |
| Existing owner assets | Existing GitHub account, public repository and Pages; the pre-existing `statpan.com` site and deployment path; private Android source | Already owned before this test. Their recurring price is not measured or allocated here. |
| Incremental paid subscriptions | None | 0 KRW created. |
| Incremental domain, DNS, Cloudflare, compute, or storage | None | 0 KRW created. |
| Incremental paid APIs, advertising, or contractor spend | None | 0 KRW created. |
| Receiving account or payment processor | None | No collection path is active; the voluntary-support button remains disabled. |

**Actual incremental service spend to date: 0 KRW.** The monthly guardrail is
100,000 KRW of new spend. Any paid step requires a separately recorded
expected cost, end date, and decision reason before it starts.

## Public state and revenue

The public page, structured interest form, and public Q&A are live. They do
not sell access, accept reservations, or create an entitlement. Direct revenue,
voluntary support revenue, and paid-pilot revenue are all **0 KRW** until a
real receiving path exists and a voluntary payment is actually received.

## What counts as evidence

| Signal | Canonical source | Valid when | Do not count when |
| --- | --- | --- | --- |
| Structured demand | Public GitHub Issue Form labelled `type:story` | A distinct public author submits all required destination, signed-APK willingness, and non-binding price selections without sensitive data | Empty, duplicate, spam, test, or sensitive-data-containing submission |
| Product question or use case | [Public Q&A](https://github.com/StatPan/kakao-relay-beta/discussions/12) | A non-seed participant asks a scope/use-case question without personal or credential data | The seeded owner post, a duplicate, or a post containing personal or secret data |
| Repository discovery | GitHub traffic API | Reported separately as repository views/clones and referrers | Treating it as a GitHub Pages or `statpan.com` page-view count |
| Revenue | Receiving-account transaction receipt | A real voluntary support or paid-pilot payment is received after a lawful receiving path is configured | A price-range selection, pledge, or discussion comment |

The structured form and Q&A are both public. Never post a Kakao ID, telephone
number, email, notification or conversation content, device serial, webhook
URL, bot token, or secret.

## Baseline: 2026-08-05 KST

- Valid structured demand: **0**
- Non-seed Q&A questions: **0**
- GitHub repository traffic in the available window: **0 views / 0 unique
  viewers; 0 clones / 0 unique cloners**
- Incremental spend: **0 KRW**
- Revenue: **0 KRW**

GitHub traffic is an acquisition diagnostic, not a claim about page visits.
This baseline will be refreshed with the same definitions rather than compared
to an invented pre-launch number.

## Decision rules

| Evidence by the review date | Action |
| --- | --- |
| At least 3 valid, distinct structured-demand submissions, including at least 1 person willing to manually install a signed APK | Start the already-scoped private-beta readiness work: dedicated signing, a private artifact, and physical-device smoke. Do not distribute the existing debug APK. |
| A valid respondent chooses a paid range | Record it as a non-binding price signal only. Do not collect payment or promise a benefit until a receiving path and lawful pilot terms are separately prepared. |
| Some valid demand but the signed-beta threshold is not met | Keep the public test free and report destination, installation, and price patterns. Do not add paid infrastructure merely to force a result. |
| Zero valid demand by 2026-09-04 KST | Stop this experiment without new spend, publish the final aggregate evidence, and select a different workspace candidate rather than infer broad market rejection from zero traffic. |
| Incremental spend would exceed 100,000 KRW per month | Stop the paid step before purchase; the cost guardrail takes precedence over growth activity. |

This is an evidence plan, not a promise to provide an Android install, an
official Kakao integration, remote replies, payment support, or a paid plan.
