import { css } from "@emotion/react";
import WalletIconWalletNftIcon1x from "../assets/icons/image_icon/wallet_icon/wallet_nft/@1x.png";
import WalletIconWalletNftIcon2x from "../assets/icons/image_icon/wallet_icon/wallet_nft/@2x.png";
import WalletIconWalletNftIcon3x from "../assets/icons/image_icon/wallet_icon/wallet_nft/@3x.png";

const WalletIconWalletNftIcon = ({
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
      src={WalletIconWalletNftIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletIconWalletNftIcon2x} 2x, ${WalletIconWalletNftIcon3x} 3x`}
      alt={alt || "WalletIconWalletNftIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletIconWalletNftIcon;
