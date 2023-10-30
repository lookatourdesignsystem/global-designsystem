export const useContainerModalDesc = {
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 400,
    },
    componentSubtitle:
      "useContainerModal은 사용해 여러 Modal의 상태를 핸들링할 수 있습니다.",
    options: { showPanel: false },
  },
  argTypes: {
    id: {
      description: "Modal의 id로 Modal을 open, close할 때 사용됩니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    keys: {
      description:
        "update된 prop를 모달에 pass해야하는 경우 prop 이름을 keys로 넘깁니다.",
      table: {
        type: {
          summary: "any",
        },
      },
    },
  },
};
