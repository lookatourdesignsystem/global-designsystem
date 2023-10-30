import { css } from "@emotion/react";
import ProfileSelectedIcon1x from "../assets/icons/image_icon/profile/selected/@1x.png";
import ProfileSelectedIcon2x from "../assets/icons/image_icon/profile/selected/@2x.png";
import ProfileSelectedIcon3x from "../assets/icons/image_icon/profile/selected/@3x.png";

const ProfileSelectedIcon = ({
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
      src={ProfileSelectedIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${ProfileSelectedIcon2x} 2x, ${ProfileSelectedIcon3x} 3x`}
      alt={alt || "ProfileSelectedIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default ProfileSelectedIcon;
