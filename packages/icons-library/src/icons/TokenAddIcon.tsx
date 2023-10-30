import { css } from "@emotion/react";
import TokenAddIcon1x from "../assets/icons/image_icon/token/add/@1x.png";
import TokenAddIcon2x from "../assets/icons/image_icon/token/add/@2x.png";
import TokenAddIcon3x from "../assets/icons/image_icon/token/add/@3x.png";

const TokenAddIcon = ({
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
      src={TokenAddIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenAddIcon2x} 2x, ${TokenAddIcon3x} 3x`}
      alt={alt || "TokenAddIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenAddIcon;
