import { css } from "@emotion/react";
import WalletPhantomIcon1x from "../assets/icons/image_icon/wallet/phantom/@1x.png";
import WalletPhantomIcon2x from "../assets/icons/image_icon/wallet/phantom/@2x.png";
import WalletPhantomIcon3x from "../assets/icons/image_icon/wallet/phantom/@3x.png";

const WalletPhantomIcon = ({
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
      src={WalletPhantomIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletPhantomIcon2x} 2x, ${WalletPhantomIcon3x} 3x`}
      alt={alt || "WalletPhantomIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletPhantomIcon;
