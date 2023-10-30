import { css } from "@emotion/react";
import WalletTrustwalletSquareIcon1x from "../assets/icons/image_icon/wallet/trustwallet_square/@1x.png";
import WalletTrustwalletSquareIcon2x from "../assets/icons/image_icon/wallet/trustwallet_square/@2x.png";
import WalletTrustwalletSquareIcon3x from "../assets/icons/image_icon/wallet/trustwallet_square/@3x.png";

const WalletTrustwalletSquareIcon = ({
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
      src={WalletTrustwalletSquareIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletTrustwalletSquareIcon2x} 2x, ${WalletTrustwalletSquareIcon3x} 3x`}
      alt={alt || "WalletTrustwalletSquareIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletTrustwalletSquareIcon;
