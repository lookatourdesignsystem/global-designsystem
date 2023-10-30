import { css } from "@emotion/react";
import WalletNetworkCoinbase24Icon1x from "../assets/icons/image_icon/wallet_network/coinbase_24/@1x.png";
import WalletNetworkCoinbase24Icon2x from "../assets/icons/image_icon/wallet_network/coinbase_24/@2x.png";
import WalletNetworkCoinbase24Icon3x from "../assets/icons/image_icon/wallet_network/coinbase_24/@3x.png";

const WalletNetworkCoinbase24Icon = ({
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
      src={WalletNetworkCoinbase24Icon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletNetworkCoinbase24Icon2x} 2x, ${WalletNetworkCoinbase24Icon3x} 3x`}
      alt={alt || "WalletNetworkCoinbase24Icon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletNetworkCoinbase24Icon;
