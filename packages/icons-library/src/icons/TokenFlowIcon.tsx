import { css } from "@emotion/react";
import TokenFlowIcon1x from "../assets/icons/image_icon/token/flow/@1x.png";
import TokenFlowIcon2x from "../assets/icons/image_icon/token/flow/@2x.png";
import TokenFlowIcon3x from "../assets/icons/image_icon/token/flow/@3x.png";

const TokenFlowIcon = ({
  fontSize,
  className,
  alt,
}: {
  fontSize?: number;
  className?: string;
  alt?: string;
}) => {
  return (
    <img
      src={TokenFlowIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenFlowIcon2x} 2x, ${TokenFlowIcon3x} 3x`}
      alt={alt || "TokenFlowIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenFlowIcon;
