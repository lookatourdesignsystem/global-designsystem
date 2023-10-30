import { css } from "@emotion/react";
import TokenSolanaIcon1x from "../assets/icons/image_icon/token/solana/@1x.png";
import TokenSolanaIcon2x from "../assets/icons/image_icon/token/solana/@2x.png";
import TokenSolanaIcon3x from "../assets/icons/image_icon/token/solana/@3x.png";

const TokenSolanaIcon = ({
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
      src={TokenSolanaIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenSolanaIcon2x} 2x, ${TokenSolanaIcon3x} 3x`}
      alt={alt || "TokenSolanaIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenSolanaIcon;
