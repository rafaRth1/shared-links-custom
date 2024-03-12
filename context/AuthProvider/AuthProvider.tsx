"use client";

import axios from "axios";
import clientAxios from "../../utils/client-axios";
import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./AuthContext";
import { AuthInterface } from "./AuthContextType";

interface Props {
  children: JSX.Element;
}

let authValues = {
  _id: "",
  name: "",
  email: "",
  confirm: false,
  colorImg: "",
};

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthInterface>(authValues);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    const cancel = axios.CancelToken.source();

    const authtenticateUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clientAxios("/user/perfil", config);
        setAuth(data);
        // navigate('/');
      } catch (error) {
        setAuth(authValues);
      } finally {
        setLoading(false);
      }
    };

    authtenticateUser();

    return () => {
      // console.log('Limpiando');
      cancel.cancel();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
