import { commonArgTypes } from "./common";

export const dividerDesc = {
  parameters: {
    componentSubtitle:
      "Divider는 목록 및 레이아웃의 콘텐츠를 그룹화하는 선입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    orientation: {
      description: "Divider가 나열될 방향입니다.",
      options: ["horizontal", "vertical"],
      control: {
        type: "radio",
      },
      table: {
        type: {
          summary: '"horizontal" | "vertical"',
        },
      },
    },
    stroke: {
      description: "Divider 선의 두께입니다.",
      control: {
        type: "number",
      },
      table: {
        defaultValue: {
          summary: 1,
        },
        type: {
          summary: "number",
        },
      },
    },
    length: {
      description: "Divider 선의 길이입니다.",
      table: {
        defaultValue: {
          summary: "orientation === “horizontal” ? “100%” ? “inherit”",
        },
        type: {
          summary: "string",
        },
      },
    },
    ...commonArgTypes,
  },
};
