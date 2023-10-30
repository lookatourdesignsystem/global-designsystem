import { css } from "@emotion/react";
import WalletUniswapIcon1x from "../assets/icons/image_icon/wallet/uniswap/@1x.png";
import WalletUniswapIcon2x from "../assets/icons/image_icon/wallet/uniswap/@2x.png";
import WalletUniswapIcon3x from "../assets/icons/image_icon/wallet/uniswap/@3x.png";

const WalletUniswapIcon = ({
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
      src={WalletUniswapIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletUniswapIcon2x} 2x, ${WalletUniswapIcon3x} 3x`}
      alt={alt || "WalletUniswapIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletUniswapIcon;
