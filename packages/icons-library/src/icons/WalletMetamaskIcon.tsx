import { css } from "@emotion/react";
import WalletMetamaskIcon1x from "../assets/icons/image_icon/wallet/metamask/@1x.png";
import WalletMetamaskIcon2x from "../assets/icons/image_icon/wallet/metamask/@2x.png";
import WalletMetamaskIcon3x from "../assets/icons/image_icon/wallet/metamask/@3x.png";

const WalletMetamaskIcon = ({
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
      src={WalletMetamaskIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletMetamaskIcon2x} 2x, ${WalletMetamaskIcon3x} 3x`}
      alt={alt || "WalletMetamaskIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletMetamaskIcon;
