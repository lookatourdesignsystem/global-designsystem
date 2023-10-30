import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/polygon_circle/outlined.svg";

const PolygonCircleOutlinedIcon = ({
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
      <SourceIcon title={title || "PolygonCircleOutlinedIcon"} />
    </Icon>
  );
};

export default PolygonCircleOutlinedIcon;
