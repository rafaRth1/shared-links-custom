import { IoLogoFacebook } from 'react-icons/io5';
import { IconType } from 'react-icons';

interface Props {
	nameRedSocial: string;
	NameIcon: IconType;
	colorIcon?: string;
	sizeIcon?: string | number;
	countFollowers: string;
}

export default function CardRedSocial({
	nameRedSocial,
	NameIcon,
	countFollowers,
	colorIcon,
	sizeIcon,
}: Props) {
	return (
		<div className='flex flex-col items-center text-neutral-100 bg-[#2D2C2D] px-3 py-4 rounded-md'>
			<div className='flex items-center'>
				<NameIcon
					color={colorIcon}
					size={sizeIcon}
				/>
				<span className='text-2xl ml-2'>{nameRedSocial}</span>
			</div>

			<span className='text-5xl my-5'>{countFollowers}</span>

			<p className='text-neutral-400'>Followers</p>
		</div>
	);
}
