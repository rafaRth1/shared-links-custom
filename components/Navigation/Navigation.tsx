"use client";

import { useContext } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { TabsContext } from "@/context/TabsContext/TabsContext";
import { IconType } from "react-icons";
import {
  IoCloseCircleOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoTwitter,
  IoPodiumSharp,
  IoSettingsSharp,
  IoUnlink,
} from "react-icons/io5";
import useTabContext from "@/hooks/useTabContext";

interface Props {
  activeNav: boolean;
  setActiveNav: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LinksNavigation {
  label: string;
  route: string;
  Icon?: IconType;
  subRoute?: LinksNavigation[];
}

const links: LinksNavigation[] = [
  {
    label: "Metric Social",
    route: "/",
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
    label: "Links Profile",
    route: "/links-profile",
    Icon: IoUnlink,
  },

  {
    label: "Settings",
    route: "/settings",
    Icon: IoSettingsSharp,
  },
];

export default function Navigation({ activeNav, setActiveNav }: Props) {
  const { setSelectedNumber, handlerMoveIndicator } = useTabContext();

  return (
    <nav
      className={`fixed ${
        activeNav ? "left-0" : "-left-full"
      } -left-full xl:left-0 top-0 bottom-0 w-[260px] min-w-[260px] h-screen p-5 bg-[#2D2C2D] flex flex-col justify-between items-start z-50 transition-all`}
    >
      <div className="flex items-center">
        <Logo />
        <IoCloseCircleOutline
          size="30"
          className="cursor-pointer xl:hidden"
          onClick={() => setActiveNav((prevState) => !prevState)}
        />
      </div>

      <ul className="mt-20 flex flex-col h-full w-full">
        {links.map(({ label, route, subRoute, Icon }) => (
          <li key={route}>
            <Link
              href={route}
              className="flex items-center text-neutral-100 text-base cursor-pointer p-3 hover:bg-neutral-800 rounded-md"
            >
              {Icon ? <Icon /> : null}
              <span className="ml-3 flex-1">{label}</span>
            </Link>

            {/* <ul className="ml-5">
              {subRoute
                ? subRoute.map(({ label, route: subRoute, Icon }, index) => (
                    <li
                      key={`${subRoute}`}
                      onClick={() => setSelectedNumber(index + 1)}
                      className="flex items-center text-neutral-200 p-2 hover:bg-neutral-800 rounded-md cursor-pointer"
                    >
                      {Icon ? <Icon /> : null}
                      <span className="ml-3 flex-1">{label}</span>
                    </li>
                  ))
                : null}
            </ul> */}
          </li>
        ))}
      </ul>

      <button className="text-neutral-100">Logout</button>
    </nav>
  );
}

//
