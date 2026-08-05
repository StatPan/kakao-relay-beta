(() => {
  const support = window.KAKAO_RELAY_SUPPORT;
  const target = document.querySelector("#support-action");
  if (!target || !support || typeof support.url !== "string") return;

  let url;
  try {
    url = new URL(support.url);
  } catch {
    return;
  }
  if (url.protocol !== "https:") return;

  target.replaceChildren();
  const link = document.createElement("a");
  link.className = "button button-primary";
  link.href = url.toString();
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = typeof support.label === "string" && support.label.trim() ? support.label : "자발적으로 후원하기";

  const note = document.createElement("p");
  note.textContent = "후원은 완전히 선택 사항이며, 기능·베타 접근·지원 우선순위·라이선스를 제공하지 않습니다.";
  target.append(link, note);
})();
