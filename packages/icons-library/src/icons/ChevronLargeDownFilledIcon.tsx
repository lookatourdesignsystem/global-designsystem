import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/chevron_large/down/filled.svg";

const ChevronLargeDownFilledIcon = ({
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
      <SourceIcon title={title || "ChevronLargeDownFilledIcon"} />
    </Icon>
  );
};

export default ChevronLargeDownFilledIcon;
