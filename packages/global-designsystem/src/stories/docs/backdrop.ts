import { commonArgTypes } from "./common";

export const backdropDesc = {
  parameters: {
    componentSubtitle:
      "Dim(Backdrop)은 화면 위에 어두운 레이어로 덮어 사용자의 초점을 화면의 특정 요소로 집중시키는 용도로 사용됩니다.",
    docs: {
      inlineStories: false,
      iframeHeight: 400,
    },
    options: { showPanel: true },
  },
  argTypes: {
    disableBackdropClose: {
      description:
        "true 로 설정하면 Backdrop 을 클릭하는 함수가 실행되지 않습니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    color: {
      description: "Backdrop 의 색깔입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    onClick: {
      description: "Backdrop 을 클릭할 때 실행되는 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    ...commonArgTypes,
  },
};
