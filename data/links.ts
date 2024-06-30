import { IconType } from "react-icons";
import { IoPodiumSharp, IoSettingsSharp, IoUnlink } from "react-icons/io5";

interface LinksNavigation {
  label: string;
  route: string;
  Icon?: IconType;
}

export const links: LinksNavigation[] = [
  {
    label: "Métricas",
    route: "/metric-social",
    Icon: IoPodiumSharp,
  },

  {
    label: "Perfil de Enlaces",
    route: "/links-profile",
    Icon: IoUnlink,
  },

  {
    label: "Configuración",
    route: "/settings",
    Icon: IoSettingsSharp,
  },
];
