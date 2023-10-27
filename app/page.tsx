'use client';

import Image from 'next/image';
import CardRedSocial from '@/components/CardRedSocial/CardRedSocial';
import { IoLogoFacebook } from 'react-icons/io5';
import { fbLogin } from '@/utils/FacebookSDK';

function login() {
	console.log('reached log in button');
	fbLogin().then((response: any) => {
		console.log(response);
		if (response.status === 'connected') {
			console.log('Person is connected');
		} else {
			// something
		}
	});
}

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

			<button
				className='bg-blue-600 text-neutral-100 p-2 rounded-md'
				onClick={login}>
				Login Facebook
			</button>
		</div>
	);
}
