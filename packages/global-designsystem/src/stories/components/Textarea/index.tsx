import { FocusEventHandler, KeyboardEventHandler } from "react";
import { Property } from "csstype";
import {
  StyledTextareaContainer,
  StyledTextareaLabel,
  StyledTextareaDiv,
} from "./styles";
import { TextFieldState } from "../../../types";
import { Typography } from "../../foundation/Typography";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { useTheme } from "../../../hooks/useTheme";
import { css } from "@emotion/react";

export interface TextareaProps {
  id: string;
  label?: string;
  textAreaRef: React.MutableRefObject<HTMLDivElement | null>;
  inputMode?: React.HTMLAttributes<HTMLDivElement>["inputMode"];
  state?: TextFieldState;
  helperText?: string;
  placeHolder?: string;
  disabled?: boolean;
  onInput?: any;
  onFocus?: FocusEventHandler<HTMLDivElement>;
  readonly?: boolean;
  onKeyUp?: KeyboardEventHandler<HTMLDivElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onKeyPress?: KeyboardEventHandler<HTMLDivElement>;
  height?: string;
  textAlign?: Property.TextAlign;
  required?: boolean;
  className?: string;
  testid?: string;
}

export const Textarea = ({
  id,
  label,
  textAreaRef,
  inputMode = "none",
  helperText,
  placeHolder,
  disabled,
  state,
  onInput,
  onFocus,
  readonly = false,
  onKeyUp,
  onKeyDown,
  onKeyPress,
  height = "128px",
  textAlign = "left",
  required,
  className,
  testid,
}: TextareaProps) => {
  const theme = useTheme();

  return (
    <StyledTextareaContainer
      theme={theme}
      className={getJoinedClassName("TextareaWrapper", {
        className: className,
      })}
      data-testid={testid}
    >
      {label !== "" && label !== undefined && (
        <StyledTextareaLabel
          htmlFor={id}
          marginBottom={theme.spacing[100]}
          className="TextareaLabel"
        >
          <Typography variant="caption1" color={theme.colors.text.low}>
            {label}
          </Typography>
          {required && (
            <Typography
              variant="caption1"
              color={theme.colors.system.error.main}
              className="TextareaAsterisk"
              css={css`
                margin-left: ${theme.spacing[100]}px;
              `}
            >
              *
            </Typography>
          )}
        </StyledTextareaLabel>
      )}
      <StyledTextareaDiv
        className="Textarea"
        ref={textAreaRef}
        theme={theme}
        state={state}
        inputMode={inputMode}
        contentEditable={readonly === false && disabled !== true}
        onInput={onInput}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        onFocus={onFocus}
        height={height}
        textAlign={textAlign}
        placeholder={placeHolder}
        disabled={disabled}
      />
      {helperText !== "" && helperText !== undefined && (
        <Typography
          className="TextareaHelperText"
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
    </StyledTextareaContainer>
  );
};
