import { Session } from "next-auth";
import { clientAxios } from "@/utils";

interface FormValuesProps {
  url: string;
  customName: string;
  platformName: string;
  position: number;
}

/**
 * @desc Agregar enlaces
 * @param session - Sesión del usuario
 * @param formValues - Datos del formulario
 * @returns  Response<any>
 */

const handleAddLinkService = async (
  session: Session | null,
  formValues: FormValuesProps
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.token}`,
    },
  };

  const { data } = await clientAxios.post(
    "/bio/link",
    {
      ...formValues,
    },
    config
  );

  return { data };
};

/**
 * @desc Agregar enlaces
 * @param idLink - ID enlace
 * @param url - Valor del url
 * @param customName - Nombre del url
 * @param session - Sesión del usuario
 * @returns  Response<any>
 */

const handleEditLinkService = async (
  idLink: string,
  url: string,
  customName: string,
  session: Session | null
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.token}`,
    },
  };

  const { data } = await clientAxios.put(
    `/bio/link/${idLink}`,
    {
      url,
      customName,
    },
    config
  );

  return { data };
};

/**
 * @desc Agregar enlaces
 * @param idLink - ID del enlace
 * @param session - Sesión del usuario
 * @returns  Response<any>
 */

const handleDeleteLinkService = async (
  idLink: string,
  session: Session | null
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.token}`,
    },
  };

  await clientAxios.delete(`/bio/link/${idLink}`, config);
};

const handleEditNicknameService = async (
  session: Session | null,
  title: string
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.token}`,
    },
  };

  const { data } = await clientAxios.put(
    "/bio/edit-bio",
    {
      title: title.trim(),
    },
    config
  );

  return { data };
};

const handleEditDescriptionBioService = async (
  session: Session | null,
  description: string
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.token}`,
    },
  };

  const { data } = await clientAxios.put(
    "/bio/edit-bio",
    {
      description: description.trim(),
    },
    config
  );

  return { data };
};

const handleFileUploadImageService = async (
  session: Session | null,
  imageProfile: string
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.token}`,
    },
  };

  const { data } = await clientAxios.put(
    "/bio/edit-bio",
    {
      imageProfile: imageProfile,
    },
    config
  );

  return { data };
};

export {
  handleAddLinkService,
  handleEditLinkService,
  handleDeleteLinkService,
  handleEditNicknameService,
  handleEditDescriptionBioService,
  handleFileUploadImageService,
};
