import { css } from "@emotion/react";
import WalletCoinbasePolygonIcon1x from "../assets/icons/image_icon/wallet/coinbase_polygon/@1x.png";
import WalletCoinbasePolygonIcon2x from "../assets/icons/image_icon/wallet/coinbase_polygon/@2x.png";
import WalletCoinbasePolygonIcon3x from "../assets/icons/image_icon/wallet/coinbase_polygon/@3x.png";

const WalletCoinbasePolygonIcon = ({
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
      src={WalletCoinbasePolygonIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletCoinbasePolygonIcon2x} 2x, ${WalletCoinbasePolygonIcon3x} 3x`}
      alt={alt || "WalletCoinbasePolygonIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletCoinbasePolygonIcon;
