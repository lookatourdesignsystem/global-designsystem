import { css } from "@emotion/react";
import ChainFlowIcon1x from "../assets/icons/image_icon/chain/flow/@1x.png";
import ChainFlowIcon2x from "../assets/icons/image_icon/chain/flow/@2x.png";
import ChainFlowIcon3x from "../assets/icons/image_icon/chain/flow/@3x.png";

const ChainFlowIcon = ({
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
      src={ChainFlowIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${ChainFlowIcon2x} 2x, ${ChainFlowIcon3x} 3x`}
      alt={alt || "ChainFlowIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default ChainFlowIcon;
