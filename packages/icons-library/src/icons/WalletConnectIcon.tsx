import { css } from "@emotion/react";
import WalletConnectIcon1x from "../assets/icons/image_icon/wallet/connect/@1x.png";
import WalletConnectIcon2x from "../assets/icons/image_icon/wallet/connect/@2x.png";
import WalletConnectIcon3x from "../assets/icons/image_icon/wallet/connect/@3x.png";

const WalletConnectIcon = ({
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
      src={WalletConnectIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletConnectIcon2x} 2x, ${WalletConnectIcon3x} 3x`}
      alt={alt || "WalletConnectIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletConnectIcon;
