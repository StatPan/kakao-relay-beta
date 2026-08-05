(() => {
  const preview = document.querySelector("[data-relay-preview]");
  if (preview) {
    const examples = {
      telegram: {
        label: "Telegram으로 보이는 가상 예시",
        body: "예시 대화\n가상의 작성자: 오늘 3시에 확인해 주세요.",
      },
      discord: {
        label: "Discord로 보이는 가상 예시",
        body: "가상의 작성자: 오늘 3시에 확인해 주세요.",
      },
      webhook: {
        label: "HTTPS webhook으로 보이는 가상 예시",
        body: '{\n  "sample": true,\n  "event": "notification.preview",\n  "conversation": "예시 대화",\n  "sender": "가상의 작성자",\n  "text": "오늘 3시에 확인해 주세요."\n}',
      },
    };
    const output = preview.querySelector("#preview-output");
    const label = output?.querySelector(".preview-label");
    const code = output?.querySelector("code");

    preview.querySelectorAll("[data-preview-destination]").forEach((button) => {
      button.addEventListener("click", () => {
        const example = examples[button.dataset.previewDestination];
        if (!example || !label || !code) return;
        preview.querySelectorAll("[data-preview-destination]").forEach((candidate) => {
          candidate.setAttribute("aria-pressed", String(candidate === button));
        });
        label.textContent = example.label;
        code.textContent = example.body;
      });
    });
  }

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
