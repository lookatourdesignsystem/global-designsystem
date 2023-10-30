import { css } from "@emotion/react";
import TokenDashIcon1x from "../assets/icons/image_icon/token/dash/@1x.png";
import TokenDashIcon2x from "../assets/icons/image_icon/token/dash/@2x.png";
import TokenDashIcon3x from "../assets/icons/image_icon/token/dash/@3x.png";

const TokenDashIcon = ({
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
      src={TokenDashIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenDashIcon2x} 2x, ${TokenDashIcon3x} 3x`}
      alt={alt || "TokenDashIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenDashIcon;
