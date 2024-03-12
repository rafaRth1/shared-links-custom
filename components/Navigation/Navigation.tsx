"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { links } from "@/data/links";
import { Logo } from "@/components";
import { IoCloseCircleOutline, IoMenuOutline } from "react-icons/io5";

function Navigation() {
  return (
    <nav
      className={`fixed ${
        false ? "left-0" : "-left-full"
      } -left-full xl:left-0 top-0 bottom-0 w-[260px] min-w-[260px] h-screen p-5 bg-[#2D2C2D] flex flex-col justify-between items-start z-50 transition-all`}
    >
      <div className="flex items-center">
        <Logo />
        <IoCloseCircleOutline
          size="30"
          className="cursor-pointer xl:hidden"
          // onClick={() => setActiveNav((prevState) => !prevState)}
        />
      </div>

      <ul className="mt-20 flex flex-col h-full w-full">
        {links.map(({ label, route, subRoute, Icon }) => (
          <li key={route}>
            <Link
              href={route}
              className="flex items-center text-neutral-100 text-base cursor-pointer p-3 hover:bg-neutral-800 rounded-md"
            >
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

      <button className="text-neutral-100" onClick={() => signOut()}>
        Logout
      </button>
    </nav>
  );
}

export default Navigation;
