import { css } from "@emotion/react";
import TokenGbpcIcon1x from "../assets/icons/image_icon/token/gbpc/@1x.png";
import TokenGbpcIcon2x from "../assets/icons/image_icon/token/gbpc/@2x.png";
import TokenGbpcIcon3x from "../assets/icons/image_icon/token/gbpc/@3x.png";

const TokenGbpcIcon = ({
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
      src={TokenGbpcIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenGbpcIcon2x} 2x, ${TokenGbpcIcon3x} 3x`}
      alt={alt || "TokenGbpcIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenGbpcIcon;
