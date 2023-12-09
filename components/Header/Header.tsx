"use client";

import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { PopoverCustom } from "@/components/PopoverCustom";
import {
  IoMenuSharp,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";

export function Header() {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <header className="flex items-center text-neutral-100">
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />

      <IoMenuSharp
        size={30}
        className="xl:hidden cursor-pointer"
        onClick={() => setActiveNav(!activeNav)}
      />

      <div className="flex items-center relative flex-1">
        <IoSearchOutline className="block ml-4 min-[460px]:absolute left-2 text-xl" />

        <input
          type="text"
          id="search"
          className="bg-[#2D2C2D] border border-neutral-600 rounded-md ml-4 p-2 pl-9 outline-none text-sm hidden min-[460px]:block min-[460px]:w-[260px] flex-1"
          placeholder="Busca alguna sección"
        />
      </div>

      <div className="flex items-center">
        {/* <IoNotificationsOutline
          size={20}
          className="cursor-pointer block ml-4"
        /> */}

        <PopoverCustom preferredPosition="left">
          <PopoverCustom.PopoverContent>
            {() => (
              <>
                <PopoverCustom.Trigger>
                  <picture className="ml-4 cursor-pointer">
                    <img
                      src="./profile.png"
                      alt="Image Network Social"
                      className="rounded-full w-9 h-9"
                    />
                  </picture>
                </PopoverCustom.Trigger>

                <PopoverCustom.Body>
                  <div
                    className={`border-neutral-600 bg-neutral-800 flex flex-col border rounded-md transition-opacity z-40 w-32 p-2`}
                  >
                    <span
                      className="block text-white hover:bg-red-600 transition-colors cursor-pointer p-2 rounded"
                      onClick={() => console.log("handleLogout")}
                    >
                      Logout
                    </span>
                  </div>
                </PopoverCustom.Body>
              </>
            )}
          </PopoverCustom.PopoverContent>
        </PopoverCustom>
      </div>
    </header>
  );
}

export default Header;
