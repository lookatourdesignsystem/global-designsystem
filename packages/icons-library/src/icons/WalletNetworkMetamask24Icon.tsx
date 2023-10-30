import { css } from "@emotion/react";
import WalletNetworkMetamask24Icon1x from "../assets/icons/image_icon/wallet_network/metamask_24/@1x.png";
import WalletNetworkMetamask24Icon2x from "../assets/icons/image_icon/wallet_network/metamask_24/@2x.png";
import WalletNetworkMetamask24Icon3x from "../assets/icons/image_icon/wallet_network/metamask_24/@3x.png";

const WalletNetworkMetamask24Icon = ({
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
      src={WalletNetworkMetamask24Icon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletNetworkMetamask24Icon2x} 2x, ${WalletNetworkMetamask24Icon3x} 3x`}
      alt={alt || "WalletNetworkMetamask24Icon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletNetworkMetamask24Icon;
