import { css } from "@emotion/react";
import WalletExodusIcon1x from "../assets/icons/image_icon/wallet/exodus/@1x.png";
import WalletExodusIcon2x from "../assets/icons/image_icon/wallet/exodus/@2x.png";
import WalletExodusIcon3x from "../assets/icons/image_icon/wallet/exodus/@3x.png";

const WalletExodusIcon = ({
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
      src={WalletExodusIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletExodusIcon2x} 2x, ${WalletExodusIcon3x} 3x`}
      alt={alt || "WalletExodusIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletExodusIcon;
