import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/instagram_circle/filled.svg";

const InstagramCircleFilledIcon = ({
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
      <SourceIcon title={title || "InstagramCircleFilledIcon"} />
    </Icon>
  );
};

export default InstagramCircleFilledIcon;
