import { commonArgTypes } from "./common";

export const progressBarDesc = {
  parameters: {
    componentSubtitle:
      "ProgressBar는 라인 형태로 프로세스 중임을 나타내고 진행률을 표시할 수 있습니다.",
    options: { showPanel: true },
  },
  argTypes: {
    state: {
      description: "프로세스의 상태를 의미하는 색깔입니다.",
      control: {
        type: "radio",
      },
      options: ["normal", "error", "success"],
      table: {
        type: { summary: '"normal" | "error" | "success"' },
      },
    },
    label: {
      description: "ProgressBar 위에 보여질 텍스트입니다.",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    helperText: {
      description: "ProgressBar 아래에 보여질 텍스트입니다.",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      description: "range 범위 내에서의 프로세스 진행정도입니다.",
      table: {
        defaultValue: {
          summary: 0,
        },
        type: { summary: "number" },
      },
    },
    range: {
      description: "value의 범위입니다.",
      table: {
        defaultValue: {
          summary: { min: 0, max: 100 },
        },
        type: { summary: "{ min: number; max: number }" },
      },
    },
    variant: {
      description:
        "- determinate :  프로세스에 특정한 진행정도(value)를 표시합니다.<br/>- indeterminate : 불특정 대기 시간을 시각화합니다. value는 사용되지 않습니다.",
      options: ["determinate", "indeterminate"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: "indeterminate",
        },
        type: { summary: '"determinate" | "indeterminate”' },
      },
    },
    ...commonArgTypes,
  },
};
