import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/collapse_box/outlined.svg";

const CollapseBoxOutlinedIcon = ({
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
      <SourceIcon title={title || "CollapseBoxOutlinedIcon"} />
    </Icon>
  );
};

export default CollapseBoxOutlinedIcon;
