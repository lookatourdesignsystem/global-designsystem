import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/flow_circle/filled.svg";

const FlowCircleFilledIcon = ({
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
      <SourceIcon title={title || "FlowCircleFilledIcon"} />
    </Icon>
  );
};

export default FlowCircleFilledIcon;
