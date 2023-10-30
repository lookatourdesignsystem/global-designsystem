import { commonArgTypes, typoVariantTypes } from "./common";
import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";

export const formControlLabelDesc = {
  parameters: {
    componentSubtitle:
      "Checkbox, Radio, Switch 와 결합하여 요소에 대한 라벨 역할을 합니다.",
    options: { showPanel: true },
  },
  argTypes: {
    label: {
      description: "control 옆에 보여질 내용입니다.",
      table: {
        type: {
          control: {
            summary: "string",
          },
        },
      },
    },
    labelPlacement: {
      description: "control 기준으로 label의 위치입니다.",
      options: ["bottom", "end", "start", "top"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"end"',
        },
        type: {
          summary: '"bottom" | "end" | "start" | "top"',
        },
      },
    },
    alignControl: {
      description: "control의 vertical 위치입니다.",
      options: ["end", "start", "center"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"center"',
        },
        type: {
          summary: '"end" | "start" | "center"',
        },
      },
    },
    control: {
      description:
        "control요소로 Radio, Switch, Checkbox가 들어갈 수 있습니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    checked: {
      description: "checked 여부로 control 요소에 pass될 값입니다.",
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
    disabled: {
      description: "disabled 여부로 control 요소에 pass될 값입니다.",
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
    htmlFor: {
      description:
        "label와 control를 id로 매칭하기 위한 (접근성)요소입니다. Radio, Checkbox, Switch의 id와 동일한 값이어야 합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    variant: {
      description: "title의 Typography variant입니다.",
      options: typoVariantTypes,
      table: {
        defaultValue: {
          summary: '"body1"',
        },
        type: {
          summary: arrayToArgTypes(typoVariantTypes),
        },
      },
    },
    value: {
      description: "control 요소에 pass될 값입니다.",
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    ...commonArgTypes,
  },
};
