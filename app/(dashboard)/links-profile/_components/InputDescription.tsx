import clientAxios from "@/utils/client-axios";
import { useSession } from "next-auth/react";
import { useDebounce, useUpdateEffect } from "@/hooks";
import { UserDataBio } from "@/types";

interface Props {
  dataBio: UserDataBio;
  setDataBio: React.Dispatch<React.SetStateAction<UserDataBio>>;
}

export default function InputDescription({ dataBio, setDataBio }: Props) {
  const debouncedValue = useDebounce(dataBio.description);
  const { data: session } = useSession();

  const handleEditDescription = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.token}`,
        },
      };

      const { data } = await clientAxios.put(
        "/bio/edit-bio",
        {
          _id: dataBio._id,
          description: dataBio.description.trim(),
        },
        config
      );
      console.log(data); //FIX: Manejar la data json ni bien concluya
    } catch (error) {
      console.log(error);
    }
  };

  useUpdateEffect(() => {
    handleEditDescription();
  }, [debouncedValue]);

  return (
    <div className="mb-5">
      <label
        className="block text-neutral-300 mb-3 text-sm"
        htmlFor="description"
      >
        Escriba su descripción para su perfil:
      </label>
      <input
        id="description"
        type="text"
        className="bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none"
        placeholder="Ejm: Sigueme en mis..."
        value={dataBio.description}
        onChange={(e) =>
          setDataBio({ ...dataBio, description: e.target.value })
        }
      />
    </div>
  );
}
