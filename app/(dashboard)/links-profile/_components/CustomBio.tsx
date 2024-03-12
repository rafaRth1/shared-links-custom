"use client";

import { useSession } from "next-auth/react";
import clientAxios from "@/utils/client-axios";
import {
  InputNickname,
  FormLink,
  LinksBio,
  InputDescription,
  BannerImage,
  PerfilImage,
} from "./";
import { UserDataBio } from "@/types";

interface Props {
  dataBio: UserDataBio;
  setDataBio: React.Dispatch<React.SetStateAction<UserDataBio>>;
}

export default function CustomBio({ dataBio, setDataBio }: Props) {
  const { data: session } = useSession();

  const handleDeleteLink = async (idLink: string) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.token}`,
        },
      };

      await clientAxios.post(
        `/bio/${idLink}`,
        {
          idLinkBio: dataBio._id,
        },
        config
      );

      const linksUpdate = dataBio.links.filter((link) => link._id !== idLink);
      setDataBio({ ...dataBio, links: linksUpdate });
    } catch (error) {
      console.log(error); // FIX: Manejar el error si sucede algo.
    }
  };

  return (
    <section className="flex-auto lg:w-3/5 p-4">
      <div className="mb-6">
        <h2 className="text-neutral-100 text-lg text-center font-medium mb-6">
          Personaliza tu biografía de enlaces
        </h2>

        <div>
          <div className="bg-[#1a1b1a] mb-5">
            <PerfilImage dataBio={dataBio} setDataBio={setDataBio} />
            <BannerImage dataBio={dataBio} setDataBio={setDataBio} />
          </div>

          <InputNickname dataBio={dataBio} setDataBio={setDataBio} />

          <InputDescription dataBio={dataBio} setDataBio={setDataBio} />
        </div>
      </div>

      <FormLink dataBio={dataBio} setDataBio={setDataBio} />

      <LinksBio
        dataBio={dataBio}
        setDataBio={setDataBio}
        handleDeleteLink={handleDeleteLink}
      />
    </section>
  );
}
