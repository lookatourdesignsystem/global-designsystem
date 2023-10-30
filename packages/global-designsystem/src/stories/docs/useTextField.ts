export const useTextFieldDesc = {
  parameters: {
    componentSubtitle:
      "useTextField는 TextField와 함께 사용되어 TextField의 초기값, 유효성 체크, 포멧을 핸들링할 수 있습니다.",
    options: { showPanel: false },
  },
  argTypes: {
    initialValue: {
      description: "TextField의 초기값입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    validate: {
      description:
        "TextField에 값을 입력할 때마다 유효성을 체크하는 함수입니다.",
      table: {
        type: {
          summary: "(value: string) => { isValid: boolean; message: string; }",
        },
      },
    },
    format: {
      description:
        "TextField에 값을 입력할 때마다 입력된 값을 정제해 return할 수 있습니다.",
      table: {
        type: {
          summary: "(value: string) => string",
        },
      },
    },
  },
};
