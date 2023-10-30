import { css } from "@emotion/react";
import TokenPolygonIcon1x from "../assets/icons/image_icon/token/polygon/@1x.png";
import TokenPolygonIcon2x from "../assets/icons/image_icon/token/polygon/@2x.png";
import TokenPolygonIcon3x from "../assets/icons/image_icon/token/polygon/@3x.png";

const TokenPolygonIcon = ({
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
      src={TokenPolygonIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenPolygonIcon2x} 2x, ${TokenPolygonIcon3x} 3x`}
      alt={alt || "TokenPolygonIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenPolygonIcon;
