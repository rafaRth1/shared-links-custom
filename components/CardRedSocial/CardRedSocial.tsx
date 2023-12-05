import { IconType } from 'react-icons';

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
		<div
			className={`flex flex-col text-neutral-100 bg-[#2D2C2D] rounded-md border border-neutral-600 ${variants}`}>
			<div className='flex items-center justify-start px-3 py-4'>
				<NameIcon
					color={colorIcon}
					size={sizeIcon}
				/>
				<span className='text-lg ml-2'>{nameRedSocial}</span>
			</div>

			<div className='w-full h-[1px] bg-neutral-600' />

			<span className='text-5xl mt-10 px-3'>{followersCount}</span>

			<p className='text-neutral-400 mb-2 px-3'>{nameCount}</p>
		</div>
	);
}

export default CardRedSocial;
