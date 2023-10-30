import { css } from "@emotion/react";
import WalletNetworkWalletconnect36Icon1x from "../assets/icons/image_icon/wallet_network/walletconnect_36/@1x.png";
import WalletNetworkWalletconnect36Icon2x from "../assets/icons/image_icon/wallet_network/walletconnect_36/@2x.png";
import WalletNetworkWalletconnect36Icon3x from "../assets/icons/image_icon/wallet_network/walletconnect_36/@3x.png";

const WalletNetworkWalletconnect36Icon = ({
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
      src={WalletNetworkWalletconnect36Icon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletNetworkWalletconnect36Icon2x} 2x, ${WalletNetworkWalletconnect36Icon3x} 3x`}
      alt={alt || "WalletNetworkWalletconnect36Icon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletNetworkWalletconnect36Icon;
