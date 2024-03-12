"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import MenuMobile from "../MenuMobile/MenuMobile";
import Link from "next/link";
import { PopoverCustom } from "@/components/PopoverCustom";
import { links } from "@/data/links";
import { IoMenuOutline } from "react-icons/io5";

export default function Header() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const session = useSession();

  const nameShort = `${session.data?.user.firstname[0]}${session.data?.user.lastname[0]}`;

  return (
    <header className="flex items-center text-neutral-100 py-4 px-5 bg-neutral-900">
      <nav className="flex items-center relative flex-1">
        <Link
          href={"/metric-social"}
          className="text-neutral-100 text-xl block mr-5d "
        >
          Shared Links Custom
        </Link>

        <ul className="flex items-center">
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

          <li className="min-[684px]:hidden ml-3">
            <IoMenuOutline
              size={30}
              className="cursor-pointer"
              onClick={() => setIsActiveMenu(!isActiveMenu)}
            />
          </li>
        </ul>
      </nav>

      <div className="flex items-center">
        <PopoverCustom preferredPosition="bottom-end" widthEqualTrigger={false}>
          <PopoverCustom.PopoverContent>
            {() => (
              <>
                <PopoverCustom.Trigger>
                  <div className="flex items-center justify-center bg-neutral-600 p-2 h-10 w-10 rounded-full cursor-pointer">
                    {nameShort === "undefinedundefined" ? "" : nameShort}
                  </div>
                </PopoverCustom.Trigger>

                <PopoverCustom.Body>
                  <div
                    className={`border-neutral-600 bg-neutral-800 flex flex-col border rounded-md transition-opacity z-40 w-56 p-2`}
                  >
                    <Link
                      href="/settings"
                      className="block text-white hover:bg-neutral-700 transition-colors cursor-pointer p-2 rounded"
                      onClick={() =>
                        console.log("Ingresando a la sección cuenta")
                      }
                    >
                      Configuracion
                    </Link>

                    <span
                      className="block text-white hover:bg-red-600 transition-colors cursor-pointer p-2 rounded"
                      onClick={() => signOut()}
                    >
                      Cerrar Sesión
                    </span>
                  </div>
                </PopoverCustom.Body>
              </>
            )}
          </PopoverCustom.PopoverContent>
        </PopoverCustom>
      </div>

      <MenuMobile
        isActiveMenu={isActiveMenu}
        setIsActiveMenu={setIsActiveMenu}
      />
    </header>
  );
}
