import { css } from "@emotion/react";
import ChainSolanaIcon1x from "../assets/icons/image_icon/chain/solana/@1x.png";
import ChainSolanaIcon2x from "../assets/icons/image_icon/chain/solana/@2x.png";
import ChainSolanaIcon3x from "../assets/icons/image_icon/chain/solana/@3x.png";

const ChainSolanaIcon = ({
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
      src={ChainSolanaIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${ChainSolanaIcon2x} 2x, ${ChainSolanaIcon3x} 3x`}
      alt={alt || "ChainSolanaIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default ChainSolanaIcon;
