import { css } from "@emotion/react";
import WalletCoinbaseIcon1x from "../assets/icons/image_icon/wallet/coinbase/@1x.png";
import WalletCoinbaseIcon2x from "../assets/icons/image_icon/wallet/coinbase/@2x.png";
import WalletCoinbaseIcon3x from "../assets/icons/image_icon/wallet/coinbase/@3x.png";

const WalletCoinbaseIcon = ({
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
      src={WalletCoinbaseIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletCoinbaseIcon2x} 2x, ${WalletCoinbaseIcon3x} 3x`}
      alt={alt || "WalletCoinbaseIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletCoinbaseIcon;
