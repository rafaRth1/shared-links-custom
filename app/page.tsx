import Image from 'next/image';
import CardRedSocial from '@/components/CardRedSocial/CardRedSocial';
import { IoLogoFacebook } from 'react-icons/io5';

export default function Home() {
	return (
		<div className=''>
			<h1 className='text-neutral-100 text-2xl font-medium my-8'>Metrics Social</h1>

			<div>
				<CardRedSocial
					nameRedSocial='Facebook'
					NameIcon={IoLogoFacebook}
					countFollowers='956'
					colorIcon='#0966feff'
					sizeIcon={35}
				/>
			</div>
		</div>
	);
}
