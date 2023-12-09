"use client";

import { useState, useEffect } from "react";
import { IoLogoFacebook } from "react-icons/io5";

const handlerGetPage = async (user_id: string, access_token: string) => {
  const response = await fetch(
    `https://graph.facebook.com/${user_id}/accounts?access_token=${access_token}`
  );

  const { data } = await response.json();

  localStorage.setItem(
    "access_token_page",
    JSON.stringify({
      access_token: data[0].access_token,
      id: data[0].id,
    })
  );
};

export default function LoginStatusFacebook() {
  const [statusSession, setStatusSession] = useState("");

  const handleLoginFacebook = () => [
    FB.login(function (response) {
      if (response.status === "connected") {
        console.log("Conectado con Facebook guardar token de acceso");
        localStorage.setItem("access_token", JSON.stringify(response)); // save token in localstorage // FIX:change way saved
        handlerGetPage(
          response.authResponse.userID,
          response.authResponse.accessToken!
        );
        setStatusSession("connected");
      }
    }),
    {
      scope:
        "public_profile, pages_read_engagement, read_insights, pages_show_list",
    },
  ];

  const handleLogoutFacebook = () => {
    FB.logout(function (response) {
      console.log("Logout", response);
      localStorage.removeItem("access_token");
      setStatusSession("");
    });
  };

  useEffect(() => {
    const initialFB = () => {
      window.fbAsyncInit = function () {
        console.log("Call initial FB"); // Remover cuando este en production

        FB.init({
          appId: process.env.APP_ID_FACEBOOK,
          xfbml: true,
          version: "v18.0",
        });

        FB.getLoginStatus(async (response) => {
          localStorage.setItem("access_token", JSON.stringify(response)); // save token in localstorage // FIX:change way saved
          setStatusSession(response.status);
        });
      };
    };

    initialFB();
  }, []);

  return statusSession === "connected" ? (
    <button
      className="login-facebook flex items-center p-2 bg-[#0867feff] text-neutral-100 rounded w-60"
      onClick={() => handleLogoutFacebook()}
    >
      <IoLogoFacebook size={35} />
      <span className="ml-4">Logout</span>
    </button>
  ) : (
    <button
      className="login-facebook flex items-center p-2 bg-[#0867feff] text-neutral-100 rounded w-60"
      onClick={() => handleLoginFacebook()}
    >
      <IoLogoFacebook size={35} />
      <span className="ml-4">Associate facebook</span>
    </button>
  );
}
