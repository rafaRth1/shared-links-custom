"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { UserDataBio } from "@/types";
import clientAxios from "@/utils/client-axios";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";

interface Props {
  data: UserDataBio;
}

const optionsDonation = [
  {
    id: "1",
    amount_donation: 1,
    title: "1$",
  },
  {
    id: " 2",
    amount_donation: 5,
    title: "5$",
  },
  {
    id: "3",
    amount_donation: 10,
    title: "10$",
  },
];

export default function UserContent({ data }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const userView = localStorage.getItem("id_user");
    const userAgentId = navigator.userAgent.replace(/\D+/g, "");

    if (!userView) {
      localStorage.setItem("id_user", userAgentId);
    }
  }, []);

  useEffect(() => {
    const userView = localStorage.getItem("id_user");

    const handleDetectViews = async () => {
      const response = await clientAxios.post("/bio/profile-view", {
        id_user_browser: userView,
        id_profile: data.user,
      });

      console.log(response);
    };

    handleDetectViews();
  }, []);

  return (
    <section className="w-full max-w-[680px] mx-auto p-4">
      <div>
        <picture className="relative">
          {data.bannerImage.length !== 0 ? (
            data.bannerImage
          ) : (
            <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[170px] w-full rounded-xl" />
          )}
        </picture>

        <div className="profile-wrapper relative flex flex-col justify-center items-center ">
          <div className="-mt-[60px] bg-[#1a1b1a] p-4 rounded-full">
            <picture className="">
              {data.imageProfile?.length > 0 ? (
                <img
                  src={data.imageProfile}
                  alt="Image Profile"
                  className="rounded-full object-cover w-[100px] h-[100px]"
                />
              ) : (
                <IoPerson size="100" className="text-neutral-100" />
              )}
            </picture>
          </div>

          <div className="links-profile-bio">
            <p className="text-neutral-100 text-3xl text-center font-semibold my-3">
              {data.title?.length === 0 ? "Nombre identificador" : data.title}
            </p>

            <p className="text-neutral-400 text-center">
              {data.description?.length <= 0
                ? "Tu descripción"
                : data.description}
            </p>
          </div>

          <div className="card-network-social flex flex-col w-full shadow-md mb-20">
            {data.links?.map((link) =>
              link.url ? (
                <div
                  key={link._id}
                  className="mt-5 flex-1 text-center bg-[#18181a] rounded-md cursor-pointer"
                >
                  <Link
                    target="_blank"
                    href={link.url}
                    className="block flex-1 text-neutral-100 capitalize p-4"
                  >
                    {link.customName.length !== 0
                      ? link.customName
                      : link.platformName}
                  </Link>
                </div>
              ) : null
            )}
          </div>

          <div className="bg-[#18181a] w-full rounded-md p-6 text-sm">
            <h2 className="text-xl font-medium text-center">Donaciones</h2>

            <p className="">{`Elegir cantidad (USD)`}</p>

            <div className="my-5">
              <Tabs
                color="danger"
                className="max-w-sm w-full"
                classNames={{ tabList: "w-full" }}
              >
                {optionsDonation.map((item) => (
                  <Tab key={item.id} title={item.title} />
                ))}
              </Tabs>
            </div>

            <div className="mb-4">
              <p className="block mb-4">Cantidad personalizada</p>

              <Input
                type="number"
                name="amount"
                label="$"
                // value={dataBio.title}
                // onChange={(e) => setDataBio({ ...dataBio, title: e.target.value })}
              />

              <Button
                onPress={onOpen}
                className="w-full bg-blue-700 text-neutral-100 p-3 rounded-md mt-5"
              >
                <span className="ml-3">Donar</span>
              </Button>
            </div>
          </div>

          <Link
            href="/auth/register"
            className="bg-gradient-to-r from-primary to-purple-950 shadow-lg hover:shadow-blue-500/50 transition-all p-3 rounded-lg font-medium mt-5 text-sm"
          >
            Crea tu cuenta y comparte tus redes en Shared Link Custom
          </Link>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Ingresar metodo de pago
              </ModalHeader>
              <ModalBody>
                <Input
                  type="email"
                  name="email"
                  label="Ingresar correo"
                  // value={dataBio.title}
                  // onChange={(e) => setDataBio({ ...dataBio, title: e.target.value })}
                />

                <Input
                  type="number"
                  name="card"
                  label="Ingresar numero de tarjeta"
                  maxLength={16}
                  placeholder="4557"
                  // value={dataBio.title}
                  // onChange={(e) => setDataBio({ ...dataBio, title: e.target.value })}
                />

                <Input
                  type="text"
                  name="email"
                  label="Ingresar nombre completo"
                  // value={dataBio.title}
                  // onChange={(e) => setDataBio({ ...dataBio, title: e.target.value })}
                />

                <p className="text-sm text-warning-500">
                  Este formulario es falso no ingresar datos reales
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Donar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
