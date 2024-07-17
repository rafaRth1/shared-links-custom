import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import { useAppProvider } from "@/hooks";

export default function PreviewBio() {
  const { dataBio } = useAppProvider();

  return (
    <section className="flex flex-auto flex-col items-center p-4 basis-1/4">
      <p className="text-neutral-100 mb-5">
        Este es su perfil de enlace{" "}
        <Link
          href={`${process.env.URL_FRONTEND}/${dataBio.name}`}
          target="_blank"
          className="underline text-blue-500"
        >
          {`shared-link-custom/${dataBio.name}`}
        </Link>
      </p>

      <div className="w-full lg:w-[316px] xl:w-[460px] 2xl:w-[570px]">
        <picture className="relative">
          {dataBio.bannerImage.length !== 0 ? (
            dataBio.bannerImage
          ) : (
            <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[170px] w-full rounded-xl" />
          )}
        </picture>

        <div className="profile-wrapper relative flex flex-col justify-center items-center">
          <div className="-mt-[60px] bg-[#1a1b1a] p-4 rounded-full">
            <picture className="">
              {dataBio.imageProfile?.length > 0 ? (
                <img
                  src={dataBio.imageProfile}
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
              {dataBio.title?.length === 0 ? "" : dataBio.title}
            </p>

            <p className="text-neutral-400 text-base text-center">
              {dataBio.description?.length <= 0
                ? "Tu descripción"
                : dataBio.description}
            </p>
          </div>

          <div className="card-network-social flex flex-col w-full shadow-md z-20">
            {dataBio.links?.map((link) =>
              link.url ? (
                <div
                  key={link._id}
                  className="mt-5 flex-1 text-center bg-[#27272a] rounded-md cursor-pointer"
                >
                  <Link
                    target="_blank"
                    href={link.url}
                    className="block flex-1 text-neutral-100 capitalize p-4 text-[15px]"
                  >
                    {link.customName.length !== 0
                      ? link.customName
                      : link.platformName}
                  </Link>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// https://media.bio.site/sites/b1f391a4-bc7c-4844-a167-24f87f88a449/oMwQYdp5JAYaTCByXCcEQF.png
