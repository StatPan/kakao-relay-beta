# Kakao Relay Beta evidence review protocol

**Applies to:** the public demand test ending no later than 2026-09-04 KST.

This is a manual, privacy-preserving decision procedure. It turns public
Interest Form candidates into aggregate evidence; it is not a product-data
pipeline and it does not authorize customer outreach, payment collection, or
Android distribution.

## Sources and their limits

| Source | Review grain | What it can establish | What it cannot establish |
| --- | --- | --- | --- |
| Daily `beta-signal-snapshot` artifact | Open non-PR `type:story` Issue count at one time | A liveness diagnostic for open candidates | Distinct authors, required selections, sensitive-data exclusions, price response, or valid demand |
| Public Interest Form Issues | One non-PR Issue from `state=all` with `type:story` | A manually reviewed, structured response | Population demand, payment intent, actual installation, or a private customer identity |
| [Public Q&A](https://github.com/StatPan/kakao-relay-beta/discussions/12) | One non-seed comment | A scope or use-case question | Demand, conversion, or an install commitment |
| GitHub traffic API | Repository views and clones in its available window | A repository-discovery diagnostic | GitHub Pages or `statpan.com` page views, people, or conversion |
| Receiving-provider transaction receipt | One actual transaction, retained privately by the operator | Revenue after a lawful receiving path exists | A pledge, price selection, entitlement, or public proof of a payer |

The final review uses the live sources above, not an old snapshot. A daily
snapshot is a capacity guard only and must never be promoted into a price or
customer dataset.

## Final review sequence

1. Record the review timestamp and enumerate all public, non-PR Issues that
   still carry `type:story`, using `state=all`. Do not copy titles, bodies,
   author names, contact details, message data, endpoints, tokens, or secrets
   into a local file, workflow artifact, or public receipt.
2. Review each candidate one at a time. A **valid structured-demand** response
   is from a distinct GitHub author and has all required destination,
   intended-use, signed-APK willingness, and price-model selections plus the
   acknowledgements, without personal or secret data. Author identities are
   used only transiently to remove duplicates and are never recorded.
3. For every candidate that is not valid, record only one aggregate exclusion
   category: `duplicate`, `missing_required_selection`, `spam_or_test`, or
   `sensitive_data`. Do not quote, reproduce, or categorize the sensitive
   value itself. If sensitive data appears, keep it out of the evidence record
   and follow the repository's normal moderation/safety process before any
   further interaction.
4. For valid responses only, count selected destination, intended-use,
   installation-willingness, one-time price range, monthly price range, and
   optional `discovery_channel` value. Keep `no_selection` as its own
   attribution category. A free or undecided price selection is not a paid
   signal.
5. Count non-seed Q&A comments separately. Exclude duplicates and comments
   containing personal or secret data. Do not treat comments as valid demand.
6. Read repository traffic as a separate diagnostic. Read revenue as **0 KRW**
   unless the operator has a real, private receiving-provider transaction
   receipt. No public payment evidence is required or requested.

There is no actual product use to count before the signed private-beta gate.
If the threshold is reached, private-beta readiness is a separate decision;
the existing debug APK is never distributed.

## Aggregate review receipt

At the decision point, add only the following aggregate fields to the final
ledger evidence or an issue-linked public receipt:

| Field | Record |
| --- | --- |
| Review window and timestamp | The public-test range and the review time in KST |
| Candidate and validity counts | Enumerated candidates, valid structured demand, and exclusion-category counts |
| Valid-response patterns | Aggregate destination, intended-use, installation-willingness, and one-time/monthly price-range counts |
| Discovery diagnostic | Aggregate closed-choice `discovery_channel` counts, including `no_selection` |
| Supporting diagnostics | Non-seed Q&A count and repository traffic window, labelled as diagnostics |
| Cost and revenue | Incremental spend, plus revenue only when backed by the operator's private transaction receipt |
| Decision | The matching published rule: private-beta readiness, keep free, stop, or paid-step stop |

Never place a name, handle, Issue title, body, contact detail, notification or
conversation content, device identifier, URL, endpoint, token, secret, or
provider receipt in the aggregate review receipt.

## Quality limits and decision guardrails

- A selected price range is a non-binding price reaction, not an order,
  reservation, payment promise, or entitlement.
- `discovery_channel` is optional and self-reported. It can explain a future
  channel choice, but it does not measure visits or prove conversion.
- A zero count can mean no observed structured response in this route; it does
  not prove broad market absence.
- The private-beta readiness rule remains at least 3 valid, distinct
  structured-demand responses, including at least 1 signed-APK manual-install
  willingness. The review must not lower that threshold.
- Any paid step that would exceed 100,000 KRW of new monthly spend stops before
  purchase. A support link, if later configured, remains voluntary and never
  unlocks a feature, beta access, support priority, licence, or installation.
