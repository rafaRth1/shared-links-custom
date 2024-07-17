"use client";

import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { Button, DateInput, Input } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";

export default function Settings() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    name: "",
    lastName: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    const handleSession = async () => {
      const session = await getSession();

      setData({
        name: session?.user.firstname!,
        lastName: session?.user.lastname!,
      });

      setLoading(false);
    };

    handleSession();
  }, []);

  return (
    <div className="settings">
      <h1 className="text-neutral-100 text-2xl font-medium my-8 text-center">
        Configuración
      </h1>

      {loading ? (
        <div className="flex flex-col mx-auto max-w-md animate-pulse">
          <div className="max-w-xs w-full h-[20px] bg-neutral-800 rounded-lg mb-3" />
          <div className="max-w-md w-full h-[40px] bg-neutral-800 rounded-lg mb-10" />
          <div className="max-w-xs w-full h-[20px] bg-neutral-800 rounded-lg mb-3" />
          <div className="max-w-md w-full h-[40px] bg-neutral-800 rounded-lg mb-5" />
          <div className="max-w-md w-full h-[50px] bg-neutral-900 rounded-lg" />
        </div>
      ) : (
        <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
          <div className="max-w-lg w-full mx-auto">
            <Input
              type="email"
              name="email"
              label="Correo Electronico"
              className="mb-5"
              value={"rafarth1@outlook.com"}
              onChange={(e) => console.log(e.target.value)}
            />

            <Input
              type="text"
              name="name"
              label="Nombre"
              className="mb-5"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />

            <Input
              type="text"
              name="lastname"
              label="Apellido"
              className="mb-5"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />

            <Input
              type="password"
              name="password"
              label="Contraseña"
              className="mb-5"
              value={"123456"}
              onChange={(e) => console.log(e.target.value)}
            />

            <DateInput
              label={"Birth date"}
              placeholderValue={new CalendarDate(1995, 11, 6)}
              className="mb-5"
            />

            <Button
              onClick={() => console.log("Guardando")}
              className="w-full bg-gradient-to-r from-primary to-purple-950 text-neutral-100 p-3 rounded-md"
            >
              Guardar Datos
            </Button>

            {/* {!true ? (
              <p className="text-green-600 mt-5 text-sm font-medium">
                Datos guardados correctamente
              </p>
            ) : (
              <p className="text-rose-600 mt-5 text-sm font-medium">
                Hubo un error al guardar sus datos
              </p>
            )} */}
          </div>
        </form>
      )}
    </div>
  );
}
