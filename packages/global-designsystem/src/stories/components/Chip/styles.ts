import styled from "@emotion/styled";
import { ColorOptions } from "../../../modules/colors";
import { ChipColor, ChipSize, ChipType } from "../../../types";
import { Typography } from "../../foundation/Typography";

const getBackgroundColor = ({
  type,
  color,
  selected,
  colors,
}: {
  type: ChipType;
  color: ChipColor;
  selected: boolean;
  colors: ColorOptions;
}) => {
  if (type === "solid") {
    if (selected) {
      return colors.background.global;
    }

    if (color === "default") {
      return colors.gray[1000];
    } else if (color === "primary") {
      return colors.primary.main;
    } else if (color === "secondary") {
      return colors.secondary.main;
    }
  } else if (type === "outline") {
    if (selected) {
      if (color === "default") {
        return colors.gray[1000];
      } else if (color === "primary") {
        return colors.primary.main;
      } else if (color === "secondary") {
        return colors.secondary.main;
      }
    }
    return colors.background.global;
  } else if (type === "solidSub") {
    if (selected) {
      if (color === "default") {
        return colors.gray[1000];
      } else if (color === "primary") {
        return colors.primary.main;
      } else if (color === "secondary") {
        return colors.secondary.main;
      }
    }
    if (color === "default") {
      return colors.gray[100];
    } else if (color === "primary") {
      return colors.primary.lighten;
    } else if (color === "secondary") {
      return colors.secondary.lighten;
    }
  }
};

const getBorderColor = ({
  type,
  color,
  selected,
  colors,
}: {
  type: ChipType;
  color: ChipColor;
  selected: boolean;
  colors: ColorOptions;
}) => {
  if (type === "solid") {
    if (selected) {
      if (color === "default") {
        return colors.gray[1000];
      } else if (color === "primary") {
        return colors.primary.main;
      } else if (color === "secondary") {
        return colors.secondary.main;
      }
    }
    return colors.gray[0];
  } else if (type === "outline") {
    if (color === "default") {
      return colors.gray[1000];
    } else if (color === "primary") {
      return colors.primary.main;
    } else if (color === "secondary") {
      return colors.secondary.main;
    }
  } else if (type === "solidSub") {
    if (selected) {
      if (color === "default") {
        return colors.gray[1000];
      } else if (color === "primary") {
        return colors.primary.main;
      } else if (color === "secondary") {
        return colors.secondary.main;
      }
    }
    if (color === "default") {
      return colors.gray[100];
    } else if (color === "primary") {
      return colors.primary.lighten;
    } else if (color === "secondary") {
      return colors.secondary.lighten;
    }
  }
};

const getTextColor = ({
  type,
  color,
  selected,
  colors,
}: {
  type: ChipType;
  color: ChipColor;
  selected: boolean;
  colors: ColorOptions;
}) => {
  if (type === "solid") {
    if (selected) {
      if (color === "default") {
        return colors.gray[1000];
      } else if (color === "primary") {
        return colors.primary.main;
      } else if (color === "secondary") {
        return colors.secondary.main;
      }
    }

    if (color === "default") {
      return colors.gray[0];
    } else if (color === "primary") {
      return colors.primary.text;
    } else if (color === "secondary") {
      return colors.secondary.text;
    }
  } else if (type === "outline") {
    if (selected) {
      if (color === "default") {
        return colors.gray[0];
      } else if (color === "primary") {
        return colors.primary.text;
      } else if (color === "secondary") {
        return colors.secondary.text;
      }
    }
    if (color === "default") {
      return colors.gray[1000];
    } else if (color === "primary") {
      return colors.primary.main;
    } else if (color === "secondary") {
      return colors.secondary.main;
    }
  } else if (type === "solidSub") {
    if (selected) {
      if (color === "default") {
        return colors.gray[0];
      } else if (color === "primary") {
        return colors.primary.text;
      } else if (color === "secondary") {
        return colors.secondary.text;
      }
    }
    if (color === "default") {
      return colors.gray[1000];
    } else if (color === "primary") {
      return colors.primary.main;
    } else if (color === "secondary") {
      return colors.secondary.main;
    }
  }
};

export const StyledChipDiv = styled.div<{
  color: ChipColor;
  type: ChipType;
  selected: boolean;
  disabled: boolean;
  size: ChipSize;
  onClick: any;
  colors: ColorOptions;
}>`
  --borderWidth: ${({ type, selected }) =>
    (type === "solid" && selected) || (type === "outline" && !selected)
      ? "1px"
      : "0px"};

  --paddingX: ${({ size }) => (size === "s" ? "3px" : "3.5px")};
  --paddingY: ${({ size }) => (size === "s" ? "8px" : "12px")};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--paddingX) - var(--borderWidth))
    calc(var(--paddingY) - var(--borderWidth));
  border-width: var(--borderWidth);
  border-radius: 100px;
  border-style: solid;
  border-color: ${({ type, color, selected, colors }) =>
    getBorderColor({ type, color, selected, colors })};
  background-color: ${({ type, color, selected, colors }) =>
    getBackgroundColor({ type, color, selected, colors })};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  cursor: ${({ onClick, disabled }) =>
    !disabled && onClick !== undefined ? "pointer" : "default"};
`;

export const StyledChipTextTypography = styled(Typography)<{
  color: ChipColor;
  type: ChipType;
  selected: boolean;
  disabled: boolean;
  size: ChipSize;
  colors: ColorOptions;
}>`
  width: max-content;
  color: ${({ type, color, selected, colors }) =>
    getTextColor({ type, color, selected, colors })};
`;
