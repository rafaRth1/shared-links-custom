import { IconType } from "react-icons";

interface Props {
  nameRedSocial: string;
  followersCount: string;
  nameCount: string;
  NameIcon: IconType;
  colorIcon?: string;
  sizeIcon?: string | number;
  variants?: string;
}

export function CardRedSocial({
  nameRedSocial,
  NameIcon,
  followersCount,
  colorIcon,
  sizeIcon,
  nameCount,
  variants,
}: Props) {
  return (
    <div className={`${variants}`}>
      <div className="flex flex-col text-neutral-100 bg-[#2D2C2D] rounded-md p-4">
        <div className="flex items-center justify-start">
          <NameIcon color={colorIcon} size={sizeIcon} />
          <span className="text-lg ml-2">{nameRedSocial}</span>
        </div>

        {/* <div className="w-full h-[1px] bg-neutral-600" /> */}

        <span className="text-5xl my-3">{followersCount}</span>

        <p className="text-neutral-400">{nameCount}</p>
      </div>
    </div>
  );
}

export default CardRedSocial;
