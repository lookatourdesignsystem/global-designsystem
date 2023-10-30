import styled from "@emotion/styled";
import { LabelAlignControl, LabelPlacement } from "../../../types";

export const FormControlLabelContainer = styled.label<{
  labelPlacement: LabelPlacement;
  alignControl: LabelAlignControl;
  disabled?: boolean;
}>(
  {
    display: "inline-flex",
    gap: ".5rem",
  },
  ({ labelPlacement = "end", alignControl = "start", disabled = false }) => {
    let containerStyle = {};
    switch (labelPlacement) {
      case "bottom":
        containerStyle = {
          ...containerStyle,
          flexDirection: "column",
        };
        break;
      case "end":
        containerStyle = {
          ...containerStyle,
          flexDirection: "row",
        };
        break;
      case "start":
        containerStyle = {
          ...containerStyle,
          flexDirection: "row-reverse",
        };
        break;
      case "top":
        containerStyle = {
          ...containerStyle,
          flexDirection: "column-reverse",
        };
        break;
    }
    switch (alignControl) {
      case "start":
        containerStyle = {
          ...containerStyle,
          alignItems: "flex-start",
        };
        break;
      case "center":
        containerStyle = {
          ...containerStyle,
          alignItems: "center",
        };
        break;
      case "end":
        containerStyle = {
          ...containerStyle,
          alignItems: "flex-end",
        };
        break;
    }
    if (disabled === true) {
      containerStyle = {
        ...containerStyle,
        pointerEvents: "none",
      };
    }
    return { ...containerStyle };
  }
);
