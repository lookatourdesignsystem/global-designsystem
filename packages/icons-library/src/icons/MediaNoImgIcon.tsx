import { css } from "@emotion/react";
import MediaNoImgIcon1x from "../assets/icons/image_icon/media/no_img/@1x.png";
import MediaNoImgIcon2x from "../assets/icons/image_icon/media/no_img/@2x.png";
import MediaNoImgIcon3x from "../assets/icons/image_icon/media/no_img/@3x.png";

const MediaNoImgIcon = ({
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
      src={MediaNoImgIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${MediaNoImgIcon2x} 2x, ${MediaNoImgIcon3x} 3x`}
      alt={alt || "MediaNoImgIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default MediaNoImgIcon;
