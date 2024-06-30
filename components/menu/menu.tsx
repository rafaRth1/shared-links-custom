"use client";

import { useEffect, useState } from "react";
import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import { links } from "@/data/links";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useMediaQueryNew } from "@/hooks";
import { signOut } from "next-auth/react";

export default function Menu() {
  const [active, setActive] = useState(false);
  const match = useMediaQueryNew(
    "(min-width:1280px)",
    true,
    matchMedia,
    null,
    false
  );

  useEffect(() => {
    if (match) {
      setActive(false);
    }
  }, [match]);

  return (
    <div className="flex p-4">
      <div className="xl:hidden ml-3">
        <IoMenuOutline
          size={30}
          className="cursor-pointer"
          onClick={() => setActive(true)}
        />
      </div>

      <div
        className={`fixed w-full h-full z-20 left-0 top-0 ${
          active ? "opacity-1 visible" : "opacity-0 invisible"
        } transition-all`}
      >
        <div
          className="fixed inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          onClick={() => setActive(false)}
        />

        <div
          className={`absolute transition-all w-[250px] left-0 top-0 h-full bg-neutral-900 ${
            active ? "-translate-x-0" : "translate-x-[250px]"
          }`}
        >
          <nav className="h-full flex flex-col flex-1 py-4 px-5 mt-7">
            <Link
              href={"/metric-social"}
              className="text-neutral-100 text-xl block mt-1"
            >
              <Logo />
            </Link>

            <ul className="flex flex-col flex-1 w-full mt-5">
              {links.map(({ label, route }) => (
                <li key={route} className="hidden min-[684px]:block">
                  <Link
                    href={route}
                    className="flex items-center cursor-pointer p-3 rounded-md"
                  >
                    <span className="flex-1 text-neutral-100 hover:text-[#AC88F6] text-sm transition-all">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex-1" />

      <Dropdown placement="bottom-end" className="bg-[#2D2C2D]">
        <DropdownTrigger>
          <Avatar
            name="Rafael Alvarez"
            className="cursor-pointer bg-[#2D2C2D]"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="settings" href="/settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
