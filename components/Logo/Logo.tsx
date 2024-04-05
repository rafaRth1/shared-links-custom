import Link from "next/link";
import { League_Spartan } from "next/font/google";
import Image from "next/image";
import SharedLinkCustom from "@/public/logo.svg";
import Logosvg from "../Logosvg/Logosvg";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Logo() {
  return (
    <div className="logo-main">
      <Logosvg />
    </div>
  );
}
