import { Input } from "@nextui-org/react";
import { useAppProvider, useDebounce, useUpdateEffect } from "@/hooks";
import { handleEditDescriptionBioService } from "@/services/bio-services";

export default function DescriptionBio() {
  const { dataBio, setDataBio, session } = useAppProvider();
  const debouncedValue = useDebounce(dataBio.description);

  const handleEditDescription = async () => {
    try {
      await handleEditDescriptionBioService(session, dataBio.description);
    } catch (error) {
      console.log(error); // FIX: Manejar el error
    }
  };

  useUpdateEffect(() => {
    handleEditDescription();
  }, [debouncedValue]);

  return (
    <div className="my-5">
      <Input
        type="text"
        label="Description"
        placeholder="Ejm: Sigueme en mis..."
        value={dataBio.description}
        onChange={(e) =>
          setDataBio({ ...dataBio, description: e.target.value })
        }
      />
    </div>
  );
}
