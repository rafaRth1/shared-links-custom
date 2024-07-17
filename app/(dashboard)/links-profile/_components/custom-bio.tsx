import { Tab, Tabs } from "@nextui-org/react";
import { useAppProvider } from "@/hooks";
import { handleDeleteLinkService } from "@/services/bio-services";
import {
  NickNameBio,
  FormLink,
  LinksBio,
  DescriptionBio,
  PerfilImageBio,
  BannerImageBio,
} from "./";

export default function CustomBio() {
  const { dataBio, setDataBio, session } = useAppProvider();

  return (
    <section className="basis-3/4 p-4 appearance-none [&::-webkit-scrollbar]:bg-[#1a1b1a] [&::-webkit-scrollbar-thumb]:bg-[#333a35] [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar]:mr-[-10px]">
      <div className="max-w-[672px] mx-auto">
        <h2 className="text-neutral-100 text-lg text-center font-medium mb-6">
          Personaliza tu biografía de enlaces
        </h2>

        <Tabs>
          <Tab
            key="enlaces"
            title="Enlaces"
            className="px-3 py-1 text-neutral-200"
          >
            <FormLink />
            <LinksBio />
          </Tab>
          <Tab
            key="apariencia"
            title="Apariencia"
            className="px-3 py-1 text-neutral-200"
          >
            <NickNameBio />
            <DescriptionBio />

            <div className="mt-5">
              <PerfilImageBio />
              <BannerImageBio />
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}
