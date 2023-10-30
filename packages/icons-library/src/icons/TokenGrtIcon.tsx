import { css } from "@emotion/react";
import TokenGrtIcon1x from "../assets/icons/image_icon/token/grt/@1x.png";
import TokenGrtIcon2x from "../assets/icons/image_icon/token/grt/@2x.png";
import TokenGrtIcon3x from "../assets/icons/image_icon/token/grt/@3x.png";

const TokenGrtIcon = ({
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
      src={TokenGrtIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenGrtIcon2x} 2x, ${TokenGrtIcon3x} 3x`}
      alt={alt || "TokenGrtIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenGrtIcon;
