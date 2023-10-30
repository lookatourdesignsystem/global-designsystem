import { css } from "@emotion/react";
import WalletPolygonIcon1x from "../assets/icons/image_icon/wallet/polygon/@1x.png";
import WalletPolygonIcon2x from "../assets/icons/image_icon/wallet/polygon/@2x.png";
import WalletPolygonIcon3x from "../assets/icons/image_icon/wallet/polygon/@3x.png";

const WalletPolygonIcon = ({
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
      src={WalletPolygonIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletPolygonIcon2x} 2x, ${WalletPolygonIcon3x} 3x`}
      alt={alt || "WalletPolygonIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletPolygonIcon;
