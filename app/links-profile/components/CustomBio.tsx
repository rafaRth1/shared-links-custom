"use client";

import { useRef } from "react";
import { Reorder } from "framer-motion";
import {
  IoAddCircleOutline,
  IoImageOutline,
  IoLink,
  IoReorderTwo,
} from "react-icons/io5";

interface Props {
  dataBio: {
    name: string;
    description: string;
    image_bio: string;
    image_cover: string;
  };

  setDataBio: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      image_bio: string;
      image_cover: string;
    }>
  >;

  dataLinks: {
    id: string;
    platform: string;
    url: string;
  }[];

  setDataLinks: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        platform: string;
        url: string;
      }[]
    >
  >;
}

export function CustomBio({
  dataBio,
  setDataBio,
  dataLinks,
  setDataLinks,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddLinks = () => {
    setDataLinks([
      ...dataLinks,
      { id: `${dataLinks.length + 1}`, platform: "", url: "" },
    ]);
  };

  const handleEditLink = (value: string, idItemLink: string) => {
    const updateDataLinks = dataLinks.map((dataLink) => {
      if (dataLink.id === idItemLink) {
        return {
          ...dataLink,
          url: value,
        };
      } else {
        return dataLink;
      }
    });

    setDataLinks(updateDataLinks);
  };

  const handleRemoveLink = (idItemLink: string) => {
    const updateDataLinks = dataLinks.filter(
      (dataLink) => dataLink.id !== idItemLink
    );
    setDataLinks(updateDataLinks);
  };

  const handleEditPlatform = (value: string, idItemLink: string) => {
    const updateDataLinks = dataLinks.map((dataLink) => {
      if (dataLink.id === idItemLink) {
        return {
          ...dataLink,
          platform: value,
        };
      } else {
        return dataLink;
      }
    });

    setDataLinks(updateDataLinks);
  };

  const handleFileUploadImage = (value: any) => {
    console.log(value);
  };

  return (
    <section className="flex-auto lg:w-3/5 p-4">
      <div className="mb-6">
        <h2 className="text-neutral-100 text-lg text-center font-medium mb-6">
          Personaliza tu biografía de enlaces
        </h2>

        <div>
          <div className="bg-[#1a1b1a] mb-5">
            <label
              className="block text-neutral-300 mb-2 text-sm"
              htmlFor="image"
            >
              Agrega un perfil de imagen:
            </label>

            <button
              className="w-full text-neutral-100 bg-[#101010] p-3 rounded border border-neutral-500 active:bg-neutral-900 active:scale-[.99]"
              onClick={() => fileInputRef.current?.click()}
            >
              <IoImageOutline size="20" className="inline" />
              <span className="ml-3">Seleccionar imagen de perfil</span>
            </button>

            <input
              type="file"
              onChange={(e: any) => handleFileUploadImage(e.target.files)}
              className="hidden"
              ref={fileInputRef}
            />
          </div>

          <div className="bg-[#1a1b1a] mb-5">
            <label
              className="block text-neutral-300 mb-2 text-sm"
              htmlFor="name-bio"
            >
              Escriba su nombre para su perfil:
            </label>

            <input
              id="name-bio"
              type="text"
              className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
              placeholder="Ejm: Richard Madison"
              value={dataBio.name}
              onChange={(e) => setDataBio({ ...dataBio, name: e.target.value })}
            />
          </div>

          <div className="bg-[#1a1b1a] mb-5">
            <label
              className="block text-neutral-300 mb-2 text-sm"
              htmlFor="name-desc"
            >
              Escriba su descripción para su perfil:
            </label>

            <input
              id="name-desc"
              type="text"
              className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
              placeholder="Ejm: Sigueme en mis..."
              value={dataBio.description}
              onChange={(e) =>
                setDataBio({ ...dataBio, description: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => handleAddLinks()}
        className="flex items-center  justify-center w-full bg-[#101010] text-neutral-100 p-3 border border-neutral-600 rounded-md active:bg-neutral-900 active:scale-[.99]"
      >
        <IoAddCircleOutline size="20" />
        <span className="ml-3">Agregar nuevo enlace</span>
      </button>

      <Reorder.Group axis="y" values={dataLinks} onReorder={setDataLinks}>
        {dataLinks.map((item) => (
          <Reorder.Item key={item.id} value={item}>
            <div className="bg-[#2D2C2D] mt-7 py-4 px-5 rounded-md">
              <header className="flex items-center text-neutral-100 ">
                <IoReorderTwo size="30" className="cursor-pointer" />

                <div className="flex-1" />

                <button
                  className="bg-rose-600 py-2 px-3 rounded-md active:scale-95"
                  onClick={() => handleRemoveLink(item.id)}
                >
                  Remove
                </button>
              </header>

              <div className="text-neutral-100 mt-4">
                <label className="block mb-2 text-sm">Plataforma</label>
                <select
                  autoComplete="off"
                  name="platform"
                  className="w-full p-2 rounded-sm bg-neutral-800 cursor-pointer outline-none"
                  value={item.platform}
                  onChange={(e) => handleEditPlatform(e.target.value, item.id)}
                >
                  <option value="github">Github</option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                  <option value="tiktok">Tiktok</option>
                  <option value="instagram">Instagram</option>
                  <option value="youtube">Youtube</option>
                </select>
              </div>

              <div className="text-neutral-100 mt-4 relative">
                <label className="block mb-2 text-sm">Enlace</label>
                <input
                  autoComplete="off"
                  name="link"
                  type="text"
                  placeholder="Escribe o pega tu enlace aquí"
                  className="w-full bg-neutral-800 py-3 px-2 outline-none pl-10"
                  value={item.url}
                  onChange={(e) => handleEditLink(e.target.value, item.id)}
                />
                <IoLink className="absolute top-11 ml-3" />
              </div>
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  );
}

export default CustomBio;
