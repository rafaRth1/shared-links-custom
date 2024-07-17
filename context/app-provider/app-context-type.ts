import { Session } from "next-auth";
import { UserDataBio } from "@/types";

export interface AppContextType {
  dataBio: UserDataBio;
  setDataBio: React.Dispatch<React.SetStateAction<UserDataBio>>;
  session: Session | null;
  handleDeleteLink: (idLink: string) => Promise<void>;
}
