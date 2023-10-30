import { css } from "@emotion/react";
import WalletMetamaskPolygonIcon1x from "../assets/icons/image_icon/wallet/metamask_polygon/@1x.png";
import WalletMetamaskPolygonIcon2x from "../assets/icons/image_icon/wallet/metamask_polygon/@2x.png";
import WalletMetamaskPolygonIcon3x from "../assets/icons/image_icon/wallet/metamask_polygon/@3x.png";

const WalletMetamaskPolygonIcon = ({
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
      src={WalletMetamaskPolygonIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletMetamaskPolygonIcon2x} 2x, ${WalletMetamaskPolygonIcon3x} 3x`}
      alt={alt || "WalletMetamaskPolygonIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletMetamaskPolygonIcon;
