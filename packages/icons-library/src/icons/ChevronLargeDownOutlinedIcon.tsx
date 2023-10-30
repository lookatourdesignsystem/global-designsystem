import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/chevron_large/down/outlined.svg";

const ChevronLargeDownOutlinedIcon = ({
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
      <SourceIcon title={title || "ChevronLargeDownOutlinedIcon"} />
    </Icon>
  );
};

export default ChevronLargeDownOutlinedIcon;
