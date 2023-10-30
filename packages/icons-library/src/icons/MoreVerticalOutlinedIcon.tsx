import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/more_vertical/outlined.svg";

const MoreVerticalOutlinedIcon = ({
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
      <SourceIcon title={title || "MoreVerticalOutlinedIcon"} />
    </Icon>
  );
};

export default MoreVerticalOutlinedIcon;
