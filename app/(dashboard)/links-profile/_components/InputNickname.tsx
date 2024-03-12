"use client";

import { useSession } from "next-auth/react";
import { useDebounce, useUpdateEffect } from "@/hooks/";
import clientAxios from "@/utils/client-axios";
import { UserDataBio } from "@/types";

interface Props {
  dataBio: UserDataBio;
  setDataBio: React.Dispatch<React.SetStateAction<UserDataBio>>;
}

export default function InputNickname({ dataBio, setDataBio }: Props) {
  const debouncedValue = useDebounce(dataBio.title);
  const { data: session } = useSession();

  const handleEditNickname = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.token}`,
        },
      };

      const { data } = await clientAxios.put(
        "/bio/edit-bio",
        {
          _id: dataBio._id,
          title: dataBio.title.trim(),
        },
        config
      );

      console.log(data); //FIX: Manejar la data json ni bien concluya
    } catch (error) {
      console.log(error);
    }
  };

  useUpdateEffect(() => {
    handleEditNickname();
  }, [debouncedValue]);

  return (
    <div className="bg-[#1a1b1a] mb-5">
      <label className="block text-neutral-300 mb-2 text-sm" htmlFor="name-bio">
        Escriba su nombre para su perfil:
      </label>

      <input
        id="name-bio"
        type="text"
        className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
        placeholder="Ejm: Richard Madison"
        value={dataBio.title}
        onChange={(e) => setDataBio({ ...dataBio, title: e.target.value })}
      />
    </div>
  );
}
