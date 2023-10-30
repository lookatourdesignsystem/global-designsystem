import { css } from "@emotion/react";
import TokenApeDefaultIcon1x from "../assets/icons/image_icon/token/ape/default/@1x.png";
import TokenApeDefaultIcon2x from "../assets/icons/image_icon/token/ape/default/@2x.png";
import TokenApeDefaultIcon3x from "../assets/icons/image_icon/token/ape/default/@3x.png";

const TokenApeDefaultIcon = ({
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
      src={TokenApeDefaultIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenApeDefaultIcon2x} 2x, ${TokenApeDefaultIcon3x} 3x`}
      alt={alt || "TokenApeDefaultIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenApeDefaultIcon;
