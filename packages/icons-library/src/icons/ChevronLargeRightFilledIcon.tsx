import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/chevron_large/right/filled.svg";

const ChevronLargeRightFilledIcon = ({
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
      <SourceIcon title={title || "ChevronLargeRightFilledIcon"} />
    </Icon>
  );
};

export default ChevronLargeRightFilledIcon;
