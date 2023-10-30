import { useTheme } from "../../../hooks/useTheme";
import { SizeType } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import {
  SwitchBackBarPath,
  SwitchCheckBoxInput,
  SwitchCirclePath,
  SwitchContainerSpan,
} from "./styles";
import { css } from "@emotion/react";
import { inputSize } from "src/modules/common";

export interface SwitchProps {
  id: string;
  name: string;
  value: string;
  size?: Extract<SizeType, "s" | "m" | "l">;
  checked?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean, id: string, value: string) => void;
  className?: string;
  testid?: string;
}

export const Switch = ({
  id,
  name,
  size = "m",
  checked = false,
  disabled,
  onChange,
  value,
  className,
  testid,
}: SwitchProps) => {
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
    <SwitchContainerSpan
      className={getJoinedClassName("Switch", {
        className: getClassNames(checked, size, className),
      })}
      disabled={disabled}
      data-testid={testid}
    >
      <SwitchCheckBoxInput
        type="checkbox"
        onChange={(e) => {
          onChange(e.target.checked, id, value);
        }}
        checked={checked}
        disabled={disabled}
        value={value}
        id={id}
        name={name}
        className="SwitchInput"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
        css={css`
          width: ${inputSize[size] * 2}px;
          height: ${inputSize[size]}px;
        `}
      >
        <SwitchBackBarPath
          d="M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20H10C4.47715 20 0 15.5228 0 10Z"
          fill={
            checked ? theme.colors.system.info.main : theme.colors.gray[400]
          }
        />
        <SwitchCirclePath
          d="M0.5 10C0.5 4.75614 4.75614 0.5
           10 0.5C15.2439 0.5 19.5 4.75614 19.5 10C19.5 15.2439 15.2439 19.5 10 19.5C4.75614 19.5 0.5 15.2439 0.5 10Z"
          fill="white"
          isChecked={checked}
          stroke={
            checked ? theme.colors.system.info.main : theme.colors.gray[400]
          }
        />
      </svg>
    </SwitchContainerSpan>
  );
};
