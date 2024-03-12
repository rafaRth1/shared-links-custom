"use client";

import { Spinner } from "@/components/Spinner/Spinner";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

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
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="bg-[#1a1b1a] mb-5 max-w-md w-full">
            <label
              className="block text-neutral-300 mb-2 text-sm"
              htmlFor="name-bio"
            >
              Nombre:
            </label>

            <input
              id="name"
              type="text"
              className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div className="bg-[#1a1b1a] mb-5 max-w-md w-full">
            <label
              className="block text-neutral-300 mb-2 text-sm"
              htmlFor="name-bio"
            >
              Nombre:
            </label>

            <input
              id="name"
              type="text"
              className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
          </div>

          <button className="bg-purple-400 p-2 rounded-md max-w-md w-full font-medium">
            Guardar Datos
          </button>
        </form>
      )}
    </div>
  );
}
