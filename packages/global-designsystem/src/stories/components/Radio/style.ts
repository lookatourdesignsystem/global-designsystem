import styled from "@emotion/styled";
export const RadioButtonContainerSpan = styled.span<{
  disabled?: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 0;
  cursor: pointer;

  ${({ disabled }) => disabled === true && `opacity: 0.3; point-events: none;`};
`;

export const RadioInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
`;
