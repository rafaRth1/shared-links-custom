"use client";

import { useSession } from "next-auth/react";
import { AreaChart, CardRedSocial } from "@/components";
import { IoEye, IoPeopleSharp, IoPodium } from "react-icons/io5";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
import { useEffect } from "react";

export default function MetricSocialPage() {
  const { data } = useSession();

  useEffect(() => {
    const user_agent_id = navigator.userAgent.replace(/\D+/g, "");

    localStorage.setItem("id_user", user_agent_id);
  }, []);

  return (
    <section>
      <h2 className="text-neutral-100 text-3xl">
        ¡Buenos dias!
        <span className="font-semibold">
          {" "}
          {data?.user.firstname} {data?.user.lastname}
        </span>
        <span className="text-3xl">👋</span>
        {/* <p className="text-neutral-500">Datos de tu perfil</p> */}
      </h2>

      <p className="text-rose-600 font-medium mb-5">
        Por ahora las funciones de las estadísticas estan inabilitadas
      </p>

      <section className="content-red-social flex flex-col md:flex-row">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row gap-4 mb-5">
            <div className="flex w-full gap-4">
              <CardRedSocial
                nameRedSocial="Clicks"
                NameIcon={HiMiniCursorArrowRays}
                followersCount={`1020`}
                sizeIcon={20}
                nameCount="0 mes pasado"
                colorIcon="#9ca3af"
                variants="flex-auto min-[500px]:w-1/5"
              />

              <CardRedSocial
                nameRedSocial="Suscriptores"
                NameIcon={IoPeopleSharp}
                followersCount={`2254`}
                // colorIcon="#f21361ff"
                sizeIcon={20}
                nameCount="15 mes pasado"
                variants="flex-auto min-[500px]:w-1/5"
              />

              <CardRedSocial
                nameRedSocial="Vistas"
                NameIcon={IoEye}
                followersCount={`1233`}
                sizeIcon={20}
                nameCount="220 mes pasado"
                colorIcon=""
                variants="flex-auto min-[500px]:w-1/5"
              />
            </div>

            {/* <div className="flex w-full gap-4"> */}
            {/* <CardRedSocial
                nameRedSocial="Alcanzes"
                NameIcon={IoPodium}
                followersCount={`4684`}
                sizeIcon={20}
                nameCount="1020 mes pasado"
                colorIcon=""
                variants="flex-auto min-[500px]:w-1/5"
              /> */}

            {/* <CardRedSocial
                nameRedSocial="Vistas"
                NameIcon={IoEye}
                followersCount={`1233`}
                sizeIcon={20}
                nameCount="220 mes pasado"
                colorIcon=""
                variants="flex-auto min-[500px]:w-1/5"
              /> */}
            {/* </div> */}
          </div>

          <div className="flex flex-col min-[910px]:flex-row gap-5">
            <AreaChart
              variants="flex-auto w-full min-[910px]:w-2/5"
              name="Seguidores"
            />
            <AreaChart
              variants="flex-auto w-full min-[910px]:w-2/5"
              name="Vistas"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
