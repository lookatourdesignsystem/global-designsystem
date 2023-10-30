import { css } from "@emotion/react";
import TokenHuobiIcon1x from "../assets/icons/image_icon/token/huobi/@1x.png";
import TokenHuobiIcon2x from "../assets/icons/image_icon/token/huobi/@2x.png";
import TokenHuobiIcon3x from "../assets/icons/image_icon/token/huobi/@3x.png";

const TokenHuobiIcon = ({
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
      src={TokenHuobiIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenHuobiIcon2x} 2x, ${TokenHuobiIcon3x} 3x`}
      alt={alt || "TokenHuobiIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenHuobiIcon;
