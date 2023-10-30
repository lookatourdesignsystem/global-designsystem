import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { spacingTypes, commonArgTypes } from "./common";

export const stackDesc = {
  parameters: {
    componentSubtitle:
      "Stack는 목록을 한 방향으로 나열할 때 사용되는 구성요소입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    width: {
      description: "Stack의 너비입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    height: {
      description: "Stack의 높이입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    direction: {
      description: "Stack의 flex-direction입니다.",
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"column"',
        },
        type: {
          summary: '"row" | "row-reverse" | "column" | "column-reverse"',
        },
      },
    },
    spacing: {
      description: "children 엘리먼트들 간의 간격입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    justifyContent: {
      description: "flexbox에서 justify-content값입니다.",
      options: [
        "flex-start",
        "center",
        "space-between",
        "flex-end",
        "space-around",
        "space-evenly",
      ],
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"flex-start"',
        },
        type: {
          summary:
            '"flex-start" | "center" | "space-between" | "flex-end" | "space-around" | "space-evenly"',
        },
      },
    },
    alignItems: {
      description: "flexbox에서 align-items값 입니다.",
      options: [
        "baseline",
        "normal",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
      ],
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"normal"',
        },
        type: {
          summary:
            '"baseline" | "normal" | "stretch" | "center" | "flex-start" | "flex-end"',
        },
      },
    },
    background: {
      description: "배경 스타일입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    p: {
      description: "padding값 입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    pt: {
      description: "padding-top값 입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    pr: {
      description: "padding-right값 입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    pb: {
      description: "padding-bottom값 입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    pl: {
      description: "padding-left값 입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    inline: {
      description: "true이면 display: inline-flex가 됩니다.",
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
      description: "내부 컨텐츠입니다.",
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
