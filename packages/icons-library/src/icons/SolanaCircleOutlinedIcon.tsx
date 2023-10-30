import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/solana_circle/outlined.svg";

const SolanaCircleOutlinedIcon = ({
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
      <SourceIcon title={title || "SolanaCircleOutlinedIcon"} />
    </Icon>
  );
};

export default SolanaCircleOutlinedIcon;
