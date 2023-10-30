import { css } from "@emotion/react";
import WalletConnectPolygonIcon1x from "../assets/icons/image_icon/wallet/connect_polygon/@1x.png";
import WalletConnectPolygonIcon2x from "../assets/icons/image_icon/wallet/connect_polygon/@2x.png";
import WalletConnectPolygonIcon3x from "../assets/icons/image_icon/wallet/connect_polygon/@3x.png";

const WalletConnectPolygonIcon = ({
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
      src={WalletConnectPolygonIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletConnectPolygonIcon2x} 2x, ${WalletConnectPolygonIcon3x} 3x`}
      alt={alt || "WalletConnectPolygonIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletConnectPolygonIcon;
