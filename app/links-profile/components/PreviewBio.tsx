import Link from "next/link";
// import { Popover } from "@/components";
import { IoPerson } from "react-icons/io5";

interface Props {
  dataBio: {
    name: string;
    description: string;
    image_bio: string;
    image_cover: string;
  };

  dataLinks: {
    id: string;
    platform: string;
    url: string;
  }[];
}

export function PreviewBio({ dataBio, dataLinks }: Props) {
  return (
    <section className="flex-auto lg:w-2/5 p-4">
      <picture className="relative">
        <img
          src="https://media.bio.site/sites/b1f391a4-bc7c-4844-a167-24f87f88a449/oMwQYdp5JAYaTCByXCcEQF.png"
          alt="Cover Photo"
          className="object-cover h-[170px] w-full"
        />

        {/* <div className='custom-shape-divider-bottom-1701468740'>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'>
        <path
          d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
          className='shape-fill'></path>
      </svg>
    </div> */}
      </picture>

      <div className="profile-wrapper relative flex flex-col justify-center items-center">
        <div className="-mt-[60px] bg-[#1a1b1a] p-4 rounded-full">
          <picture className="">
            {/* <img
          src='./profile.png'
          alt='Image Profile'
          className='rounded-full object-cover w-[100px] h-[100px]'
        /> */}

            <IoPerson size="100" className="text-neutral-100" />
          </picture>
        </div>

        <div className="links-profile-bio">
          <p className="text-neutral-100 text-3xl text-center font-semibold mb-3">
            {dataBio.name.length <= 0 ? "Nombre identificador" : dataBio.name}
          </p>

          <p className="text-neutral-400 text-base text-center">
            {dataBio.description.length <= 0
              ? "Tu descripción"
              : dataBio.description}
          </p>

          {/* <Popover /> */}
        </div>

        <div className="card-network-social flex flex-col w-full shadow-md">
          {dataLinks.map((dataLink) =>
            dataLink.url ? (
              <div
                key={dataLink.id}
                className="mt-5 flex-1 text-center bg-neutral-800 rounded-md cursor-pointer"
              >
                <Link
                  target="_blank"
                  href={dataLink.url}
                  className="block flex-1 text-neutral-100 capitalize p-4"
                >
                  {dataLink.platform}
                </Link>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}

export default PreviewBio;
