import { StyledCheckboxSpan, StyledInput } from "./styles";
import { useTheme } from "../../../hooks/useTheme";
import { SizeType } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import {
  CheckBoxBlankOutlinedIcon,
  CheckBoxFilledIcon,
} from "@lookatourdesignsystem/icons-library";
import { inputSize } from "src/modules/common";
export interface CheckboxProps {
  id: string;
  name: string;
  value: string;
  size?: Extract<SizeType, "s" | "m" | "l">;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  onChange: (checked: boolean, id: string, value: string) => void;
  testid?: string;
}

export const Checkbox = ({
  id,
  name,
  value,
  size = "m",
  checked = false,
  disabled,
  required,
  className,
  onChange,
  testid,
}: CheckboxProps) => {
  const theme = useTheme();

  const getClassNames = (
    checked: boolean,
    size: Extract<SizeType, "s" | "m" | "l"> = "m",
    className?: string
  ) => {
    let classNames = [];

    classNames.push(checked ? "checked" : "unchecked");

    if (size) {
      classNames.push(size);
    }

    if (className) {
      classNames.push(className);
    }

    return classNames.join(" ");
  };

  return (
    <StyledCheckboxSpan
      className={getJoinedClassName("Checkbox", {
        className: getClassNames(checked, size, className),
      })}
      disabled={disabled}
      data-testid={testid}
    >
      {checked ? (
        <CheckBoxFilledIcon
          color={theme.colors.system.info.main}
          fontSize={inputSize[size]}
        />
      ) : (
        <CheckBoxBlankOutlinedIcon
          color={theme.colors.gray[400]}
          fontSize={inputSize[size]}
        />
      )}
      <StyledInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        id={id}
        onChange={(e) => {
          onChange(e.target.checked, id, value);
        }}
        required={required}
        value={value}
        name={name}
      />
    </StyledCheckboxSpan>
  );
};
