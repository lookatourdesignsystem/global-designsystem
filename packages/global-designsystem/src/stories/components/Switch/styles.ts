import styled from "@emotion/styled";

export const SwitchContainerSpan = styled.span<{
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

export const SwitchCheckBoxInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SwitchBackBarPath = styled.path`
  transition: fill 0.4s;
`;

export const SwitchCirclePath = styled.path<{ isChecked?: boolean }>`
  transform: translateX(${({ isChecked }) => (isChecked ? "50%" : "0")});
  transition: transform 0.4s, stroke 0.4s;
`;
