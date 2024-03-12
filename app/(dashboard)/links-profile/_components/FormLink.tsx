import React, { useState } from "react";
import clientAxios from "@/utils/client-axios";
import { useSession } from "next-auth/react";
import { UserDataBio } from "@/types";
import { IoAddCircleOutline } from "react-icons/io5";

interface Props {
  dataBio: UserDataBio;
  setDataBio: React.Dispatch<React.SetStateAction<UserDataBio>>;
}

export default function FormLink({ dataBio, setDataBio }: Props) {
  const { data: session } = useSession();
  const [formValues, setFormValues] = useState({
    url: "",
    customName: "",
    platformName: "github",
    position: dataBio.links?.length,
  });

  const handleAddLink = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.token}`,
        },
      };

      const { data } = await clientAxios.post(
        "/bio/add-link",
        {
          idBio: dataBio._id,
          ...formValues,
        },
        config
      );

      setDataBio({
        ...dataBio,
        links: [...dataBio.links, data?.link],
      });

      setFormValues({
        url: "",
        customName: "",
        platformName: "",
        position: dataBio.links.length,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#2D2C2D] mt-7 py-4 px-5 rounded-md">
      <h1 className="text-neutral-100 tex-lg font-medium mb-5">
        Ingrese nuevo enlace
      </h1>

      <div>
        <span className="block text-neutral-300 mb-2 text-sm">Url:</span>
        <input
          id="url"
          type="url"
          className="bg-neutral-800 text-neutral-100 p-2 w-full mb-5 rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
          value={formValues.url}
          onChange={(e) =>
            setFormValues({ ...formValues, url: e.target.value })
          }
        />
      </div>

      <div>
        <span className="block text-neutral-300 mb-2 text-sm">
          Nombre personalizado:
        </span>
        <input
          id="name-custom"
          type="text"
          className="bg-neutral-800 text-neutral-100 p-2 w-full mb-5 rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
          value={formValues.customName}
          onChange={(e) =>
            setFormValues({ ...formValues, customName: e.target.value })
          }
        />
      </div>

      <div className="text-neutral-100 mb-5">
        <span className="block mb-2 text-sm">Plataforma</span>
        <select
          autoComplete="off"
          name="platform"
          className="w-full p-2 rounded-sm bg-neutral-800 cursor-pointer outline-none"
          value={formValues.platformName}
          onChange={(e) =>
            setFormValues({ ...formValues, platformName: e.target.value })
          }
        >
          <option value="github">Github</option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="tiktok">Tiktok</option>
          <option value="instagram">Instagram</option>
          <option value="youtube">Youtube</option>
        </select>
      </div>

      <button
        onClick={() => handleAddLink()}
        className="flex items-center  justify-center w-full bg-[#101010] text-neutral-100 p-3 border border-neutral-600 rounded-md active:bg-neutral-900 active:scale-[.99]"
      >
        <IoAddCircleOutline size="20" />
        <span className="ml-3">Agregar nuevo enlace</span>
      </button>
    </div>
  );
}
