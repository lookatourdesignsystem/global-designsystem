import { css } from "@emotion/react";
import WalletZerionSquareIcon1x from "../assets/icons/image_icon/wallet/zerion_square/@1x.png";
import WalletZerionSquareIcon2x from "../assets/icons/image_icon/wallet/zerion_square/@2x.png";
import WalletZerionSquareIcon3x from "../assets/icons/image_icon/wallet/zerion_square/@3x.png";

const WalletZerionSquareIcon = ({
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
      src={WalletZerionSquareIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletZerionSquareIcon2x} 2x, ${WalletZerionSquareIcon3x} 3x`}
      alt={alt || "WalletZerionSquareIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletZerionSquareIcon;
