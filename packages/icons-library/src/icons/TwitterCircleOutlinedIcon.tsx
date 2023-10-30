import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/twitter_circle/outlined.svg";

const TwitterCircleOutlinedIcon = ({
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
      <SourceIcon title={title || "TwitterCircleOutlinedIcon"} />
    </Icon>
  );
};

export default TwitterCircleOutlinedIcon;
