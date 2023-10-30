import { commonArgTypes } from "./common";

export const containerDesc = {
  parameters: {
    componentSubtitle:
      "Container는 브레이크 포인트에 따라 스타일이 변경되며 전체적인 레이아웃을 잡는데 사용됩니다.",
    options: { showPanel: true },
  },
  argTypes: {
    full: {
      description:
        "true이면 브레이크 포인트에 따른 max-width가 무시되고 항상 전체 너비가 됩니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    children: {
      description: "Container 내부 컨텐츠입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    ...commonArgTypes,
  },
};
