"use client";

import clientAxios from "@/utils/client-axios";
import { useState } from "react";

export default function ChooseName() {
  const [nickname, setNickname] = useState("");
  const [alert, setAlert] = useState({ error: false, msg: "" });
  const expReg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]+$/;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (nickname.trim() === "") {
      return setAlert({ error: true, msg: "Aun no ingresa un sobrenombre" });
    }

    if (!expReg.test(nickname)) {
      return setAlert({
        error: true,
        msg: "Solo debe contener letras y numeros",
      });
    }

    try {
      const data = clientAxios.post("/create-nickname", {});

      setAlert({ error: false, msg: "" });
    } catch (error) {
      console.log("Error", error); // FIX: handler error
    }
  };

  const { msg } = alert;

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="max-w-4xl">
        <h1 className="text-neutral-100 text-4xl mt-5">
          Busca un sobrenombre que te distinga
        </h1>

        <p className="text-neutral-300 mt-5">
          Recuerda que con este sobrenombre te podran buscar 😃
        </p>

        <input
          id="name-bio"
          type="text"
          className={`bg-neutral-800 text-neutral-100 p-3 w-full rounded-lg border-2 ${
            alert.error
              ? "border-rose-600"
              : "border-neutral-600 hover:border-neutral-500"
          }  outline-none mt-10`}
          placeholder="Ingrese su sobrenombre"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        {alert.error ? <p className="text-rose-600 mt-2">{msg}</p> : ""}

        <button
          className="p-3 text-neutral-100 bg-violet-600 rounded-md w-full mt-5"
          onClick={(e) => handleSubmit(e)}
        >
          Crear sobrenombre
        </button>
      </div>
    </section>
  );
}
