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
import Tabs from "@/components/tabs/tabs";
import Tab from "@/components/tabs/tab";

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
    <section className="basis-3/4 p-4 overflow-y-auto appearance-none [&::-webkit-scrollbar]:bg-[#1a1b1a] [&::-webkit-scrollbar-thumb]:bg-[#333a35] [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar]:mr-[-10px]">
      <div className="max-w-[672px] mx-auto">
        <h2 className="text-neutral-100 text-lg text-center font-medium mb-6">
          Personaliza tu biografía de enlaces
        </h2>

        <Tabs>
          <Tab
            key="enlaces"
            title="Enlaces"
            varients="px-3 py-1 text-neutral-200"
          >
            <FormLink dataBio={dataBio} setDataBio={setDataBio} />

            <LinksBio
              dataBio={dataBio}
              setDataBio={setDataBio}
              handleDeleteLink={handleDeleteLink}
            />
          </Tab>
          <Tab
            key="apariencia"
            title="Apariencia"
            varients="px-3 py-1 text-neutral-200"
          >
            <InputNickname dataBio={dataBio} setDataBio={setDataBio} />

            <InputDescription dataBio={dataBio} setDataBio={setDataBio} />

            <div className="mt-5">
              <PerfilImage dataBio={dataBio} setDataBio={setDataBio} />
              <BannerImage dataBio={dataBio} setDataBio={setDataBio} />
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}
