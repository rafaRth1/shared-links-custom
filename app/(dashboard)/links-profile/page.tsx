"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import clientAxios from "@/utils/client-axios";
import PreviewBio from "./_components/PreviewBio";
import CustomBio from "./_components/CustomBio";
import { UserDataBio } from "@/types";

export default function Links() {
  const [dataBio, setDataBio] = useState<UserDataBio>({
    title: "",
    name: "",
    links: [],
    user: "",
    imageProfile: "",
    description: "",
    bannerImage: "",
  });

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

  return (
    <div className="links-profile">
      <h1 className="text-neutral-100 text-2xl font-medium my-8">
        Personaliza tus enlaces sociales
      </h1>

      <div className="links-profile-content ">
        {!dataBio._id ? (
          <div className="flex flex-col">
            <div className="animate-pulse w-full h-4 bg-neutral-800 rounded col-span-2 mb-5"></div>
            <div className="animate-pulse w-full h-4 bg-neutral-800 rounded col-span-2 mb-5"></div>
            <div className="animate-pulse w-full h-4 bg-neutral-800 rounded col-span-2 mb-10"></div>

            <div className="animate-pulse flex flex-col lg:flex-row gap-5">
              <div className="flex-auto lg:w-2/5 h-[500px] bg-neutral-800 rounded-xl"></div>
              <div className="flex-auto lg:w-3/5 h-[500px] bg-neutral-800 rounded-xl"></div>
            </div>
          </div>
        ) : (
          <>
            <p className="text-neutral-100">
              Este es su perfil de enlace{" "}
              <Link
                href={`http://localhost:3000/${dataBio.name}`}
                target="_blank"
                className="hover:underline hover:text-blue-500"
              >
                {`shared-link-custom/${dataBio.name}`}
              </Link>
            </p>

            <div className="flex flex-col lg:flex-row">
              <PreviewBio dataBio={dataBio} />
              <CustomBio dataBio={dataBio} setDataBio={setDataBio} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
