import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/receive_coin/filled.svg";

const ReceiveCoinFilledIcon = ({
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
      <SourceIcon title={title || "ReceiveCoinFilledIcon"} />
    </Icon>
  );
};

export default ReceiveCoinFilledIcon;
