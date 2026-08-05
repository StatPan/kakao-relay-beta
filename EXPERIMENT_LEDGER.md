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

## Automatic aggregate evidence and its storage guard

[`Capture beta signal snapshot`](.github/workflows/beta-signal-snapshot.yml)
runs daily at 09:15 KST and can also be started manually. It records only an
**open structured-demand candidate** count, not a validated-demand count: the
aggregate cannot establish distinct authors, required selections, or the
absence of sensitive data. Valid demand is established only by the manual
review described below. The workflow runs on the
public repository's standard GitHub-hosted runner, for which
[GitHub documents free usage in public repositories](https://docs.github.com/en/actions/reference/runners/github-hosted-runners).
Its first manual receipt was
[run 30990813379](https://github.com/StatPan/kakao-relay-beta/actions/runs/30990813379):
one aggregate-only artifact, `beta-signal-snapshot`, was reported as 500 bytes
and expires after 35 days.

This is a capacity guard, not a claim that artifact storage is unlimited. The
workflow retains one small JSON snapshot only; it must not raise retention,
enable billing, or buy storage. If artifact storage or runner use would create
new paid spend, stop that step before the charge and record a new decision.
The artifact excludes participant names, titles, bodies, contact details,
message data, endpoints, tokens, and secrets.

The final manual procedure is in [the evidence review protocol](EVIDENCE_REVIEW_PROTOCOL.md).
It separates aggregate candidate liveness from valid demand, price response,
and revenue evidence.

## Public state and revenue

The public page, structured interest form, and public Q&A are live. They do
not sell access, accept reservations, or create an entitlement. Direct revenue,
voluntary support revenue, and paid-pilot revenue are all **0 KRW** until a
real receiving path exists and a voluntary payment is actually received.

## Owned-channel qualification

**Reviewed: 2026-08-05 KST.** Owning a channel does not by itself make it an
acquisition channel for this experiment.

| Owner-controlled surface | Decision | Reason and boundary |
| --- | --- | --- |
| `statpan.com` portfolio card and boundary explainer | Eligible and live | The existing card and explainer link to the public beta while repeating that this is not an official Kakao integration, a remote-reply service, or an installation promise. |
| min-ty commercial blog | Excluded now | A phrase sample for Kakao notification delivery to Telegram, Discord, and webhooks was dominated by business 알림톡, generic notification support, or the reverse direction. It did not establish a source-backed, standalone reader task for this customer-owned, one-way relay. |

No link, post, CTA, tracking, advertising, or affiliate placement will be
added to min-ty for this experiment. Such a promotion could imply product
availability or turn an independent commercial-information channel into a
thin acquisition surface. It would also mix min-ty's separate content-quality
gate with this product-demand test.

This qualification does not call the sampled result market demand or market
absence. Reconsider min-ty only when it has a separate topic brief, research,
and publishing review for a standalone reader task, and this product's scope
is then verified. Until then, min-ty interactions do not count as evidence for
this experiment.

## What counts as evidence

| Signal | Canonical source | Valid when | Do not count when |
| --- | --- | --- | --- |
| Open structured-demand candidate | Daily aggregate snapshot of public GitHub Issue Form entries labelled `type:story` | An open non-PR Issue currently has the label | Treating this count as valid demand, a count of distinct people, or a review of form content |
| Valid structured demand | Public GitHub Issue Form labelled `type:story`, manually reviewed at the decision point | A distinct public author submits all required destination, signed-APK willingness, and non-binding payment-model and price selections without sensitive data | Empty, duplicate, spam, test, or sensitive-data-containing submission |
| Discovery attribution | Optional closed-choice `discovery_channel` selection in the public Interest Form | Aggregate selected-channel counts are recorded only after the same privacy review | Treating a selection, missing selection, page visit, or repository view as conversion, valid demand, or market demand |
| Product question or use case | [Public Q&A](https://github.com/StatPan/kakao-relay-beta/discussions/12) | A non-seed participant asks a scope/use-case question without personal or credential data | The seeded owner post, a duplicate, or a post containing personal or secret data |
| Repository discovery | GitHub traffic API | Reported separately as repository views/clones and referrers | Treating it as a GitHub Pages or `statpan.com` page-view count |
| Revenue | Receiving-account transaction receipt | A real voluntary support or paid-pilot payment is received after a lawful receiving path is configured | A price-range selection, pledge, or discussion comment |

The structured form and Q&A are both public. Never post a Kakao ID, telephone
number, email, notification or conversation content, device serial, webhook
URL, bot token, or secret.

## Baseline: 2026-08-05 KST

- Open structured-demand candidates: **0**
- Manually reviewed valid structured demand: **0**
- Non-seed Q&A questions: **0**
- GitHub repository traffic in the available window: **0 views / 0 unique
  viewers; 0 clones / 0 unique cloners**
- Incremental spend: **0 KRW**
- Revenue: **0 KRW**

GitHub traffic is an acquisition diagnostic, not a claim about page visits.
This baseline will be refreshed with the same definitions rather than compared
to an invented pre-launch number.

Before applying any decision rule, review each candidate privately against the
valid-demand definition above. Record only the aggregate result and exclusion
reason category in the final evidence; do not copy participant names, Issue
titles or bodies, contact details, message data, endpoints, tokens, or secrets
into the ledger.

`discovery_channel` is optional and uses closed choices only. It is an
attribution diagnostic for the next channel decision, not a requirement for
valid demand and not a tracking mechanism. Do not add free-text attribution,
cookies, a tracking script, or analytics-account changes for this experiment.

The form separates one-time purchase ranges from monthly ranges. This does not
offer either model or imply that a recurring service will exist: a monthly
selection is only a non-binding response to a hypothetical repeated service.

## Decision rules

| Evidence by the review date | Action |
| --- | --- |
| At least 3 valid, distinct structured-demand submissions, including at least 1 person willing to manually install a signed APK | Start the already-scoped private-beta readiness work: dedicated signing, a private artifact, and physical-device smoke. Do not distribute the existing debug APK. |
| A valid respondent chooses a paid one-time or monthly range | Record its payment model and range as a non-binding price signal only. Do not collect payment or promise a benefit until a receiving path and lawful pilot terms are separately prepared. |
| Some valid demand but the signed-beta threshold is not met | Keep the public test free and report destination, installation, and price patterns. Do not add paid infrastructure merely to force a result. |
| Zero valid demand by 2026-09-04 KST | Stop this experiment without new spend, publish the final aggregate evidence, and select a different workspace candidate rather than infer broad market rejection from zero traffic. |
| Incremental spend would exceed 100,000 KRW per month | Stop the paid step before purchase; the cost guardrail takes precedence over growth activity. |

This is an evidence plan, not a promise to provide an Android install, an
official Kakao integration, remote replies, payment support, or a paid plan.
