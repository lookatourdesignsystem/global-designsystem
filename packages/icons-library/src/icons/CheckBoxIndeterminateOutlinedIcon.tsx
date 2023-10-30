import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/check_box_indeterminate/outlined.svg";

const CheckBoxIndeterminateOutlinedIcon = ({
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
      <SourceIcon title={title || "CheckBoxIndeterminateOutlinedIcon"} />
    </Icon>
  );
};

export default CheckBoxIndeterminateOutlinedIcon;
