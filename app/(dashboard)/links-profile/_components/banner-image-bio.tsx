import { uploadImage } from "@/utils";
import { SubmitFile } from "@/components";
import { useAppProvider } from "@/hooks";
import { handleFileUploadImageService } from "@/services/bio-services";

export default function BannerImageBio() {
  const { dataBio, setDataBio, session } = useAppProvider();

  const handleFileUploadImage = async (image: FileList) => {
    if (image[0].size / 1000 > 1000) {
      return console.log("La imagen tiene que ser menor a 1mb");
    }

    if (!image[0].type.includes("image")) {
      return console.log("Tiene que ser un archivo imagen");
    }

    try {
      const respImageUpload = await uploadImage(image[0]);
      const dataImageUpload = await respImageUpload?.json();

      const { data } = await handleFileUploadImageService(
        session,
        dataImageUpload?.secure_url
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
    <SubmitFile
      label="Agrega un banner de imagen"
      description="Seleccionar imagen de perfil"
      onChange={(e) => handleFileUploadImage(e.target.files!)}
    />
  );
}
