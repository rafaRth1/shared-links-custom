'use client';

import { IoLogoInstagram } from 'react-icons/io5';

export default function LoginStatusInstagram() {
	const handleLoginInstagram = async () => {
		const corsHeroku = 'https://cors-anywhere.herokuapp.com/';
		const clientId = '1575920652815302';
		const redirectUri = 'https://365e-2800-200-e280-d59-fd2b-fcb8-53c-8351.ngrok-free.app/';
		const scope = 'user_profile,user_media';
		const response_type = 'code';

		const response = await fetch(
			`https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${response_type}`,
			{ mode: 'cors' }
		);

		const data = await response.json();

		console.log(data);
	};

	return (
		<button
			className='login-instagram flex items-center p-2 bg-gradient-to-r from-[#962fbf] from-10% via-[#d62976] via-40% to-[#fa7e1e] to-90% text-neutral-100 rounded w-60'
			onClick={() => handleLoginInstagram()}>
			<IoLogoInstagram size={35} />
			<span className='ml-4'>Associate Instagram</span>
		</button>
	);
}
