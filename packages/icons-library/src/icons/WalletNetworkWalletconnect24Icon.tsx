import { css } from "@emotion/react";
import WalletNetworkWalletconnect24Icon1x from "../assets/icons/image_icon/wallet_network/walletconnect_24/@1x.png";
import WalletNetworkWalletconnect24Icon2x from "../assets/icons/image_icon/wallet_network/walletconnect_24/@2x.png";
import WalletNetworkWalletconnect24Icon3x from "../assets/icons/image_icon/wallet_network/walletconnect_24/@3x.png";

const WalletNetworkWalletconnect24Icon = ({
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
      src={WalletNetworkWalletconnect24Icon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletNetworkWalletconnect24Icon2x} 2x, ${WalletNetworkWalletconnect24Icon3x} 3x`}
      alt={alt || "WalletNetworkWalletconnect24Icon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletNetworkWalletconnect24Icon;
