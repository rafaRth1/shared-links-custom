import { useRef } from "react";
import { useSession } from "next-auth/react";
import { uploadImage } from "@/utils";
import clientAxios from "@/utils/client-axios";
import { UserDataBio } from "@/types";
import { IoImageOutline } from "react-icons/io5";

interface Props {
  dataBio: UserDataBio;
  setDataBio: React.Dispatch<React.SetStateAction<UserDataBio>>;
}

export default function BannerImage({ dataBio, setDataBio }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();

  const handleFileUploadImage = async (image: FileList) => {
    if (image[0].size / 1000 > 1000) {
      return console.log("La imagen tiene que ser menor a 1mb");
    }

    if (!image[0].type.includes("image")) {
      return console.log("Tiene que ser un archivo imagen");
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.token}`,
        },
      };

      const respImageUpload = await uploadImage(image[0]);

      const dataImageUpload = await respImageUpload?.json();

      const { data } = await clientAxios.put(
        "/bio/edit-bio",
        {
          _id: dataBio._id,
          bannerImage: dataImageUpload?.secure_url,
        },
        config
      );

      setDataBio({
        ...dataBio,
        bannerImage: data.linkBio.bannerImage,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <span className="block text-neutral-300 mb-2 text-sm">
        Agrega un banner de imagen:
      </span>

      <button
        className="w-full text-neutral-100 bg-[#101010] p-3 rounded border-2 border-dashed border-neutral-500 active:bg-neutral-900 active:scale-[.99]"
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
    </>
  );
}
