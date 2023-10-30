import { css } from "@emotion/react";
import WalletNetworkMetamask36Icon1x from "../assets/icons/image_icon/wallet_network/metamask_36/@1x.png";
import WalletNetworkMetamask36Icon2x from "../assets/icons/image_icon/wallet_network/metamask_36/@2x.png";
import WalletNetworkMetamask36Icon3x from "../assets/icons/image_icon/wallet_network/metamask_36/@3x.png";

const WalletNetworkMetamask36Icon = ({
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
      src={WalletNetworkMetamask36Icon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletNetworkMetamask36Icon2x} 2x, ${WalletNetworkMetamask36Icon3x} 3x`}
      alt={alt || "WalletNetworkMetamask36Icon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletNetworkMetamask36Icon;
