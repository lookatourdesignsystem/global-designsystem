import { css } from "@emotion/react";
import WalletZerionIcon1x from "../assets/icons/image_icon/wallet/zerion/@1x.png";
import WalletZerionIcon2x from "../assets/icons/image_icon/wallet/zerion/@2x.png";
import WalletZerionIcon3x from "../assets/icons/image_icon/wallet/zerion/@3x.png";

const WalletZerionIcon = ({
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
      src={WalletZerionIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletZerionIcon2x} 2x, ${WalletZerionIcon3x} 3x`}
      alt={alt || "WalletZerionIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletZerionIcon;
