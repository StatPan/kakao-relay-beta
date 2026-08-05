import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = new URL("./", import.meta.url);
const index = await readFile(new URL("index.html", root), "utf8");
const config = await readFile(new URL("support-config.js", root), "utf8");
const script = await readFile(new URL("site.js", root), "utf8");
const interestForm = await readFile(new URL("../.github/ISSUE_TEMPLATE/beta-interest.yml", root), "utf8");

const required = [
  "무료 베타 관심 등록",
  "카카오톡 공식 API 또는 공식 봇인 척하지 않습니다.",
  "카카오 ID, 기기 일련번호, 알림·대화 내용",
  "후원은 기능, 베타 접근, 지원 우선순위 또는 라이선스를 제공하지 않습니다.",
  "issues/new?template=beta-interest.yml",
];
for (const phrase of required) {
  if (!index.includes(phrase)) throw new Error(`Missing required public-boundary copy: ${phrase}`);
}
if (!config.includes('url: ""')) throw new Error("Support must remain disabled until a receiving account is configured.");
if (!script.includes('url.protocol !== "https:"')) throw new Error("Support configuration must reject non-HTTPS links.");
for (const forbiddenDataNotice of ["카카오 ID, 전화번호, 이메일", "webhook URL, 토큰, 비밀값", "공개 GitHub Issue"]) {
  if (!interestForm.includes(forbiddenDataNotice)) throw new Error(`Missing interest-form privacy boundary: ${forbiddenDataNotice}`);
}
console.log(`verified ${resolve(root.pathname, "index.html")}`);
