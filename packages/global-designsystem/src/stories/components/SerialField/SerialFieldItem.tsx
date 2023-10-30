import { useTheme } from "../../../hooks/useTheme";
import { AlignType, SerialFieldState } from "../../../types";
import {
  StyledFadeInDiv,
  StyledFadeOutDiv,
  StyledMaskingContainerDiv,
  StyledMaskingSpan,
  StyledSerialItemDiv,
  StyledSerialTypography,
} from "./styles";

export const SerialFieldItem = ({
  value = "​",
  isFocused,
  cursorPosition,
  masking,
  maskingDelay,
  state,
}: {
  value: string;
  isFocused: boolean;
  cursorPosition: AlignType;
  masking: boolean;
  maskingDelay: number;
  state?: SerialFieldState;
}) => {
  const theme = useTheme();

  return (
    <StyledSerialItemDiv
      theme={theme}
      isFocused={isFocused}
      cursorPosition={cursorPosition}
      masking={masking}
      state={state}
      isValue={value !== "​"}
    >
      {masking === false ? (
        <StyledSerialTypography variant={"h6"} theme={theme} state={state}>
          {value}
        </StyledSerialTypography>
      ) : (
        value !== "​" && (
          <StyledMaskingContainerDiv>
            <StyledFadeOutDiv maskingDelay={maskingDelay}>
              <StyledSerialTypography
                variant={"h6"}
                theme={theme}
                state={state}
              >
                {value}
              </StyledSerialTypography>
            </StyledFadeOutDiv>
            <StyledFadeInDiv maskingDelay={maskingDelay}>
              <StyledMaskingSpan theme={theme} state={state} />
            </StyledFadeInDiv>
          </StyledMaskingContainerDiv>
        )
      )}
    </StyledSerialItemDiv>
  );
};
