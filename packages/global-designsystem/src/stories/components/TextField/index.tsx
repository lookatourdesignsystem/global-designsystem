import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Property } from "csstype";
import {
  StyledTextFieldContainer,
  StyledTextFieldLabel,
  StyledTextFieldDiv,
  StyledTextFieldInput,
  StyledAssetContainerDiv,
} from "./styles";
import {
  TextFieldAssetPosition,
  TextFieldInputType,
  TextFieldState,
} from "../../../types";
import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { Typography } from "../../foundation/Typography";
import { css } from "@emotion/react";
export interface TextFieldProps {
  id: string;
  type: TextFieldInputType;
  value?: string | number;
  inputMode?: React.HTMLAttributes<HTMLLIElement>["inputMode"];
  state?: TextFieldState;
  label?: string;
  helperText?: string;
  defaultValue?: string | number;
  placeHolder?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  pattern?: string;
  autocomplete?: "on" | "off";
  readonly?: boolean;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  maxlength?: number;
  asset?: ReactNode;
  assetPosition?: TextFieldAssetPosition;
  textAlign?: Property.TextAlign;
  className?: string;
  required?: boolean;
  size?: "s" | "m" | "l";
  testid?: string;
}

export const TextField = ({
  type = "text",
  label,
  id,
  value,
  inputMode,
  helperText,
  placeHolder = " ",
  defaultValue,
  state,
  disabled = false,
  pattern,
  autocomplete = "off",
  readonly,
  onChange,
  onFocus,
  onKeyUp,
  onKeyDown,
  onKeyPress,
  maxlength,
  textAlign = "left",
  asset,
  assetPosition = "right",
  required,
  size = "m",
  className,
  testid,
}: TextFieldProps) => {
  const theme = useTheme();
  const [assetWidth, setAssetWidth] = useState<number>(0);
  const assetRef = useRef<HTMLDivElement>(null);

  const getClassNames = (size: "s" | "m" | "l", disabled: boolean) => {
    let classNames = [];

    if (size) {
      classNames.push(size);
    }

    if (disabled) {
      classNames.push(`typography-default-body${size === "s" ? "2" : "1"}`);
    } else {
      classNames.push(`typography-default-subtitle${size === "s" ? "2" : "1"}`);
    }

    return classNames.join(" ");
  };

  useEffect(() => {
    if (assetRef.current !== null) {
      setAssetWidth(assetRef.current.offsetWidth);
    }
  }, [type, assetRef, assetPosition, asset]);

  return (
    <StyledTextFieldContainer
      className={getJoinedClassName("TextFieldWrapper", {
        className,
      })}
      data-testid={testid}
    >
      {label !== "" && label !== undefined && (
        <StyledTextFieldLabel
          htmlFor={id}
          marginBottom={theme.spacing[100]}
          className="TextFieldLabel"
        >
          <Typography variant="caption1" color={theme.colors.text.low}>
            {label}
          </Typography>
          {required && (
            <Typography
              variant="caption1"
              color={theme.colors.system.error.main}
              className="asterisk"
              css={css`
                margin-left: ${theme.spacing[100]}px;
              `}
            >
              *
            </Typography>
          )}
        </StyledTextFieldLabel>
      )}
      <StyledTextFieldDiv>
        <StyledTextFieldInput
          className={getJoinedClassName("TextField", {
            className: getClassNames(size, disabled),
          })}
          theme={theme}
          state={state}
          type={type}
          id={id}
          value={value}
          autoComplete={autocomplete}
          readOnly={readonly}
          inputMode={inputMode}
          pattern={pattern}
          placeholder={placeHolder}
          defaultValue={defaultValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          maxLength={maxlength}
          disabled={disabled}
          textAlign={textAlign}
          assetPosition={assetPosition}
          assetWidth={assetWidth}
          required={required}
          sizeType={size}
        />
        {assetPosition !== undefined && asset !== undefined && (
          <StyledAssetContainerDiv
            ref={assetRef}
            theme={theme}
            assetPosition={assetPosition}
          >
            {asset}
          </StyledAssetContainerDiv>
        )}
      </StyledTextFieldDiv>
      {helperText !== "" && helperText !== undefined && (
        <Typography
          className="TextFieldHelperText"
          variant="caption1"
          color={
            state === "success"
              ? theme.colors.system.success.main
              : state === "error"
              ? theme.colors.system.error.main
              : theme.colors.text.low
          }
        >
          {helperText}
        </Typography>
      )}
    </StyledTextFieldContainer>
  );
};
