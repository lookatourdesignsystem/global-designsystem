import { Icon } from "../components/Icon";
import { ReactComponent as SourceIcon } from "../assets/icons/system_icon/wallet_check/outlined.svg";

const WalletCheckOutlinedIcon = ({
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
      <SourceIcon title={title || "WalletCheckOutlinedIcon"} />
    </Icon>
  );
};

export default WalletCheckOutlinedIcon;
