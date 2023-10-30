import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { commonArgTypes, loadingTypes } from "./common";

export const inlineLoadingDesc = {
  parameters: {
    componentSubtitle: "Loader는 진행률 표시없이 프로세스 중임을 나타냅니다.",
    options: { showPanel: true },
  },
  argTypes: {
    color: {
      description: "프로세스의 상태를 상징하는 컬러입니다.",
      options: loadingTypes,
      table: {
        defaultValue: {
          summary: "default",
        },
        type: {
          summary: arrayToArgTypes(loadingTypes),
        },
      },
    },
    ...commonArgTypes,
  },
};
