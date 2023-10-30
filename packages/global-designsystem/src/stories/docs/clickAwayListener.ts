import { commonArgTypes } from "./common";

export const clickAwayListenerDesc = {
  parameters: {
    componentSubtitle:
      "자식 요소 외부에서 클릭 이벤트가 발생하는 시점을 감지합니다.",
    docs: {
      inlineStories: false,
      iframeHeight: 300,
    },
    options: { showPanel: true },
  },
  argTypes: {
    children: {
      description: "내부에 보여질 컨텐츠입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    onClickAway: {
      description: "children 외부를 클릭했을 때 실행될 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    mouseEvent: {
      description: "트리거 될 마우스 이벤트입니다.",
      options: [
        "click",
        "mousedown",
        "mouseup",
        "pointerdown",
        "pointerup",
        false,
      ],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"click"',
        },
        type: {
          summary:
            '"click" | "mousedown" | "mouseup" | "pointerdown" | "pointerup" | false',
        },
      },
    },
    touchEvent: {
      description: "트리거 될 터치 이벤트입니다.",
      options: ["touchend", "touchstart", false],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"touchend"',
        },
        type: {
          summary: '"touchend" | "touchstart" | false',
        },
      },
    },
    ...commonArgTypes,
  },
};
