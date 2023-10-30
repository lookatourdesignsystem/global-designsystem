import {
  getJoinedClassName,
  hexToRgba,
} from "@lookatourdesignsystem/utils-library";
import { cloneElement, ReactElement, ReactNode } from "react";
import { LabelAlignControl, LabelPlacement, TypoVariant } from "../../../types";
import { Typography } from "../../foundation/Typography";
import { FormControlLabelContainer } from "./styles";
import { useTheme } from "src/hooks/useTheme";

export interface FormControlLabelProps {
  className?: string;
  label?: ReactNode;
  labelPlacement?: LabelPlacement;
  alignControl?: LabelAlignControl;
  control: ReactElement;
  checked?: boolean;
  disabled?: boolean;
  value?: string | number;
  htmlFor?: string;
  variant?: TypoVariant;
  testid?: string;
}

export const FormControlLabel = ({
  className,
  label,
  labelPlacement = "end",
  alignControl = "center",
  control,
  checked = false,
  disabled = false,
  value,
  htmlFor,
  variant = "body1",
  testid,
}: FormControlLabelProps) => {
  const theme = useTheme();
  return (
    <FormControlLabelContainer
      className={getJoinedClassName("FormControlLabel", {
        className,
      })}
      labelPlacement={labelPlacement}
      alignControl={alignControl}
      htmlFor={htmlFor}
      disabled={control.props.disabled || disabled}
      data-testid={testid}
    >
      {cloneElement(control, {
        checked: control.props.checked || checked,
        disabled: control.props.disabled || disabled,
        value: control.props.value || value,
      })}
      <Typography
        variant={variant}
        color={
          control.props.disabled || disabled
            ? hexToRgba(theme.colors.text.main, 0.3)
            : theme.colors.text.main
        }
      >
        {label}
      </Typography>
    </FormControlLabelContainer>
  );
};
