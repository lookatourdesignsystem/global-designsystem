import { css } from "@emotion/react";
import WalletBloctoIcon1x from "../assets/icons/image_icon/wallet/blocto/@1x.png";
import WalletBloctoIcon2x from "../assets/icons/image_icon/wallet/blocto/@2x.png";
import WalletBloctoIcon3x from "../assets/icons/image_icon/wallet/blocto/@3x.png";

const WalletBloctoIcon = ({
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
      src={WalletBloctoIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletBloctoIcon2x} 2x, ${WalletBloctoIcon3x} 3x`}
      alt={alt || "WalletBloctoIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletBloctoIcon;
