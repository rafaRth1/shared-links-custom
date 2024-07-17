import { useContext } from "react";
import { AppContext } from "@/context";
import { AppContextType } from "@/context/app-provider/app-context-type";

export const useAppProvider = () => {
  return useContext<AppContextType>(AppContext);
};
