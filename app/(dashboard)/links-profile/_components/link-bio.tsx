import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button, Input } from "@nextui-org/react";
import { handleEditLinkService } from "@/services/bio-services";
import { useDebounce, useUpdateEffect } from "@/hooks";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { LinksBio, UserDataBio } from "@/types";
import { IoReorderTwo } from "react-icons/io5";

interface Props {
  link: LinksBio;
  dataBio: UserDataBio;
  setDataBio: React.Dispatch<React.SetStateAction<UserDataBio>>;
  handleDeleteLink: (idLink: string) => Promise<void>;
}

export default function LinkBio({
  link,
  dataBio,
  setDataBio,
  handleDeleteLink,
}: Props) {
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

  const handleEditLink = async () => {
    try {
      const { data } = await handleEditLinkService(
        link._id,
        values.url,
        values.customName,
        session
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
    handleEditLink();
  }, [debouncedValueUrl, debouncedValueCustonName]);

  return (
    <div
      className="bg-[#0d0d0d] mt-7 py-4 px-5 rounded-md z-50"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <header className="flex items-center text-neutral-100 ">
        <IoReorderTwo size="30" className="cursor-pointer" />

        <div className="flex-1" />

        <Button
          className="bg-rose-600 py-2 px-3 rounded-md active:scale-95"
          onClick={() => handleDeleteLink(link._id)}
        >
          Eliminar
        </Button>
      </header>

      <Input
        type="text"
        label="Enlace"
        placeholder="Editar enlance"
        className="my-4"
        value={values.url}
        onChange={(e) => setValues({ ...values, url: e.target.value })}
      />

      <Input
        type="text"
        label="Nombre enlace"
        placeholder="Escribe o pega tu enlace aquí"
        className="my-4"
        value={values.customName}
        onChange={(e) => setValues({ ...values, customName: e.target.value })}
      />
    </div>
  );
}
