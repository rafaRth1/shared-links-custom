"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { links } from "@/data/links";
import { Logo } from "..";
import { useMediaQueryNew } from "@/hooks";

export default function Navigation() {
  const session = useSession();
  const match = useMediaQueryNew("(min-width:1280px)", true, null, false);

  const nameShort = `${session.data?.user.firstname[0]}${session.data?.user.lastname[0]}`;

  return (
    <aside className="relative text-neutral-100">
      {match ? (
        <div className="flex flex-col h-full w-[250px]">
          <nav className="fixed top-0 left-0 h-full flex flex-col flex-1 py-4 px-5 bg-[#0d0d0d]">
            <Link
              href={"/metric-social"}
              className="text-neutral-100 text-xl block mt-1"
            >
              <Logo />
            </Link>

            <ul className="flex flex-col flex-1 w-full mt-5">
              {links.map(({ label, route }) => (
                <li key={route}>
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
      ) : null}
    </aside>
  );
}
