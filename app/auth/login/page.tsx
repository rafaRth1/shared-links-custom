"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Spinner } from "@/components/Spinner/Spinner";
import Image from "next/image";
import clientAxios from "@/utils/client-axios";
import BgLogin from "@/public/bg-login.jpg";
import Link from "next/link";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ type: false, msg: "" });
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await clientAxios.post("/user/login", dataForm);

      await signIn("credentials", {
        email: data.data.email,
        password: dataForm.password,
        redirect: false,
      });

      router.push("/links-profile");
    } catch (error: any) {
      setError({
        type: true,
        msg: error.response.data.msg,
      });
    } finally {
      setLoading(false);
    }
  };

  const { msg } = error;

  return (
    <section className="w-full flex flex-col items-center md:flex-row h-[100dvh]">
      <picture className="basis-1/2 hidden md:block">
        <Image
          src={BgLogin}
          alt="Background register"
          className="object-cover h-screen"
        />
      </picture>
      <div className="flex justify-center flex-1 p-10">
        <form
          className="flex flex-col justify-center md:justify-normal"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-3xl text-neutral-200 font-semibold mb-5">
            Iniciar sesión
          </h1>

          <div className="bg-[#1a1b1a] mb-5">
            <label
              className="block text-neutral-300 mb-2 text-sm"
              htmlFor="name-bio"
            >
              Escriba su email:
            </label>

            <input
              id="email"
              type="email"
              className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
              value={dataForm.email}
              onChange={(e) =>
                setDataForm({ ...dataForm, email: e.target.value })
              }
            />
          </div>

          <div className="bg-[#1a1b1a] mb-5">
            <label
              className="block text-neutral-300 mb-2 text-sm"
              htmlFor="name-bio"
            >
              Escriba su contraseña:
            </label>

            <input
              id="password"
              type="password"
              className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
              value={dataForm.password}
              onChange={(e) =>
                setDataForm({ ...dataForm, password: e.target.value })
              }
            />
          </div>

          <p className="text-neutral-100 text-sm mb-5">
            ¿Te olvidaste tus credenciales?,{" "}
            <span className="text-violet-500 hover:underline cursor-pointer">
              Recuperar cuenta
            </span>
          </p>

          <p className="text-neutral-100 text-sm mb-5">
            ¿Aun no tienes una cuenta?,{" "}
            <Link
              href="/auth/register"
              className="text-violet-500 hover:underline cursor-pointer"
            >
              Crear cuenta
            </Link>
          </p>

          {error.type && (
            <span className="text-rose-600 p-3 mb-5 border-rose-600 border-2 rounded-lg">
              {msg}
            </span>
          )}

          {loading ? (
            <Spinner className="mt-5" />
          ) : (
            <button
              type="submit"
              className="bg-violet-600 text-neutral-200 py-2 px-3 rounded-md active:scale-95"
            >
              Iniciar sesión
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
