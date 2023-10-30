import { commonArgTypes } from "./common";

export const menuDesc = {
  parameters: {
    componentSubtitle: "Menu는 선택 목록을 표시합니다.",
    options: { showPanel: true },
  },
  argTypes: {
    show: {
      description: "Menu 노출 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    anchorEl: {
      description: "anchorEl 클릭했을 때 Menu가 popup형식으로 보여집니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    vertical: {
      description:
        "anchorEl가 있을 경우, anchorEl을 기준으로 vertical 방향의 위치입니다.",
      options: ["top", "bottom"],
      table: {
        type: {
          summary: '"top" | "bottom"',
        },
      },
    },
    horizontal: {
      description:
        "anchorEl가 있을 경우, anchorEl을 기준으로 horizontal 방향의 위치입니다.",
      options: ["left", "right", "center"],
      table: {
        type: {
          summary: '"left" | "right" | "center"',
        },
      },
    },
    backdropColor: {
      description:
        "anchorEl과 함께 사용하여 Menu가 popup 형식으로 보여질 때 backdrop의 컬러입니다.",
      control: {
        type: "color",
      },
      table: {
        defaultValue: {
          summary: '"transparent"',
        },
        type: {
          summary: "string",
        },
      },
    },
    disableBackDrop: {
      description:
        "anchorEl과 함께 사용하여 Menu가 popup 형식으로 보여질 때 backdrop 존재 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    onClickAway: {
      description:
        "anchorEl과 함께 사용하여 Menu컴포넌트가 show={true}인 상태에서 컴포넌트 외 다른 영역을 클릭했을 때 트리거되는 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    onMouseLeave: {
      description:
        "anchorEl과 함께 사용하여 컴포넌트에서 다른영역을 마우스를 이동했을 때 트리거되는 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    onMouseEnter: {
      description:
        "anchorEl과 함께 사용하여 컴포넌트 외부에서 컴포넌트로 마우스를 이동했을 때 트리거되는 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    ...commonArgTypes,
  },
};
