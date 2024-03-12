import { SetStateAction } from "react";
import Link from "next/link";
import { links } from "@/data/links";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

interface Props {
  isActiveMenu: boolean;
  setIsActiveMenu: React.Dispatch<SetStateAction<boolean>>;
}

export default function MenuMobile({ isActiveMenu, setIsActiveMenu }: Props) {
  return (
    <div
      className={`fixed w-full z-20 left-0 top-0 ${
        !isActiveMenu ? "-translate-y-full" : "translate-y-0"
      } transition-all bg-neutral-800`}
    >
      <IoCloseOutline
        onClick={() => setIsActiveMenu(!isActiveMenu)}
        className="block absolute right-5 top-5 cursor-pointer"
        size={30}
      />

      <ul className="flex flex-col items-center mt-10 mb-10">
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link
              href={route}
              className="flex items-center cursor-pointer p-3 rounded-md"
            >
              <span className="flex-1 text-neutral-100 hover:text-[#AC88F6] text-lg transition-all">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
