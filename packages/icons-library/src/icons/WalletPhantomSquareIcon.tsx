import { css } from "@emotion/react";
import WalletPhantomSquareIcon1x from "../assets/icons/image_icon/wallet/phantom_square/@1x.png";
import WalletPhantomSquareIcon2x from "../assets/icons/image_icon/wallet/phantom_square/@2x.png";
import WalletPhantomSquareIcon3x from "../assets/icons/image_icon/wallet/phantom_square/@3x.png";

const WalletPhantomSquareIcon = ({
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
      src={WalletPhantomSquareIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletPhantomSquareIcon2x} 2x, ${WalletPhantomSquareIcon3x} 3x`}
      alt={alt || "WalletPhantomSquareIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletPhantomSquareIcon;
