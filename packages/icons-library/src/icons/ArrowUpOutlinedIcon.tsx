import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/arrow/up/outlined.svg";

const ArrowUpOutlinedIcon = ({
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
      <SourceIcon title={title || "ArrowUpOutlinedIcon"} />
    </Icon>
  );
};

export default ArrowUpOutlinedIcon;
