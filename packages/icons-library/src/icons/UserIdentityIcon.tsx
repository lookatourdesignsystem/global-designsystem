import { css } from "@emotion/react";
import UserIdentityIcon1x from "../assets/icons/image_icon/user/identity/@1x.png";
import UserIdentityIcon2x from "../assets/icons/image_icon/user/identity/@2x.png";
import UserIdentityIcon3x from "../assets/icons/image_icon/user/identity/@3x.png";

const UserIdentityIcon = ({
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
      src={UserIdentityIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${UserIdentityIcon2x} 2x, ${UserIdentityIcon3x} 3x`}
      alt={alt || "UserIdentityIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default UserIdentityIcon;
