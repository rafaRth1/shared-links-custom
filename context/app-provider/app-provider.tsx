"use client";

import { useEffect, useMemo, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { AppContext } from "./app-context";
import { clientAxios } from "@/utils";
import { UserDataBio } from "@/types";
import { handleDeleteLinkService } from "@/services/bio-services";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function AppProvider({ children }: Props) {
  const { data: session } = useSession();
  const [dataBio, setDataBio] = useState<UserDataBio>({
    title: "",
    name: "",
    links: [],
    user: "",
    imageProfile: "",
    description: "",
    bannerImage: "",
  });

  const handleDeleteLink = async (idLink: string) => {
    try {
      await handleDeleteLinkService(idLink, session);

      const linksUpdate = dataBio.links.filter((link) => link._id !== idLink);

      setDataBio({ ...dataBio, links: linksUpdate });
    } catch (error) {
      console.log(error); // FIX: Manejar el error
    }
  };

  useEffect(() => {
    const handlerGetUser = async () => {
      const session = await getSession();

      const { data } = await clientAxios(
        `/user/profile-link/${session?.user.nickname}`
      );

      setDataBio(data);
    };

    handlerGetUser();
  }, []);

  const values = useMemo(
    () => ({
      dataBio,
      setDataBio,
      session,
      handleDeleteLink,
    }),
    [dataBio, session]
  );

  return (
    <AppContext.Provider value={values}>
      {!dataBio._id ? (
        <div className="flex flex-col mt-5 w-full">
          <div className="animate-pulse w-full h-4 bg-neutral-800 rounded col-span-2 mb-5"></div>
          <div className="animate-pulse w-full h-4 bg-neutral-800 rounded col-span-2 mb-5"></div>
          <div className="animate-pulse w-full h-4 bg-neutral-800 rounded col-span-2 mb-10"></div>

          <div className="animate-pulse flex flex-col lg:flex-row gap-5">
            <div className="flex-auto lg:w-2/5 h-[500px] bg-neutral-800 rounded-xl"></div>
            <div className="flex-auto lg:w-3/5 h-[500px] bg-neutral-800 rounded-xl"></div>
          </div>
        </div>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
}
