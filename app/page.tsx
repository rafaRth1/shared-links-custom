import Image from "next/image";
import { Logo } from "@/components";
import ImagePresentation from "../public/803shots_so.png";

export default async function Home() {
  return (
    <div className="root">
      <header className="flex items-center justify-center px-5 py-4">
        <Logo />
      </header>

      <div className="flex items-center mt-20">
        <div className="basis-1/2">
          <h1 className="text-6xl md:text-7xl font-bold text-center text-neutral-300">
            <span className="block text-transparent bg-gradient-to-r from-[#a855f7] to-[#BF8732] bg-clip-text">
              Comparte y personaliza
            </span>
            tus redes sociales
          </h1>

          <p className="text-neutral-400 text-xl text-center mt-5">
            Registrate o inicia sesión para comenzar a compartir tus enlaces
            favoritos
          </p>

          <div className="flex justify-center gap-5 mt-5">
            <button className="p-2 text-neutral-100 bg-gradient-to-r from-[#a855f7] to-[#BF8732] rounded-md">
              Iniciar Sesión
            </button>
            <button className="p-2 text-neutral-100 bg-gradient-to-r from-[#a855f7] to-[#BF8732] rounded-md">
              Registrate
            </button>
          </div>
        </div>

        <div className="basis-1/2">
          <Image src={ImagePresentation} alt="Image" />
        </div>
      </div>
    </div>
  );
}
