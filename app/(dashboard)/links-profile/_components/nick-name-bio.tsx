import { Input } from "@nextui-org/react";
import { useAppProvider, useDebounce, useUpdateEffect } from "@/hooks";
import { handleEditNicknameService } from "@/services/bio-services";

export default function NickNameBio() {
  const { dataBio, setDataBio, session } = useAppProvider();
  const debouncedValue = useDebounce(dataBio.title);

  const handleEditNickname = async () => {
    try {
      const { data } = await handleEditNicknameService(session, dataBio.title);

      console.log(data); //FIX: Manejar el resultado
    } catch (error) {
      console.log(error); // FIX: Manejar el error
    }
  };

  useUpdateEffect(() => {
    handleEditNickname();
  }, [debouncedValue]);

  return (
    <div className="my-5">
      <Input
        type="text"
        label="Nombre perfil"
        placeholder="Ejm: Richard Madison"
        value={dataBio.title}
        onChange={(e) => setDataBio({ ...dataBio, title: e.target.value })}
      />
    </div>
  );
}
