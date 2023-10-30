import { css } from "@emotion/react";
import StatusConnectedIcon1x from "../assets/icons/image_icon/status/connected/@1x.png";
import StatusConnectedIcon2x from "../assets/icons/image_icon/status/connected/@2x.png";
import StatusConnectedIcon3x from "../assets/icons/image_icon/status/connected/@3x.png";

const StatusConnectedIcon = ({
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
      src={StatusConnectedIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${StatusConnectedIcon2x} 2x, ${StatusConnectedIcon3x} 3x`}
      alt={alt || "StatusConnectedIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default StatusConnectedIcon;
