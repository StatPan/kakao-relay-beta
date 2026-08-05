import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = new URL("./", import.meta.url);
const index = await readFile(new URL("index.html", root), "utf8");
const guide = await readFile(new URL("guide.html", root), "utf8");
const useCases = await readFile(new URL("use-cases.html", root), "utf8");
const config = await readFile(new URL("support-config.js", root), "utf8");
const script = await readFile(new URL("site.js", root), "utf8");
const robots = await readFile(new URL("robots.txt", root), "utf8");
const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");
const interestForm = await readFile(new URL("../.github/ISSUE_TEMPLATE/beta-interest.yml", root), "utf8");
const ledger = await readFile(new URL("../EXPERIMENT_LEDGER.md", root), "utf8");
const supportSetup = await readFile(new URL("../SUPPORT_SETUP.md", root), "utf8");
const evidenceReviewProtocol = await readFile(new URL("../EVIDENCE_REVIEW_PROTOCOL.md", root), "utf8");

const publicUrl = "https://statpan.github.io/kakao-relay-beta/";
const guideUrl = `${publicUrl}guide.html`;
const useCasesUrl = `${publicUrl}use-cases.html`;

const required = [
  "무료 베타 관심 등록",
  "카카오톡 공식 API 또는 공식 봇인 척하지 않습니다.",
  "카카오 ID, 기기 일련번호, 알림·대화 내용",
  "원격·보조 전송은 제공하지 않습니다.",
  "공개 가능한 사용처 범주, 수동 설치 의향, 비구속적 가격 범위만 골라 알려 주세요.",
  "가격 선택은 결제·예약이 아닌 공개 의견",
  "후원은 기능, 베타 접근, 지원 우선순위 또는 라이선스를 제공하지 않습니다.",
  "issues/new?template=beta-interest.yml",
  "https://github.com/StatPan/kakao-relay-beta/discussions/12",
  "공개 토론이므로 개인정보·토큰·메시지 내용은 쓰지 마세요.",
  "LOCAL-ONLY PREVIEW",
  "가상의 공개 데모입니다. 이 페이지는 실제 알림을 읽거나 전송하지 않으며",
  "입력값·URL·토큰을 받거나 저장하지 않습니다.",
  "data-preview-destination=\"telegram\"",
  "data-preview-destination=\"discord\"",
  "data-preview-destination=\"webhook\"",
  "aria-pressed=\"true\"",
  "실제 카카오톡, Telegram, Discord, webhook 또는 외부 서버에 연결하지 않습니다.",
];
for (const phrase of required) {
  if (!index.includes(phrase)) throw new Error(`Missing required public-boundary copy: ${phrase}`);
}
if (index.includes("살아 있는 알림에만 답장")) throw new Error("Public beta must not promise live-notification replies.");
if (!index.includes('href="./guide.html"')) throw new Error("Landing page must link to the public-boundary guide.");
if (!index.includes('href="./use-cases.html"')) throw new Error("Landing page must link to the public use-case guide.");
for (const metadata of [
  `<link rel="canonical" href="${publicUrl}" />`,
  '<meta name="robots" content="index,follow" />',
  `<meta property="og:url" content="${publicUrl}" />`,
]) {
  if (!index.includes(metadata)) throw new Error(`Missing public discovery metadata: ${metadata}`);
}
for (const guideBoundary of [
  `<link rel="canonical" href="${guideUrl}" />`,
  `<meta property="og:url" content="${guideUrl}" />`,
  `href="${guideUrl}"`,
  "카카오톡 공식 API 또는 공식 봇",
  "공식 통합이나 원격 답장을 약속하지 않습니다.",
  "아직 설치 파일을 약속하지 않습니다.",
  "공개 가능한 사용처 범주, 수동 설치 의향, 비구속적 가격 범위만 선택합니다.",
]) {
  if (!guide.includes(guideBoundary)) throw new Error(`Missing guide boundary: ${guideBoundary}`);
}
if (!robots.includes(`Sitemap: ${publicUrl}sitemap.xml`)) throw new Error("robots.txt must point at the public sitemap.");
if (!sitemap.includes(`<loc>${publicUrl}</loc>`)) throw new Error("sitemap.xml must point at the public page.");
if (!sitemap.includes(`<loc>${guideUrl}</loc>`)) throw new Error("sitemap.xml must point at the public guide.");
if (!sitemap.includes(`<loc>${useCasesUrl}</loc>`)) throw new Error("sitemap.xml must point at the public use-case guide.");
for (const metadata of [
  `<link rel="canonical" href="${useCasesUrl}" />`,
  '<meta name="robots" content="index,follow" />',
  `<meta property="og:url" content="${useCasesUrl}" />`,
]) {
  if (!useCases.includes(metadata)) throw new Error(`Missing use-case discovery metadata: ${metadata}`);
}
for (const useCaseBoundary of [
  "사용자 소유 Android 기기에서 선택한 카카오톡 알림을 사용자가 관리하는 목적지로 단방향 전달",
  "지금은 설치 파일이나 연결 기능을 제공하지 않는 공개 실험입니다.",
  "카카오톡 공식 API 또는 공식 봇을 원합니다.",
  "원격 답장, 보조 전송, 대화방 자동 조작을 원합니다.",
  "다른 사람의 대화 내용을 알림이나 동의 없이 전달하려 합니다.",
  "이 페이지와 관심 양식은 어떤 카카오톡 계정, Android 기기, 알림 내용",
  "설치·결제·예약·이용 권한을 만들지 않습니다.",
  "개인 연락처, 조직명, 메시지 내용, endpoint, 토큰, 비밀값을 쓰지 마세요.",
]) {
  if (!useCases.includes(useCaseBoundary)) throw new Error(`Missing use-case safety boundary: ${useCaseBoundary}`);
}
if (!config.includes('url: ""')) throw new Error("Support must remain disabled until a receiving account is configured.");
if (!script.includes('url.protocol !== "https:"')) throw new Error("Support configuration must reject non-HTTPS links.");
for (const supportRequirement of [
  "**Current state: disabled.**",
  "GitHub Sponsors",
  "South Korea",
  "Buy Me a Coffee",
  "does not list South Korea",
  "The exact destination is an HTTPS public listing page",
  "support is voluntary and never unlocks a",
  "feature, beta access, support priority, licence, installation",
  "## Disable or roll back",
  "Revenue remains **0 KRW** until the human operator has a real provider",
  "transaction receipt. The canonical evidence is the operator's private provider",
]) {
  if (!supportSetup.includes(supportRequirement)) {
    throw new Error(`Missing support activation boundary: ${supportRequirement}`);
  }
}
for (const previewRequirement of [
  "const examples = {",
  "notification.preview",
  "button.addEventListener(\"click\"",
  "code.textContent = example.body",
]) {
  if (!script.includes(previewRequirement)) throw new Error(`Missing preview behavior: ${previewRequirement}`);
}
for (const forbiddenPreviewCapability of ["fetch(", "XMLHttpRequest", "localStorage", "sessionStorage", "sendBeacon", ".value"]) {
  if (script.includes(forbiddenPreviewCapability)) throw new Error(`Preview must not collect, persist, or transmit data: ${forbiddenPreviewCapability}`);
}
for (const ledgerRequirement of [
  "Actual incremental service spend to date: 0 KRW.",
  "Their recurring price is not measured or allocated here.",
  "2026-09-04 KST",
  "GitHub traffic is an acquisition diagnostic, not a claim about page visits.",
  "At least 3 valid, distinct structured-demand submissions",
  "Zero valid demand by 2026-09-04 KST",
  "## Owned-channel qualification",
  "min-ty commercial blog",
  "Excluded now",
  "No link, post, CTA, tracking, advertising, or affiliate placement",
  "does not call the sampled result market demand or market\nabsence",
  "| Discovery attribution | Optional closed-choice `discovery_channel` selection",
  "`discovery_channel` is optional and uses closed choices only.",
  "not a requirement for\nvalid demand and not a tracking mechanism.",
  "Do not add free-text attribution,\ncookies, a tracking script, or analytics-account changes",
  "[the evidence review protocol](EVIDENCE_REVIEW_PROTOCOL.md)",
]) {
  if (!ledger.includes(ledgerRequirement)) throw new Error(`Missing experiment-ledger requirement: ${ledgerRequirement}`);
}
for (const requiredFormBoundary of [
  "카카오 ID, 전화번호, 이메일",
  "webhook URL, 토큰, 비밀값",
  "공개 GitHub Issue",
  "id: installation_willingness",
  "id: price_reaction",
  "id: intended_use",
  "생각 중인 사용처 범주",
  "대화방 이름, 알림·메시지 내용, 조직명, URL, 연락처는 작성하지 않습니다.",
  "개인 Android의 선택 알림을 내 도구에서 다시 보기",
  "선택한 알림을 팀 Discord에서 함께 보기",
  "내 HTTPS webhook으로 제한된 자동화 연결",
  "아직 구체적인 사용처를 정하지 않음",
  "결제나 예약이 아닌 공개·비구속적 의견입니다.",
  "지불 방식과 가격에 대한 반응",
  "일회성 구매 5,000–9,900원",
  "반복 제공이 실제로 생기는 경우",
  "id: discovery_channel",
  "이 공개 실험을 어디에서 발견하셨나요? (선택)",
  "집계용 선택 항목입니다.",
  "StatPan 포트폴리오 또는 경계 설명 글",
  "GitHub 저장소 또는 GitHub 검색",
  "기억나지 않음",
]) {
  if (!interestForm.includes(requiredFormBoundary)) {
    throw new Error(`Missing interest-form privacy or demand boundary: ${requiredFormBoundary}`);
  }
}
const attributionMatch = interestForm.match(/  - type: dropdown\n    id: discovery_channel\n[\s\S]*?(?=\n  - type:|$)/);
if (!attributionMatch) throw new Error("Discovery attribution must remain a dropdown.");
const attributionField = attributionMatch[0];
if (!attributionField.includes("required: false")) {
  throw new Error("Discovery attribution must remain optional.");
}
if (/type:\s*(input|textarea)|기타|직접 입력/.test(attributionField)) {
  throw new Error("Discovery attribution must not add free-text collection.");
}
for (const reviewRequirement of [
  "This is a manual, privacy-preserving decision procedure.",
  "using `state=all`",
  "distinct GitHub author",
  "`duplicate`, `missing_required_selection`, `spam_or_test`, or\n   `sensitive_data`",
  "Do not quote, reproduce, or categorize the sensitive",
  "one-time price range, monthly price range, and\n   optional `discovery_channel` value",
  "There is no actual product use to count before the signed private-beta gate.",
  "not an order,\n  reservation, payment promise, or entitlement.",
  "at least 3 valid, distinct\n  structured-demand responses",
  "never\n  unlocks a feature, beta access, support priority, licence, or installation.",
]) {
  if (!evidenceReviewProtocol.includes(reviewRequirement)) {
    throw new Error(`Missing evidence-review boundary: ${reviewRequirement}`);
  }
}
console.log(`verified ${resolve(root.pathname, "index.html")}`);
