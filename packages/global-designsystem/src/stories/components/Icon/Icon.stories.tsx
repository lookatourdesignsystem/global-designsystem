import { ComponentStory, Meta } from "@storybook/react";
import { Icon } from ".";
import { useTheme } from "../../../hooks/useTheme";
import { Typography } from "../../foundation/Typography";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { ReactComponent as SourceIcon } from "../../../assets/images/search.svg";
import { iconDesc } from "src/stories/docs/icon";
import {
  AddFilledIcon,
  AddOutlinedIcon,
  AndroidFilledIcon,
  AndroidOutlinedIcon,
  AppleFilledIcon,
  AppleOutlinedIcon,
  ArrowDownFilledIcon,
  ArrowDownOutlinedIcon,
  ArrowLeftFilledIcon,
  ArrowLeftOutlinedIcon,
  ArrowRightFilledIcon,
  ArrowRightOutlinedIcon,
  ArrowUpFilledIcon,
  ArrowUpOutlinedIcon,
  BrandAndroidIcon,
  BrandAppleIcon,
  BrandGoogleIcon,
  BscCircleFilledIcon,
  BscCircleOutlinedIcon,
  CameraFilledIcon,
  CameraOutlinedIcon,
  CardFilledIcon,
  CardOutlinedIcon,
  ChainBscIcon,
  ChainEthIcon,
  ChainFlowIcon,
  ChainPolygonIcon,
  ChainSolanaIcon,
  ChainTronIcon,
  CheckBoxBlankFilledIcon,
  CheckBoxBlankOutlinedIcon,
  CheckBoxFilledIcon,
  CheckBoxIndeterminateFilledIcon,
  CheckBoxIndeterminateOutlinedIcon,
  CheckBoxOutlinedIcon,
  CheckCircleFilledIcon,
  CheckCircleOutlinedIcon,
  CheckFilledIcon,
  CheckOutlinedIcon,
  ChevronDownFilledIcon,
  ChevronDownOutlinedIcon,
  ChevronLargeDownFilledIcon,
  ChevronLargeDownOutlinedIcon,
  ChevronLargeLeftFilledIcon,
  ChevronLargeLeftOutlinedIcon,
  ChevronLargeRightFilledIcon,
  ChevronLargeRightOutlinedIcon,
  ChevronLargeUpFilledIcon,
  ChevronLargeUpOutlinedIcon,
  ChevronLeftFilledIcon,
  ChevronLeftOutlinedIcon,
  ChevronRightFilledIcon,
  ChevronRightOutlinedIcon,
  ChevronUpFilledIcon,
  ChevronUpOutlinedIcon,
  CloseFilledIcon,
  CloseOutlinedIcon,
  CollapseBoxFilledIcon,
  CollapseBoxOutlinedIcon,
  CollapseFilledIcon,
  CollapseOutlinedIcon,
  ComponentFilledIcon,
  ComponentOutlinedIcon,
  CopyFilledIcon,
  CopyLinkFilledIcon,
  CopyLinkOutlinedIcon,
  CopyOutlinedIcon,
  DarkFilledIcon,
  DarkOutlinedIcon,
  DiscordFilledIcon,
  DiscordOutlinedIcon,
  DiscoverFilledIcon,
  DiscoverOutlinedIcon,
  DocumentFilledIcon,
  DocumentOutlinedIcon,
  DotFilledIcon,
  DotOutlinedIcon,
  DownBoxFilledIcon,
  DownBoxOutlinedIcon,
  DownFilledIcon,
  DownOutlinedIcon,
  EarthFilledIcon,
  EarthOutlinedIcon,
  ErrorFilledIcon,
  ErrorOutlinedIcon,
  ExpandBoxFilledIcon,
  ExpandBoxOutlinedIcon,
  ExpandFilledIcon,
  ExpandOutlinedIcon,
  ExtensionFilledIcon,
  ExtensionOutlinedIcon,
  FacebookCircleFilledIcon,
  FacebookCircleOutlinedIcon,
  FacebookFilledIcon,
  FacebookOutlinedIcon,
  FailedFilledIcon,
  FailedOutlinedIcon,
  FileFilledIcon,
  FileOutlinedIcon,
  FilterFilledIcon,
  FilterOutlinedIcon,
  FlagUsaIcon,
  FlowCircleFilledIcon,
  FlowCircleOutlinedIcon,
  FundBankIcon,
  FundCardIcon,
  FundCoinbaseIcon,
  FundDexIcon,
  FundMastercardIcon,
  FundMastercardTextfieldIcon,
  FundVisaIcon,
  FundVisaTextfieldIcon,
  FunddetailsBoxBuyIcon,
  FunddetailsFundsAddIcon,
  FunddetailsFundsWithdrawIcon,
  FunddetailsNftBuyIcon,
  FunddetailsNftSellIcon,
  HomeFilledIcon,
  HomeOutlinedIcon,
  ImageFilledIcon,
  ImageOutlinedIcon,
  InformationFilledIcon,
  InformationOutlinedIcon,
  InstagramCircleFilledIcon,
  InstagramCircleOutlinedIcon,
  InstagramFilledIcon,
  InstagramOutlinedIcon,
  LightFilledIcon,
  LightOutlinedIcon,
  LikeBoxFilledIcon,
  LikeBoxOutlinedIcon,
  LikeFilledIcon,
  LikeOutlinedIcon,
  ListFilledIcon,
  ListOutlinedIcon,
  LockFilledIcon,
  LockOutlinedIcon,
  MastercardFilledIcon,
  MastercardOutlinedIcon,
  MediaNoImgIcon,
  MediumFilledIcon,
  MediumOutlinedIcon,
  MenuFilledIcon,
  MenuOutlinedIcon,
  MoreHorizontalFilledIcon,
  MoreHorizontalOutlinedIcon,
  MoreVerticalFilledIcon,
  MoreVerticalOutlinedIcon,
  NewtabFilledIcon,
  NewtabOutlinedIcon,
  PaletteFilledIcon,
  PaletteOutlinedIcon,
  PeopleFilledIcon,
  PeopleOutlinedIcon,
  PolygonCircleFilledIcon,
  PolygonCircleOutlinedIcon,
  ProfileNormalIcon,
  ProfileSelectedIcon,
  QrFilledIcon,
  QrOutlinedIcon,
  QuestionFilledIcon,
  QuestionOutlinedIcon,
  RadioBlankFilledIcon,
  RadioBlankOutlinedIcon,
  RadioFilledIcon,
  RadioOutlinedIcon,
  ReceiveCoinFilledIcon,
  ReceiveCoinOutlinedIcon,
  RefreshFilledIcon,
  RefreshOutlinedIcon,
  RemoveFilledIcon,
  RemoveOutlinedIcon,
  Rotation360FilledIcon,
  Rotation360OutlinedIcon,
  ScanFilledIcon,
  ScanOutlinedIcon,
  SearchFilledIcon,
  SearchOutlinedIcon,
  SendCoinFilledIcon,
  SendCoinOutlinedIcon,
  SendFilledIcon,
  SendOutlinedIcon,
  SettingsFilledIcon,
  SettingsOutlinedIcon,
  ShareBoxFilledIcon,
  ShareBoxOutlinedIcon,
  SharedFilledIcon,
  SharedOutlinedIcon,
  SolanaCircleFilledIcon,
  SolanaCircleOutlinedIcon,
  SoundOffFilledIcon,
  SoundOffOutlinedIcon,
  SoundOnFilledIcon,
  SoundOnOutlinedIcon,
  StatusConnectedIcon,
  TelegramFilledIcon,
  TelegramOutlinedIcon,
  TimeFilledIcon,
  TimeOutlinedIcon,
  TokenAddIcon,
  TokenApeDefaultIcon,
  TokenApeEthIcon,
  TokenApePolygonIcon,
  TokenBscIcon,
  TokenDashIcon,
  TokenEthDefaultIcon,
  TokenEthPolygonIcon,
  TokenFlowIcon,
  TokenGbpcIcon,
  TokenGemsIcon,
  TokenGrtIcon,
  TokenHuobiIcon,
  TokenMbpcIcon,
  TokenMetaIcon,
  TokenPolygonIcon,
  TokenRtIcon,
  TokenSolanaIcon,
  TokenTronIcon,
  TokenUsdcIcon,
  TwitterCircleFilledIcon,
  TwitterCircleOutlinedIcon,
  TwitterFilledIcon,
  TwitterOutlinedIcon,
  UserIdentityIcon,
  VideoPauseFilledIcon,
  VideoPauseOutlinedIcon,
  VideoPlayFilledIcon,
  VideoPlayOutlinedIcon,
  VisaFilledIcon,
  VisaOutlinedIcon,
  VisibilityFilledIcon,
  VisibilityOutlinedIcon,
  WalletBloctoIcon,
  WalletCheckFilledIcon,
  WalletCheckOutlinedIcon,
  WalletCoinbaseIcon,
  WalletCoinbasePolygonIcon,
  WalletConnectIcon,
  WalletConnectPolygonIcon,
  WalletConnectSquareIcon,
  WalletExodusIcon,
  WalletFilledIcon,
  WalletFlowIcon,
  WalletIconWalletNftIcon,
  WalletMetamaskIcon,
  WalletMetamaskPolygonIcon,
  WalletNetworkCoinbase24Icon,
  WalletNetworkCoinbase36Icon,
  WalletNetworkMetamask24Icon,
  WalletNetworkMetamask36Icon,
  WalletNetworkWalletconnect24Icon,
  WalletNetworkWalletconnect36Icon,
  WalletOthersWalletIcon,
  WalletOutlinedIcon,
  WalletPhantomIcon,
  WalletPhantomSquareIcon,
  WalletPolygonIcon,
  WalletTrustwalletIcon,
  WalletTrustwalletSquareIcon,
  WalletUniswapIcon,
  WalletZerionIcon,
  WalletZerionSquareIcon,
  WarningFilledIcon,
  WarningOutlinedIcon,
  WindowFilledIcon,
  WindowOutlinedIcon,
  YoutubeCircleFilledIcon,
  YoutubeCircleOutlinedIcon,
  YoutubeFilledIcon,
  YoutubeOutlinedIcon,
  ZoomInFilledIcon,
  ZoomInOutlinedIcon,
  ZoomOutFilledIcon,
  ZoomOutOutlinedIcon,
} from "@lookatourdesignsystem/icons-library";

const meta: Meta = {
  title: "Foundation/Icon",
  component: Icon,
  args: {
    fontSize: 24,
    color: "currentColor",
    children: <SourceIcon />,
  },
  ...iconDesc,
};

export default meta;

export const Default: ComponentStory<typeof Icon> = (args) => {
  return (
    <Icon {...args}>
      <SourceIcon />
    </Icon>
  );
};
Default.parameters = {
  controls: { exclude: ["theme"] },
};

export const IconLibrary: ComponentStory<typeof Icon> = () => {
  const theme = useTheme();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            AddFilledIcon
          </Typography>
          <AddFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            AddOutlinedIcon
          </Typography>
          <AddOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            AndroidFilledIcon
          </Typography>
          <AndroidFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            AndroidOutlinedIcon
          </Typography>
          <AndroidOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            AppleFilledIcon
          </Typography>
          <AppleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            AppleOutlinedIcon
          </Typography>
          <AppleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ArrowDownFilledIcon
          </Typography>
          <ArrowDownFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ArrowDownOutlinedIcon
          </Typography>
          <ArrowDownOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ArrowLeftFilledIcon
          </Typography>
          <ArrowLeftFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ArrowLeftOutlinedIcon
          </Typography>
          <ArrowLeftOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ArrowRightFilledIcon
          </Typography>
          <ArrowRightFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ArrowRightOutlinedIcon
          </Typography>
          <ArrowRightOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ArrowUpFilledIcon
          </Typography>
          <ArrowUpFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ArrowUpOutlinedIcon
          </Typography>
          <ArrowUpOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            BrandAndroidIcon
          </Typography>
          <BrandAndroidIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            BrandAppleIcon
          </Typography>
          <BrandAppleIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            BrandGoogleIcon
          </Typography>
          <BrandGoogleIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            BscCircleFilledIcon
          </Typography>
          <BscCircleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            BscCircleOutlinedIcon
          </Typography>
          <BscCircleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CameraFilledIcon
          </Typography>
          <CameraFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CameraOutlinedIcon
          </Typography>
          <CameraOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CardFilledIcon
          </Typography>
          <CardFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CardOutlinedIcon
          </Typography>
          <CardOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChainBscIcon
          </Typography>
          <ChainBscIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChainEthIcon
          </Typography>
          <ChainEthIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChainFlowIcon
          </Typography>
          <ChainFlowIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChainPolygonIcon
          </Typography>
          <ChainPolygonIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChainSolanaIcon
          </Typography>
          <ChainSolanaIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChainTronIcon
          </Typography>
          <ChainTronIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CheckBoxBlankFilledIcon
          </Typography>
          <CheckBoxBlankFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CheckBoxBlankOutlinedIcon
          </Typography>
          <CheckBoxBlankOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CheckBoxFilledIcon
          </Typography>
          <CheckBoxFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CheckBoxIndeterminateFilledIcon
          </Typography>
          <CheckBoxIndeterminateFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CheckBoxIndeterminateOutlinedIcon
          </Typography>
          <CheckBoxIndeterminateOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CheckBoxOutlinedIcon
          </Typography>
          <CheckBoxOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CheckCircleFilledIcon
          </Typography>
          <CheckCircleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CheckCircleOutlinedIcon
          </Typography>
          <CheckCircleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CheckFilledIcon
          </Typography>
          <CheckFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CheckOutlinedIcon
          </Typography>
          <CheckOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronDownFilledIcon
          </Typography>
          <ChevronDownFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronDownOutlinedIcon
          </Typography>
          <ChevronDownOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronLargeDownFilledIcon
          </Typography>
          <ChevronLargeDownFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronLargeDownOutlinedIcon
          </Typography>
          <ChevronLargeDownOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronLargeLeftFilledIcon
          </Typography>
          <ChevronLargeLeftFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronLargeLeftOutlinedIcon
          </Typography>
          <ChevronLargeLeftOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronLargeRightFilledIcon
          </Typography>
          <ChevronLargeRightFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronLargeRightOutlinedIcon
          </Typography>
          <ChevronLargeRightOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronLargeUpFilledIcon
          </Typography>
          <ChevronLargeUpFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronLargeUpOutlinedIcon
          </Typography>
          <ChevronLargeUpOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronLeftFilledIcon
          </Typography>
          <ChevronLeftFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronLeftOutlinedIcon
          </Typography>
          <ChevronLeftOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronRightFilledIcon
          </Typography>
          <ChevronRightFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronRightOutlinedIcon
          </Typography>
          <ChevronRightOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronUpFilledIcon
          </Typography>
          <ChevronUpFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ChevronUpOutlinedIcon
          </Typography>
          <ChevronUpOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CloseFilledIcon
          </Typography>
          <CloseFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CloseOutlinedIcon
          </Typography>
          <CloseOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CollapseBoxFilledIcon
          </Typography>
          <CollapseBoxFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CollapseBoxOutlinedIcon
          </Typography>
          <CollapseBoxOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CollapseFilledIcon
          </Typography>
          <CollapseFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CollapseOutlinedIcon
          </Typography>
          <CollapseOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ComponentFilledIcon
          </Typography>
          <ComponentFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ComponentOutlinedIcon
          </Typography>
          <ComponentOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CopyFilledIcon
          </Typography>
          <CopyFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CopyLinkFilledIcon
          </Typography>
          <CopyLinkFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CopyLinkOutlinedIcon
          </Typography>
          <CopyLinkOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            CopyOutlinedIcon
          </Typography>
          <CopyOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DarkFilledIcon
          </Typography>
          <DarkFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DarkOutlinedIcon
          </Typography>
          <DarkOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DiscordFilledIcon
          </Typography>
          <DiscordFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DiscordOutlinedIcon
          </Typography>
          <DiscordOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DiscoverFilledIcon
          </Typography>
          <DiscoverFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DiscoverOutlinedIcon
          </Typography>
          <DiscoverOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DocumentFilledIcon
          </Typography>
          <DocumentFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DocumentOutlinedIcon
          </Typography>
          <DocumentOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DotFilledIcon
          </Typography>
          <DotFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DotOutlinedIcon
          </Typography>
          <DotOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DownBoxFilledIcon
          </Typography>
          <DownBoxFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DownBoxOutlinedIcon
          </Typography>
          <DownBoxOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DownFilledIcon
          </Typography>
          <DownFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            DownOutlinedIcon
          </Typography>
          <DownOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            EarthFilledIcon
          </Typography>
          <EarthFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            EarthOutlinedIcon
          </Typography>
          <EarthOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ErrorFilledIcon
          </Typography>
          <ErrorFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ErrorOutlinedIcon
          </Typography>
          <ErrorOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ExpandBoxFilledIcon
          </Typography>
          <ExpandBoxFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ExpandBoxOutlinedIcon
          </Typography>
          <ExpandBoxOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ExpandFilledIcon
          </Typography>
          <ExpandFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ExpandOutlinedIcon
          </Typography>
          <ExpandOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ExtensionFilledIcon
          </Typography>
          <ExtensionFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ExtensionOutlinedIcon
          </Typography>
          <ExtensionOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FacebookCircleFilledIcon
          </Typography>
          <FacebookCircleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FacebookCircleOutlinedIcon
          </Typography>
          <FacebookCircleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FacebookFilledIcon
          </Typography>
          <FacebookFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FacebookOutlinedIcon
          </Typography>
          <FacebookOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FailedFilledIcon
          </Typography>
          <FailedFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FailedOutlinedIcon
          </Typography>
          <FailedOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FileFilledIcon
          </Typography>
          <FileFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FileOutlinedIcon
          </Typography>
          <FileOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FilterFilledIcon
          </Typography>
          <FilterFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FilterOutlinedIcon
          </Typography>
          <FilterOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FlagUsaIcon
          </Typography>
          <FlagUsaIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FlowCircleFilledIcon
          </Typography>
          <FlowCircleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FlowCircleOutlinedIcon
          </Typography>
          <FlowCircleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FundBankIcon
          </Typography>
          <FundBankIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FundCardIcon
          </Typography>
          <FundCardIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FundCoinbaseIcon
          </Typography>
          <FundCoinbaseIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FundDexIcon
          </Typography>
          <FundDexIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FundMastercardIcon
          </Typography>
          <FundMastercardIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FundMastercardTextfieldIcon
          </Typography>
          <FundMastercardTextfieldIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FundVisaIcon
          </Typography>
          <FundVisaIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FundVisaTextfieldIcon
          </Typography>
          <FundVisaTextfieldIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FunddetailsBoxBuyIcon
          </Typography>
          <FunddetailsBoxBuyIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FunddetailsFundsAddIcon
          </Typography>
          <FunddetailsFundsAddIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FunddetailsFundsWithdrawIcon
          </Typography>
          <FunddetailsFundsWithdrawIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FunddetailsNftBuyIcon
          </Typography>
          <FunddetailsNftBuyIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            FunddetailsNftSellIcon
          </Typography>
          <FunddetailsNftSellIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            HomeFilledIcon
          </Typography>
          <HomeFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            HomeOutlinedIcon
          </Typography>
          <HomeOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ImageFilledIcon
          </Typography>
          <ImageFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ImageOutlinedIcon
          </Typography>
          <ImageOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            InformationFilledIcon
          </Typography>
          <InformationFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            InformationOutlinedIcon
          </Typography>
          <InformationOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            InstagramCircleFilledIcon
          </Typography>
          <InstagramCircleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            InstagramCircleOutlinedIcon
          </Typography>
          <InstagramCircleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            InstagramFilledIcon
          </Typography>
          <InstagramFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            InstagramOutlinedIcon
          </Typography>
          <InstagramOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            LightFilledIcon
          </Typography>
          <LightFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            LightOutlinedIcon
          </Typography>
          <LightOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            LikeBoxFilledIcon
          </Typography>
          <LikeBoxFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            LikeBoxOutlinedIcon
          </Typography>
          <LikeBoxOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            LikeFilledIcon
          </Typography>
          <LikeFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            LikeOutlinedIcon
          </Typography>
          <LikeOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ListFilledIcon
          </Typography>
          <ListFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ListOutlinedIcon
          </Typography>
          <ListOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            LockFilledIcon
          </Typography>
          <LockFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            LockOutlinedIcon
          </Typography>
          <LockOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MastercardFilledIcon
          </Typography>
          <MastercardFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MastercardOutlinedIcon
          </Typography>
          <MastercardOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MediaNoImgIcon
          </Typography>
          <MediaNoImgIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MediumFilledIcon
          </Typography>
          <MediumFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MediumOutlinedIcon
          </Typography>
          <MediumOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MenuFilledIcon
          </Typography>
          <MenuFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MenuOutlinedIcon
          </Typography>
          <MenuOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MoreHorizontalFilledIcon
          </Typography>
          <MoreHorizontalFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MoreHorizontalOutlinedIcon
          </Typography>
          <MoreHorizontalOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MoreVerticalFilledIcon
          </Typography>
          <MoreVerticalFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            MoreVerticalOutlinedIcon
          </Typography>
          <MoreVerticalOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            NewtabFilledIcon
          </Typography>
          <NewtabFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            NewtabOutlinedIcon
          </Typography>
          <NewtabOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            PaletteFilledIcon
          </Typography>
          <PaletteFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            PaletteOutlinedIcon
          </Typography>
          <PaletteOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            PeopleFilledIcon
          </Typography>
          <PeopleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            PeopleOutlinedIcon
          </Typography>
          <PeopleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            PolygonCircleFilledIcon
          </Typography>
          <PolygonCircleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            PolygonCircleOutlinedIcon
          </Typography>
          <PolygonCircleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ProfileNormalIcon
          </Typography>
          <ProfileNormalIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ProfileSelectedIcon
          </Typography>
          <ProfileSelectedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            QrFilledIcon
          </Typography>
          <QrFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            QrOutlinedIcon
          </Typography>
          <QrOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            QuestionFilledIcon
          </Typography>
          <QuestionFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            QuestionOutlinedIcon
          </Typography>
          <QuestionOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            RadioBlankFilledIcon
          </Typography>
          <RadioBlankFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            RadioBlankOutlinedIcon
          </Typography>
          <RadioBlankOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            RadioFilledIcon
          </Typography>
          <RadioFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            RadioOutlinedIcon
          </Typography>
          <RadioOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ReceiveCoinFilledIcon
          </Typography>
          <ReceiveCoinFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ReceiveCoinOutlinedIcon
          </Typography>
          <ReceiveCoinOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            RefreshFilledIcon
          </Typography>
          <RefreshFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            RefreshOutlinedIcon
          </Typography>
          <RefreshOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            RemoveFilledIcon
          </Typography>
          <RemoveFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            RemoveOutlinedIcon
          </Typography>
          <RemoveOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            Rotation360FilledIcon
          </Typography>
          <Rotation360FilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            Rotation360OutlinedIcon
          </Typography>
          <Rotation360OutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ScanFilledIcon
          </Typography>
          <ScanFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ScanOutlinedIcon
          </Typography>
          <ScanOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SearchFilledIcon
          </Typography>
          <SearchFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SearchOutlinedIcon
          </Typography>
          <SearchOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SendCoinFilledIcon
          </Typography>
          <SendCoinFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SendCoinOutlinedIcon
          </Typography>
          <SendCoinOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SendFilledIcon
          </Typography>
          <SendFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SendOutlinedIcon
          </Typography>
          <SendOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SettingsFilledIcon
          </Typography>
          <SettingsFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SettingsOutlinedIcon
          </Typography>
          <SettingsOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ShareBoxFilledIcon
          </Typography>
          <ShareBoxFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ShareBoxOutlinedIcon
          </Typography>
          <ShareBoxOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SharedFilledIcon
          </Typography>
          <SharedFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SharedOutlinedIcon
          </Typography>
          <SharedOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SolanaCircleFilledIcon
          </Typography>
          <SolanaCircleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SolanaCircleOutlinedIcon
          </Typography>
          <SolanaCircleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SoundOffFilledIcon
          </Typography>
          <SoundOffFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SoundOffOutlinedIcon
          </Typography>
          <SoundOffOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SoundOnFilledIcon
          </Typography>
          <SoundOnFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            SoundOnOutlinedIcon
          </Typography>
          <SoundOnOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            StatusConnectedIcon
          </Typography>
          <StatusConnectedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TelegramFilledIcon
          </Typography>
          <TelegramFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TelegramOutlinedIcon
          </Typography>
          <TelegramOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TimeFilledIcon
          </Typography>
          <TimeFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TimeOutlinedIcon
          </Typography>
          <TimeOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenAddIcon
          </Typography>
          <TokenAddIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenApeDefaultIcon
          </Typography>
          <TokenApeDefaultIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenApeEthIcon
          </Typography>
          <TokenApeEthIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenApePolygonIcon
          </Typography>
          <TokenApePolygonIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenBscIcon
          </Typography>
          <TokenBscIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenDashIcon
          </Typography>
          <TokenDashIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenEthDefaultIcon
          </Typography>
          <TokenEthDefaultIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenEthPolygonIcon
          </Typography>
          <TokenEthPolygonIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenFlowIcon
          </Typography>
          <TokenFlowIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenGbpcIcon
          </Typography>
          <TokenGbpcIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenGemsIcon
          </Typography>
          <TokenGemsIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenGrtIcon
          </Typography>
          <TokenGrtIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenHuobiIcon
          </Typography>
          <TokenHuobiIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenMbpcIcon
          </Typography>
          <TokenMbpcIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenMetaIcon
          </Typography>
          <TokenMetaIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenPolygonIcon
          </Typography>
          <TokenPolygonIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenRtIcon
          </Typography>
          <TokenRtIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenSolanaIcon
          </Typography>
          <TokenSolanaIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenTronIcon
          </Typography>
          <TokenTronIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TokenUsdcIcon
          </Typography>
          <TokenUsdcIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TwitterCircleFilledIcon
          </Typography>
          <TwitterCircleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TwitterCircleOutlinedIcon
          </Typography>
          <TwitterCircleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TwitterFilledIcon
          </Typography>
          <TwitterFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            TwitterOutlinedIcon
          </Typography>
          <TwitterOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            UserIdentityIcon
          </Typography>
          <UserIdentityIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            VideoPauseFilledIcon
          </Typography>
          <VideoPauseFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            VideoPauseOutlinedIcon
          </Typography>
          <VideoPauseOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            VideoPlayFilledIcon
          </Typography>
          <VideoPlayFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            VideoPlayOutlinedIcon
          </Typography>
          <VideoPlayOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            VisaFilledIcon
          </Typography>
          <VisaFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            VisaOutlinedIcon
          </Typography>
          <VisaOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            VisibilityFilledIcon
          </Typography>
          <VisibilityFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            VisibilityOutlinedIcon
          </Typography>
          <VisibilityOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletBloctoIcon
          </Typography>
          <WalletBloctoIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletCheckFilledIcon
          </Typography>
          <WalletCheckFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletCheckOutlinedIcon
          </Typography>
          <WalletCheckOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletCoinbaseIcon
          </Typography>
          <WalletCoinbaseIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletCoinbasePolygonIcon
          </Typography>
          <WalletCoinbasePolygonIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletConnectIcon
          </Typography>
          <WalletConnectIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletConnectPolygonIcon
          </Typography>
          <WalletConnectPolygonIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletConnectSquareIcon
          </Typography>
          <WalletConnectSquareIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletExodusIcon
          </Typography>
          <WalletExodusIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletFilledIcon
          </Typography>
          <WalletFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletFlowIcon
          </Typography>
          <WalletFlowIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletIconWalletNftIcon
          </Typography>
          <WalletIconWalletNftIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletMetamaskIcon
          </Typography>
          <WalletMetamaskIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletMetamaskPolygonIcon
          </Typography>
          <WalletMetamaskPolygonIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletNetworkCoinbase24Icon
          </Typography>
          <WalletNetworkCoinbase24Icon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletNetworkCoinbase36Icon
          </Typography>
          <WalletNetworkCoinbase36Icon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletNetworkMetamask24Icon
          </Typography>
          <WalletNetworkMetamask24Icon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletNetworkMetamask36Icon
          </Typography>
          <WalletNetworkMetamask36Icon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletNetworkWalletconnect24Icon
          </Typography>
          <WalletNetworkWalletconnect24Icon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletNetworkWalletconnect36Icon
          </Typography>
          <WalletNetworkWalletconnect36Icon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletOthersWalletIcon
          </Typography>
          <WalletOthersWalletIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletOutlinedIcon
          </Typography>
          <WalletOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletPhantomIcon
          </Typography>
          <WalletPhantomIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletPhantomSquareIcon
          </Typography>
          <WalletPhantomSquareIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletPolygonIcon
          </Typography>
          <WalletPolygonIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletTrustwalletIcon
          </Typography>
          <WalletTrustwalletIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletTrustwalletSquareIcon
          </Typography>
          <WalletTrustwalletSquareIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletUniswapIcon
          </Typography>
          <WalletUniswapIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletZerionIcon
          </Typography>
          <WalletZerionIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WalletZerionSquareIcon
          </Typography>
          <WalletZerionSquareIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WarningFilledIcon
          </Typography>
          <WarningFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WarningOutlinedIcon
          </Typography>
          <WarningOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WindowFilledIcon
          </Typography>
          <WindowFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            WindowOutlinedIcon
          </Typography>
          <WindowOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            YoutubeCircleFilledIcon
          </Typography>
          <YoutubeCircleFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            YoutubeCircleOutlinedIcon
          </Typography>
          <YoutubeCircleOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            YoutubeFilledIcon
          </Typography>
          <YoutubeFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            YoutubeOutlinedIcon
          </Typography>
          <YoutubeOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ZoomInFilledIcon
          </Typography>
          <ZoomInFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ZoomInOutlinedIcon
          </Typography>
          <ZoomInOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ZoomOutFilledIcon
          </Typography>
          <ZoomOutFilledIcon fontSize={30} />
        </Stack>
      </Box>
      <Box width="210px">
        <Stack direction="column" alignItems="center">
          <Typography variant="caption2" color={theme.colors.text.main}>
            ZoomOutOutlinedIcon
          </Typography>
          <ZoomOutOutlinedIcon fontSize={30} />
        </Stack>
      </Box>
    </div>
  );
};
