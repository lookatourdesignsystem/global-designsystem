import { css } from "@emotion/react";
import TokenEthPolygonIcon1x from "../assets/icons/image_icon/token/eth/polygon/@1x.png";
import TokenEthPolygonIcon2x from "../assets/icons/image_icon/token/eth/polygon/@2x.png";
import TokenEthPolygonIcon3x from "../assets/icons/image_icon/token/eth/polygon/@3x.png";

const TokenEthPolygonIcon = ({
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
      src={TokenEthPolygonIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenEthPolygonIcon2x} 2x, ${TokenEthPolygonIcon3x} 3x`}
      alt={alt || "TokenEthPolygonIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenEthPolygonIcon;
