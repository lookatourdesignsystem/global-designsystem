import { css } from "@emotion/react";
import TokenApePolygonIcon1x from "../assets/icons/image_icon/token/ape/polygon/@1x.png";
import TokenApePolygonIcon2x from "../assets/icons/image_icon/token/ape/polygon/@2x.png";
import TokenApePolygonIcon3x from "../assets/icons/image_icon/token/ape/polygon/@3x.png";

const TokenApePolygonIcon = ({
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
      src={TokenApePolygonIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenApePolygonIcon2x} 2x, ${TokenApePolygonIcon3x} 3x`}
      alt={alt || "TokenApePolygonIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenApePolygonIcon;
