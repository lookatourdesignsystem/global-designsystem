import { css } from "@emotion/react";
import TokenGemsIcon1x from "../assets/icons/image_icon/token/gems/@1x.png";
import TokenGemsIcon2x from "../assets/icons/image_icon/token/gems/@2x.png";
import TokenGemsIcon3x from "../assets/icons/image_icon/token/gems/@3x.png";

const TokenGemsIcon = ({
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
      src={TokenGemsIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenGemsIcon2x} 2x, ${TokenGemsIcon3x} 3x`}
      alt={alt || "TokenGemsIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenGemsIcon;
