export const useSerialFieldDesc = {
  parameters: {
    componentSubtitle:
      "useSerialField는 SerialField와 함께 사용되어 TextField의 초기값, 유효성 체크, 포멧을 핸들링할 수 있습니다.",
    options: { showPanel: false },
  },
  argTypes: {
    validate: {
      description:
        "SerialField에 값을 입력할 때마다 유효성을 체크하는 함수입니다.",
      table: {
        type: {
          summary: "(value: number) => { isValid: boolean; message: string; }",
        },
      },
    },
  },
};
