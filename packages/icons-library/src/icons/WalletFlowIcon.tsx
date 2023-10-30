import { css } from "@emotion/react";
import WalletFlowIcon1x from "../assets/icons/image_icon/wallet/flow/@1x.png";
import WalletFlowIcon2x from "../assets/icons/image_icon/wallet/flow/@2x.png";
import WalletFlowIcon3x from "../assets/icons/image_icon/wallet/flow/@3x.png";

const WalletFlowIcon = ({
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
      src={WalletFlowIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${WalletFlowIcon2x} 2x, ${WalletFlowIcon3x} 3x`}
      alt={alt || "WalletFlowIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default WalletFlowIcon;
