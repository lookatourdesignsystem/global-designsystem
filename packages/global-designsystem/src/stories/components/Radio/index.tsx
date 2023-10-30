import { useTheme } from "../../../hooks/useTheme";
import { SizeType } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { RadioButtonContainerSpan, RadioInput } from "./style";
import {
  RadioBlankOutlinedIcon,
  RadioOutlinedIcon,
} from "@lookatourdesignsystem/icons-library";
import { inputSize } from "src/modules/common";

export interface RadioProps {
  id: string;
  name: string;
  value: string;
  size?: Extract<SizeType, "s" | "m" | "l">;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange: (checked: boolean, id: string, value: string) => void;
  className?: string;
  testid?: string;
}

export const Radio = ({
  className,
  size = "m",
  onChange,
  checked = false,
  disabled,
  name,
  id,
  value,
  required,
  testid,
}: RadioProps) => {
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
    <RadioButtonContainerSpan
      className={getJoinedClassName("Radio", {
        className: getClassNames(checked, size, className),
      })}
      disabled={disabled}
      data-testid={testid}
    >
      {checked ? (
        <RadioOutlinedIcon
          color={theme.colors.system.info.main}
          fontSize={inputSize[size]}
        />
      ) : (
        <RadioBlankOutlinedIcon
          color={theme.colors.gray[400]}
          fontSize={inputSize[size]}
        />
      )}
      <RadioInput
        type="radio"
        checked={checked}
        disabled={disabled}
        id={id}
        onChange={(e) => {
          onChange(e.target.checked, id, value);
        }}
        name={name}
        required={required}
        value={value}
      />
    </RadioButtonContainerSpan>
  );
};
