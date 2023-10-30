export const iconDesc = {
  parameters: {
    componentSubtitle: "아이콘 요소를 삽입할 때 사용하는 컴포넌트 입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    fontSize: {
      description: "아이콘의 크기입니다.",
      table: {
        defaultValue: {
          summary: 24,
        },
        type: {
          summary: "number",
        },
      },
    },
    color: {
      description: "아이콘의 컬러입니다.",
      control: { type: "color" },
      table: {
        defaultValue: {
          summary: '"currentColor"',
        },
        type: {
          summary: "string",
        },
      },
    },
    children: {
      description: "컴포넌트 내부에 들어갈 이미지 파일입니다.",
      table: {
        type: {
          summary: "ReactComponent",
        },
      },
    },
    className: {
      description: "추가적으로 class를 커스텀할 수 있습니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
};
