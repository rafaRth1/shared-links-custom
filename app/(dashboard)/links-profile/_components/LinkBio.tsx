import { useState } from "react";
import { useSession } from "next-auth/react";
import { useDebounce, useUpdateEffect } from "@/hooks";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clientAxios from "@/utils/client-axios";
import { LinksBio, UserDataBio } from "@/types";
import { IoLink, IoReorderTwo } from "react-icons/io5";

interface Props {
  link: LinksBio;
  dataBio: UserDataBio;
  setDataBio: React.Dispatch<React.SetStateAction<UserDataBio>>;
}

export default function LinkBio({ link, dataBio, setDataBio }: Props) {
  const [values, setValues] = useState({
    url: link.url,
    customName: link.customName,
  });

  const debouncedValueUrl = useDebounce(values.url);
  const debouncedValueCustonName = useDebounce(values.customName);
  const { data: session } = useSession();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: link._id,
      transition: {
        duration: 500, // milliseconds
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleEditUrl = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.token}`,
        },
      };

      const { data } = await clientAxios.post(
        "/bio/edit-link",
        {
          _id: dataBio._id,
          idLink: link._id,
          url: values.url,
          custonName: values.customName,
        },
        config
      );

      const linksUpdate = dataBio.links.map((linkUpdate) => {
        if (data?.linkUpdate._id === linkUpdate._id) {
          return {
            ...linkUpdate,
            url: values.url,
            customName: values.customName,
          };
        } else {
          return linkUpdate;
        }
      });

      setDataBio({
        ...dataBio,
        links: linksUpdate,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useUpdateEffect(() => {
    handleEditUrl();
  }, [debouncedValueUrl, debouncedValueCustonName]);

  return (
    <div
      className="bg-[#2D2C2D] mt-7 py-4 px-5 rounded-md"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <header className="flex items-center text-neutral-100 ">
        <IoReorderTwo size="30" className="cursor-pointer" />

        <div className="flex-1" />

        <button
          className="bg-rose-600 py-2 px-3 rounded-md active:scale-95"
          onClick={() => console.log("handleDeleteLink(link._id)")}
        >
          Eliminar
        </button>
      </header>

      <div className="text-neutral-100 mt-4 relative">
        <span className="block mb-2 text-sm">Enlace</span>
        <input
          autoComplete="off"
          name="link"
          type="text"
          placeholder="Escribe o pega tu enlace aquí"
          className="w-full bg-neutral-800 py-3 px-2 outline-none pl-10"
          value={values.url}
          onChange={(e) => setValues({ ...values, url: e.target.value })}
        />
        <IoLink className="absolute top-11 ml-3" />
      </div>

      <div className="text-neutral-100 mt-4 relative">
        <span className="block mb-2 text-sm">Nombre Enlace</span>
        <input
          autoComplete="off"
          name="name-enlace"
          type="text"
          placeholder="Escribe o pega tu enlace aquí"
          className="w-full bg-neutral-800 py-3 px-2 outline-none pl-10"
          value={values.customName}
          onChange={(e) => setValues({ ...values, customName: e.target.value })}
        />
        <IoLink className="absolute top-11 ml-3" />
      </div>
    </div>
  );
}
