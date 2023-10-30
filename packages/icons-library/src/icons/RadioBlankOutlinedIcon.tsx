import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/radio_blank/outlined.svg";

const RadioBlankOutlinedIcon = ({
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
      <SourceIcon title={title || "RadioBlankOutlinedIcon"} />
    </Icon>
  );
};

export default RadioBlankOutlinedIcon;
