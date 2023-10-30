import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { commonArgTypes, spacingTypes } from "./common";

export const spacerDesc = {
  parameters: {
    componentSubtitle:
      "Spacer는 눈에 보이는 요소는 아니나 컴포넌트간의 공간이 필요할 때 사용합니다.",
    options: { showPanel: true },
  },
  argTypes: {
    x: {
      description: "너비입니다.",
      control: {
        type: "select",
      },
      options: spacingTypes,
      table: {
        defaultValue: {
          summary: 0,
        },
        type: { summary: arrayToArgTypes(spacingTypes) },
      },
    },
    y: {
      description: "높이입니다.",
      control: {
        type: "select",
      },
      options: spacingTypes,
      table: {
        defaultValue: {
          summary: 0,
        },
        type: { summary: arrayToArgTypes(spacingTypes) },
      },
    },
    flexGrow: {
      description:
        "flex 부모 컨테이너에 빈 공간이 남아있고 자식 아이템에 flex-grow가 설정되어 있으면 빈 공간을 채우게 됩니다.",
      control: {
        type: "number",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: { summary: "number" },
      },
    },
    ...commonArgTypes,
  },
};
