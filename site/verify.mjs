import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = new URL("./", import.meta.url);
const index = await readFile(new URL("index.html", root), "utf8");
const guide = await readFile(new URL("guide.html", root), "utf8");
const config = await readFile(new URL("support-config.js", root), "utf8");
const script = await readFile(new URL("site.js", root), "utf8");
const robots = await readFile(new URL("robots.txt", root), "utf8");
const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");
const interestForm = await readFile(new URL("../.github/ISSUE_TEMPLATE/beta-interest.yml", root), "utf8");

const publicUrl = "https://statpan.github.io/kakao-relay-beta/";
const guideUrl = `${publicUrl}guide.html`;

const required = [
  "무료 베타 관심 등록",
  "카카오톡 공식 API 또는 공식 봇인 척하지 않습니다.",
  "카카오 ID, 기기 일련번호, 알림·대화 내용",
  "원격·보조 전송은 제공하지 않습니다.",
  "수동 설치 의향, 비구속적 가격 범위만 골라 알려 주세요.",
  "가격 선택은 결제·예약이 아닌 공개 의견",
  "후원은 기능, 베타 접근, 지원 우선순위 또는 라이선스를 제공하지 않습니다.",
  "issues/new?template=beta-interest.yml",
  "https://github.com/StatPan/kakao-relay-beta/discussions/12",
  "공개 토론이므로 개인정보·토큰·메시지 내용은 쓰지 마세요.",
];
for (const phrase of required) {
  if (!index.includes(phrase)) throw new Error(`Missing required public-boundary copy: ${phrase}`);
}
if (index.includes("살아 있는 알림에만 답장")) throw new Error("Public beta must not promise live-notification replies.");
if (!index.includes('href="./guide.html"')) throw new Error("Landing page must link to the public-boundary guide.");
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
  "가격 선택은 결제나 예약이 아닙니다.",
]) {
  if (!guide.includes(guideBoundary)) throw new Error(`Missing guide boundary: ${guideBoundary}`);
}
if (!robots.includes(`Sitemap: ${publicUrl}sitemap.xml`)) throw new Error("robots.txt must point at the public sitemap.");
if (!sitemap.includes(`<loc>${publicUrl}</loc>`)) throw new Error("sitemap.xml must point at the public page.");
if (!sitemap.includes(`<loc>${guideUrl}</loc>`)) throw new Error("sitemap.xml must point at the public guide.");
if (!config.includes('url: ""')) throw new Error("Support must remain disabled until a receiving account is configured.");
if (!script.includes('url.protocol !== "https:"')) throw new Error("Support configuration must reject non-HTTPS links.");
for (const requiredFormBoundary of [
  "카카오 ID, 전화번호, 이메일",
  "webhook URL, 토큰, 비밀값",
  "공개 GitHub Issue",
  "id: installation_willingness",
  "id: price_reaction",
  "결제나 예약이 아닌 공개·비구속적 의견입니다.",
]) {
  if (!interestForm.includes(requiredFormBoundary)) {
    throw new Error(`Missing interest-form privacy or demand boundary: ${requiredFormBoundary}`);
  }
}
console.log(`verified ${resolve(root.pathname, "index.html")}`);
