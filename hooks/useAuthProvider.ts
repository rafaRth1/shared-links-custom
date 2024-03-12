import { useContext } from "react";
import { AuthContext, AuthContextProps } from "@/context";

export const useAuthProvider = () => {
  return useContext<AuthContextProps>(AuthContext);
};
