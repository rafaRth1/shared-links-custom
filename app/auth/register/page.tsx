"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Spinner } from "@/components/Spinner/Spinner";
import clientAxios from "@/utils/client-axios";
import BgRegister from "@/public/bg-register.jpg";
import Link from "next/link";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ type: false, msg: "" });
  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      [
        dataForm.firstName,
        dataForm.lastName,
        dataForm.nickName,
        dataForm.email,
        dataForm.password,
      ].includes("")
    ) {
      return setError({ type: true, msg: "Rellenar campos faltantes" });
    }

    try {
      setLoading(true);

      const data = await clientAxios.post("/user", dataForm);

      if (data.statusText === "OK") {
        await signIn("credentials", {
          email: data.data.user.email,
          password: dataForm.password,
          redirect: false,
        });

        router.push("/links-profile");
      }
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
          src={BgRegister}
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
            Registro de usuario
          </h1>

          <div className="bg-[#1a1b1a] mb-5">
            <label
              className="block text-neutral-300 mb-2 text-sm"
              htmlFor="name-bio"
            >
              Escriba su nombre:
            </label>

            <input
              id="firstname"
              type="text"
              className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
              value={dataForm.firstName}
              onChange={(e) =>
                setDataForm({ ...dataForm, firstName: e.target.value })
              }
            />
          </div>

          <div className="bg-[#1a1b1a] mb-5">
            <label
              className="block text-neutral-300 mb-2 text-sm"
              htmlFor="name-bio"
            >
              Escriba su apellido:
            </label>

            <input
              id="lastname"
              type="text"
              className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
              value={dataForm.lastName}
              onChange={(e) =>
                setDataForm({ ...dataForm, lastName: e.target.value })
              }
            />
          </div>

          <div className="bg-[#1a1b1a] mb-5">
            <label
              className="block text-neutral-300 mb-2 text-sm"
              htmlFor="name-bio"
            >
              Escriba su sobre nombre:
            </label>

            <input
              id="nickname"
              type="text"
              className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
              value={dataForm.nickName}
              onChange={(e) =>
                setDataForm({ ...dataForm, nickName: e.target.value })
              }
            />
          </div>

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
            ¿Ya tienes cuenta?,{" "}
            <Link
              href="/auth/login"
              className="text-violet-500 hover:underline cursor-pointer"
            >
              Iniciar sesión
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
              Crear Cuenta
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
