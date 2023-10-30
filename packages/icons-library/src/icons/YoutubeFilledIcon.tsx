import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/youtube/filled.svg";

const YoutubeFilledIcon = ({
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
      <SourceIcon title={title || "YoutubeFilledIcon"} />
    </Icon>
  );
};

export default YoutubeFilledIcon;
