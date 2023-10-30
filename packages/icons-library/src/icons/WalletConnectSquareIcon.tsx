import { css } from "@emotion/react";
import WalletConnectSquareIcon1x from "../assets/icons/image_icon/wallet/connect_square/@1x.png";
import WalletConnectSquareIcon2x from "../assets/icons/image_icon/wallet/connect_square/@2x.png";
import WalletConnectSquareIcon3x from "../assets/icons/image_icon/wallet/connect_square/@3x.png";

const WalletConnectSquareIcon = ({
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
      src={WalletConnectSquareIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletConnectSquareIcon2x} 2x, ${WalletConnectSquareIcon3x} 3x`}
      alt={alt || "WalletConnectSquareIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletConnectSquareIcon;
