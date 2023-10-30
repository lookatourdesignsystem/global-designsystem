import { css } from "@emotion/react";
import TokenUsdcIcon1x from "../assets/icons/image_icon/token/usdc/@1x.png";
import TokenUsdcIcon2x from "../assets/icons/image_icon/token/usdc/@2x.png";
import TokenUsdcIcon3x from "../assets/icons/image_icon/token/usdc/@3x.png";

const TokenUsdcIcon = ({
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
      src={TokenUsdcIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenUsdcIcon2x} 2x, ${TokenUsdcIcon3x} 3x`}
      alt={alt || "TokenUsdcIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenUsdcIcon;
