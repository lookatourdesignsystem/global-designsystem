export const useTextareaDesc = {
  parameters: {
    componentSubtitle:
      "useTextarea는 Textarea와 함께 사용되어 TextField의 초기값, 유효성 체크를 핸들링할 수 있습니다.",
    options: { showPanel: false },
  },
  argTypes: {
    initialValue: {
      description: "Textarea의 초기값입니다.",
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
        "Textarea에 값을 입력할 때마다 유효성을 체크하는 함수입니다.",
      table: {
        type: {
          summary: "(value: string) => { isValid: boolean; message: string; }",
        },
      },
    },
  },
};
