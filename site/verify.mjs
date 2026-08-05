import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = new URL("./", import.meta.url);
const index = await readFile(new URL("index.html", root), "utf8");
const config = await readFile(new URL("support-config.js", root), "utf8");
const script = await readFile(new URL("site.js", root), "utf8");
const robots = await readFile(new URL("robots.txt", root), "utf8");
const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");
const interestForm = await readFile(new URL("../.github/ISSUE_TEMPLATE/beta-interest.yml", root), "utf8");

const publicUrl = "https://statpan.github.io/kakao-relay-beta/";

const required = [
  "무료 베타 관심 등록",
  "카카오톡 공식 API 또는 공식 봇인 척하지 않습니다.",
  "카카오 ID, 기기 일련번호, 알림·대화 내용",
  "원격·보조 전송은 제공하지 않습니다.",
  "후원은 기능, 베타 접근, 지원 우선순위 또는 라이선스를 제공하지 않습니다.",
  "issues/new?template=beta-interest.yml",
];
for (const phrase of required) {
  if (!index.includes(phrase)) throw new Error(`Missing required public-boundary copy: ${phrase}`);
}
if (index.includes("살아 있는 알림에만 답장")) throw new Error("Public beta must not promise live-notification replies.");
for (const metadata of [
  `<link rel="canonical" href="${publicUrl}" />`,
  '<meta name="robots" content="index,follow" />',
  `<meta property="og:url" content="${publicUrl}" />`,
]) {
  if (!index.includes(metadata)) throw new Error(`Missing public discovery metadata: ${metadata}`);
}
if (!robots.includes(`Sitemap: ${publicUrl}sitemap.xml`)) throw new Error("robots.txt must point at the public sitemap.");
if (!sitemap.includes(`<loc>${publicUrl}</loc>`)) throw new Error("sitemap.xml must point at the public page.");
if (!config.includes('url: ""')) throw new Error("Support must remain disabled until a receiving account is configured.");
if (!script.includes('url.protocol !== "https:"')) throw new Error("Support configuration must reject non-HTTPS links.");
for (const forbiddenDataNotice of ["카카오 ID, 전화번호, 이메일", "webhook URL, 토큰, 비밀값", "공개 GitHub Issue"]) {
  if (!interestForm.includes(forbiddenDataNotice)) throw new Error(`Missing interest-form privacy boundary: ${forbiddenDataNotice}`);
}
console.log(`verified ${resolve(root.pathname, "index.html")}`);
