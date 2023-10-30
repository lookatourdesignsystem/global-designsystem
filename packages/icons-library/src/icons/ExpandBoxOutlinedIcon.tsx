import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/expand_box/outlined.svg";

const ExpandBoxOutlinedIcon = ({
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
      <SourceIcon title={title || "ExpandBoxOutlinedIcon"} />
    </Icon>
  );
};

export default ExpandBoxOutlinedIcon;
