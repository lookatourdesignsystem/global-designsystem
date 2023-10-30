import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/facebook_circle/outlined.svg";

const FacebookCircleOutlinedIcon = ({
  color,
  className,
  fontSize,
  title,
}: {
  color?: string;
  className?: string;
  fontSize?: number;
  title?: string;
}) => {
  return (
    <Icon color={color} className={className} fontSize={fontSize}>
      <SourceIcon title={title || "FacebookCircleOutlinedIcon"} />
    </Icon>
  );
};

export default FacebookCircleOutlinedIcon;
