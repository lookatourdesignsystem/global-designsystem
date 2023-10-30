import { commonArgTypes } from "./common";

export const overlayScrollbarDesc = {
  parameters: {
    componentSubtitle:
      "OverlayScrollbar는 브라우저 별 스크롤바의 스타일을 통일하기 위한 컴포넌트입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    width: {
      description: "스크롤 영역의 너비입니다.",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    height: {
      description: "스크롤 영역의 높이입니다.",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    element: {
      description: "OverlayScrollbar의 루트 요소의 태그입니다.",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    options: {
      description: "OverlayScrollbars의 옵션입니다.",
      table: {
        defaultValue: { summary: { scrollbars: { autoHide: "scroll" } } },
        type: { summary: "PartialOptions | false | null" },
      },
    },
    events: {
      description: "OverlayScrollbar의 이벤트입니다.",
      table: {
        type: { summary: "EventListeners | false | null" },
      },
    },
    defer: {
      description:
        "브라우저가 유휴 상태인 시점으로 초기화를 연기할 지 여부입니다.",
      table: {
        type: { summary: "boolean | { timeout?: number; }" },
      },
    },
    ...commonArgTypes,
  },
};
