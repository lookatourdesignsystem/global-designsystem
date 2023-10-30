import { css } from "@emotion/react";
import ChainPolygonIcon1x from "../assets/icons/image_icon/chain/polygon/@1x.png";
import ChainPolygonIcon2x from "../assets/icons/image_icon/chain/polygon/@2x.png";
import ChainPolygonIcon3x from "../assets/icons/image_icon/chain/polygon/@3x.png";

const ChainPolygonIcon = ({
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
      src={ChainPolygonIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${ChainPolygonIcon2x} 2x, ${ChainPolygonIcon3x} 3x`}
      alt={alt || "ChainPolygonIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default ChainPolygonIcon;
