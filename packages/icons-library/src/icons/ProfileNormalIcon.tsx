import { css } from "@emotion/react";
import ProfileNormalIcon1x from "../assets/icons/image_icon/profile/normal/@1x.png";
import ProfileNormalIcon2x from "../assets/icons/image_icon/profile/normal/@2x.png";
import ProfileNormalIcon3x from "../assets/icons/image_icon/profile/normal/@3x.png";

const ProfileNormalIcon = ({
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
      src={ProfileNormalIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${ProfileNormalIcon2x} 2x, ${ProfileNormalIcon3x} 3x`}
      alt={alt || "ProfileNormalIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default ProfileNormalIcon;
