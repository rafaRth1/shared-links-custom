import React, { useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { handleAddLinkService } from "@/services/bio-services";
import { useAppProvider } from "@/hooks";
import { IoAddCircleOutline } from "react-icons/io5";

export default function FormLink() {
  const { dataBio, setDataBio, session } = useAppProvider();
  const [isError, setIsError] = useState(false);
  const [formValues, setFormValues] = useState({
    url: "",
    customName: "",
    platformName: "github",
    position: dataBio.links?.length,
  });

  const handleAddLink = async () => {
    if ([formValues.url, formValues.customName].includes("")) {
      setIsError(true);
      return;
    }

    try {
      const { data } = await handleAddLinkService(session, formValues);

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

      setIsError(false);
    } catch (error) {
      console.log(error); // FIX: Manejar el error
    }
  };

  return (
    <div className="bg-[#0d0d0d] mt-7 py-4 px-5 rounded-md">
      <h1 className="text-neutral-100 tex-lg font-medium mb-5">
        Ingrese nuevo enlace
      </h1>

      <Input
        type="url"
        label="Enlace"
        placeholder="Ingresa el enlace"
        className="mb-4"
        isInvalid={isError}
        value={formValues.url}
        onChange={(e) => setFormValues({ ...formValues, url: e.target.value })}
      />

      <Input
        type="text"
        label="Nombre enlace"
        placeholder="Ingresa el nombre de la url"
        className="mb-4"
        isInvalid={isError}
        value={formValues.customName}
        onChange={(e) =>
          setFormValues({ ...formValues, customName: e.target.value })
        }
      />

      <Select
        label="Selecciona una plataforma"
        className="mb-5"
        value={formValues.platformName}
        onChange={(e) =>
          setFormValues({ ...formValues, platformName: e.target.value })
        }
      >
        <SelectItem key="github">Github</SelectItem>
        <SelectItem key="facebook">Facebook</SelectItem>
        <SelectItem key="twitter">Twitter</SelectItem>
        <SelectItem key="tiktok">Tiktok</SelectItem>
        <SelectItem key="instagram">Instagram</SelectItem>
        <SelectItem key="youtube">Youtube</SelectItem>
      </Select>

      <Button
        onClick={() => handleAddLink()}
        className="w-full bg-gradient-to-r from-primary to-purple-950 text-neutral-100 p-3 rounded-md"
      >
        <IoAddCircleOutline size="20" className="inline" />
        <span className="ml-3">Agregar nuevo enlace</span>
      </Button>
    </div>
  );
}
