import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/lock/filled.svg";

const LockFilledIcon = ({
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
      <SourceIcon title={title || "LockFilledIcon"} />
    </Icon>
  );
};

export default LockFilledIcon;
