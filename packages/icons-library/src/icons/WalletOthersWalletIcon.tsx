import { css } from "@emotion/react";
import WalletOthersWalletIcon1x from "../assets/icons/image_icon/wallet/others_wallet/@1x.png";
import WalletOthersWalletIcon2x from "../assets/icons/image_icon/wallet/others_wallet/@2x.png";
import WalletOthersWalletIcon3x from "../assets/icons/image_icon/wallet/others_wallet/@3x.png";

const WalletOthersWalletIcon = ({
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
      src={WalletOthersWalletIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletOthersWalletIcon2x} 2x, ${WalletOthersWalletIcon3x} 3x`}
      alt={alt || "WalletOthersWalletIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletOthersWalletIcon;
