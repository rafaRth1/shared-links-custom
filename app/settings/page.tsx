'use client';

import React from 'react';
import Script from 'next/script';
import LoginStatusFacebook from '@/components/LoginStatusApplication/LoginStatusFacebook';
import { IoLogoTiktok, IoLogoYoutube } from 'react-icons/io5';
import LoginStatusInstagram from '@/components/LoginStatusApplication/LoginStatusInstagram';

export default function Settings() {
	return (
		<div className='settings'>
			<Script
				async
				defer
				crossOrigin='anonymous'
				src='https://connect.facebook.net/en_US/sdk.js'
			/>

			<h1 className='text-neutral-100 text-2xl font-medium my-8'>
				Settings
				<span className='block text-neutral-100 text-lg font-medium my-8'>Accounts associated</span>
			</h1>

			<div className='flex flex-wrap gap-5'>
				<LoginStatusFacebook />

				<LoginStatusInstagram />

				<button
					className='login-tiktok flex items-center p-2 bg-[#131312ff] text-neutral-100 rounded w-60'
					onClick={() => console.log('Login Tiktok')}>
					<IoLogoTiktok size={35} />
					<span className='ml-4'>Associate Tiktok</span>
				</button>

				<button
					className='login-youtube flex items-center p-2 bg-[#ff0000ff] text-neutral-100 rounded w-60'
					onClick={() => console.log('Login Youtube')}>
					<IoLogoYoutube size={35} />
					<span className='ml-4'>Associate Youtube</span>
				</button>
			</div>
		</div>
	);
}
