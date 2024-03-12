import Link from "next/link";
import clientAxios from "@/utils/client-axios";
import { notFound } from "next/navigation";
import { UserDataBio } from "@/types";
import { IoPerson } from "react-icons/io5";

async function getUser(params: string) {
  try {
    const { data } = await clientAxios(`/user/profile-link/${params}`);

    return data;
  } catch (error) {
    return null;
  }
}

export default async function PageUser({
  params,
}: {
  params: { user_id: string };
}) {
  const data: UserDataBio = await getUser(params.user_id);

  if (!data) {
    notFound();
  }

  return (
    <section className="w-full max-w-[680px] mx-auto p-4">
      <div>
        <picture className="relative">
          <img
            src={
              data.bannerImage?.length > 0
                ? data.bannerImage
                : "https://media.bio.site/sites/b1f391a4-bc7c-4844-a167-24f87f88a449/oMwQYdp5JAYaTCByXCcEQF.png"
            }
            alt="Cover Photo"
            className="object-cover h-[170px] w-full"
          />
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
            <p className="text-neutral-100 text-3xl text-center font-semibold mb-3">
              {data.title?.length === 0 ? "Nombre identificador" : data.title}
            </p>

            <p className="text-neutral-400 text-base text-center">
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
                  className="mt-5 flex-1 text-center bg-neutral-800 rounded-md cursor-pointer"
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

          <Link
            href="/auth/register"
            className="bg-neutral-200 hover:bg-neutral-300 transition-all p-3 rounded-lg shadow-lg font-medium"
          >
            Crea tu cuenta y comparte tus redes en Shared Link Custom
          </Link>
        </div>
      </div>
    </section>
  );
}
