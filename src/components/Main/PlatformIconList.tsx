import {
  FaWindows,
  FaLinux,
  FaAndroid,
  FaApple,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../Hooks/use-game";
import { Icon, Stack } from "@mui/material";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const mapIcon: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    android: FaAndroid,
    apple: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
  };
  return (
    <Stack direction="row" spacing={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          sx={{ color: "#9e9e9e" }}
          component={mapIcon[platform.slug]}
        />
      ))}
    </Stack>
  );
};

export default PlatformIconList;
