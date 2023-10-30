import { css } from "@emotion/react";
import WalletNetworkCoinbase36Icon1x from "../assets/icons/image_icon/wallet_network/coinbase_36/@1x.png";
import WalletNetworkCoinbase36Icon2x from "../assets/icons/image_icon/wallet_network/coinbase_36/@2x.png";
import WalletNetworkCoinbase36Icon3x from "../assets/icons/image_icon/wallet_network/coinbase_36/@3x.png";

const WalletNetworkCoinbase36Icon = ({
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
      src={WalletNetworkCoinbase36Icon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletNetworkCoinbase36Icon2x} 2x, ${WalletNetworkCoinbase36Icon3x} 3x`}
      alt={alt || "WalletNetworkCoinbase36Icon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletNetworkCoinbase36Icon;
