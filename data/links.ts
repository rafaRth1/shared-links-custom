import { IconType } from "react-icons";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoTwitter,
  IoPodiumSharp,
  IoSettingsSharp,
  IoUnlink,
} from "react-icons/io5";

interface LinksNavigation {
  label: string;
  route: string;
  Icon?: IconType;
  subRoute?: LinksNavigation[];
}

export const links: LinksNavigation[] = [
  {
    label: "Métricas",
    route: "/metric-social",
    Icon: IoPodiumSharp,
    subRoute: [
      {
        label: "Facebook",
        route: "/facebook",
        Icon: IoLogoFacebook,
      },

      {
        label: "Twitter",
        route: "/twitter",
        Icon: IoLogoTwitter,
      },

      {
        label: "Instagram",
        route: "/instagram",
        Icon: IoLogoInstagram,
      },

      {
        label: "Tiktok",
        route: "/tiktok",
        Icon: IoLogoTiktok,
      },
    ],
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
