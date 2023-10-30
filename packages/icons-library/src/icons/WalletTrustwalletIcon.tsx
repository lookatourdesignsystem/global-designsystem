import { css } from "@emotion/react";
import WalletTrustwalletIcon1x from "../assets/icons/image_icon/wallet/trustwallet/@1x.png";
import WalletTrustwalletIcon2x from "../assets/icons/image_icon/wallet/trustwallet/@2x.png";
import WalletTrustwalletIcon3x from "../assets/icons/image_icon/wallet/trustwallet/@3x.png";

const WalletTrustwalletIcon = ({
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
      src={WalletTrustwalletIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletTrustwalletIcon2x} 2x, ${WalletTrustwalletIcon3x} 3x`}
      alt={alt || "WalletTrustwalletIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletTrustwalletIcon;
