"use client";

import { Logo } from "@/components";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="root h-screen">
      <header className="flex items-center justify-center px-5 py-4">
        <Logo />
      </header>

      <div className="flex flex-col justify-center items-center h-full">
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
          <Button
            onClick={() => router.push("/auth/login")}
            className="w-full bg-gradient-to-r from-primary to-purple-950 text-neutral-100 p-3 rounded-md"
          >
            Iniciar Sesión
          </Button>

          <Button
            onClick={() => router.push("/auth/register")}
            className="w-full bg-gradient-to-r from-primary to-purple-950 text-neutral-100 p-3 rounded-md"
          >
            Registrate
          </Button>
        </div>
      </div>
    </div>
  );
}
