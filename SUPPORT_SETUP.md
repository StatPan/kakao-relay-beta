# Voluntary Support Activation

**Current state: disabled.** This document prepares a replaceable outbound
support link; it does not create a payment integration, a paid plan, or an
entitlement. Do not enable it merely because this document exists.

## Candidate and eligibility check

The first candidate is a personal [GitHub Sponsors](https://docs.github.com/en/sponsors/getting-started-with-github-sponsors/about-github-sponsors)
listing for the operator. GitHub's published supported-region list includes
South Korea for receiving sponsorship funds, but the operator must personally
complete every account, identity, payout, tax, and terms requirement before a
public listing is treated as usable.

This is a fresh check at activation time, not a guarantee. At the time this
runbook was added, `https://github.com/StatPan` had no public Sponsors listing.
Use the exact public listing URL that the operator verifies; do not infer or
construct one from an account name.

`Buy Me a Coffee` is not the default candidate for a South Korean recipient:
its [published payout-country list](https://help.buymeacoffee.com/en/articles/6258038-supported-countries-for-payouts-on-buy-me-a-coffee),
last reviewed 2026-08-05, does not list South Korea. Recheck official provider
eligibility before selecting any replacement provider.

## Preconditions owned by a human operator

Before enabling a link, the operator must personally confirm all of the
following outside this repository:

1. The receiving account and public listing are genuinely theirs and can
   receive funds in their jurisdiction.
2. Identity, payout, tax, disclosure, and provider-terms requirements have
   been reviewed and completed where required. This runbook is not tax or legal
   advice.
3. The exact destination is an HTTPS public listing page, not a payment form,
   redirector, shortened URL, wallet address, or credential-bearing URL.
4. The page copy remains true: support is voluntary and never unlocks a
   feature, beta access, support priority, licence, installation, or a promise
   of future delivery.
5. The planned provider fee and any new recurring cost are written into
   `EXPERIMENT_LEDGER.md` before activation. If a new paid step would exceed
   the 100,000 KRW monthly guardrail, do not activate it.

Never put bank details, identity documents, tax records, provider API tokens,
or supporter data in this repository, an Issue, a Discussion, or the static
site configuration.

## Enable exactly one link

1. Record the public listing URL and the human completion decision in the
   operator's private records. Do not paste private onboarding evidence here.
2. Edit only `site/support-config.js`: replace `url: ""` with the verified
   HTTPS listing URL. Keep the label truthful and keep the no-entitlement copy.
3. Run `node site/verify.mjs`, inspect the rendered support card, and deploy
   through the normal Pages workflow.
4. Verify the public page opens the same HTTPS listing in a new tab and that
   the beta form, price questions, and APK policy remain unchanged.
5. Add a dated ledger entry with the provider name, incremental cost decision,
   and whether collection is active. Never represent a non-binding price choice
   as a payment.

Only one voluntary-support destination may be enabled at a time. Replacing a
provider uses the same sequence and must complete the new provider's official
eligibility check first.

## Disable or roll back

1. Set `url: ""` in `site/support-config.js`.
2. Run `node site/verify.mjs` and deploy the normal Pages workflow.
3. Confirm the public support card again states that the link is unavailable.
4. Record the date and reason in the ledger without exposing supporter or
   payout data.

## Revenue evidence

Revenue remains **0 KRW** until the human operator has a real provider
transaction receipt. The canonical evidence is the operator's private provider
receipt or statement. The public ledger may record only the aggregate amount,
date range, provider, and confirmation that no product entitlement was issued;
it must never copy supporter identity, payment method, receipt IDs, or private
financial data.
