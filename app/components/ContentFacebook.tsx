'use client';

import { useEffect } from 'react';
import { ProfileNetworkSocial } from '.';
import { AreaChart, CardRedSocial } from '@/components/';
import useDataNetworkSocial from '@/hooks/useDataNetworkSocial';
import { getDataFacebookUser } from '@/services/services_facebook';
import { IoHeartSharp, IoPeople, IoPodium } from 'react-icons/io5';

export function ContentFacebook() {
	const { dataFacebook, setDataFacebook } = useDataNetworkSocial();

	// FIX: structure and consume data correctly
	const dataImpression = dataFacebook?.data_impression ?? [];
	const followersCount = dataFacebook?.data_page_fields?.followers_count;
	const likesCount = dataFacebook?.data_page_fields?.fan_count;
	const reachCount = dataImpression[0]?.values[dataImpression.length - 1].value;

	useEffect(() => {
		const handlerDataFacebookUser = async () => {
			if (typeof window !== 'undefined' && window.localStorage) {
				const token: fb.StatusResponse = JSON.parse(localStorage.getItem('access_token')!);

				if (Object.keys(dataFacebook).length === 0) {
					try {
						const response = await getDataFacebookUser(
							token.authResponse.accessToken!,
							token.authResponse.userID
						);

						setDataFacebook(response);
					} catch (error) {
						console.log('error handlerDataFacebookUser'); // FIX: handle errors;
					}
				}
			}
		};

		handlerDataFacebookUser();
	}, []);

	return (
		<section className='content-red-social flex flex-col md:flex-row'>
			<div className='flex flex-col w-full md:w-2/3'>
				<div className='flex flex-wrap gap-4 mb-5 h-fit'>
					<CardRedSocial
						nameRedSocial='Followers'
						NameIcon={IoPeople}
						followersCount={`${followersCount ? followersCount : '1020'}`}
						sizeIcon={20}
						nameCount='0 last month'
						colorIcon='#9ca3af'
						variants='flex-auto min-[500px]:w-1/5'
					/>

					<CardRedSocial
						nameRedSocial='Likes'
						NameIcon={IoHeartSharp}
						followersCount={`${likesCount ? likesCount : '2254'}`}
						colorIcon='#f21361ff'
						sizeIcon={20}
						nameCount='15 last month'
						variants='flex-auto min-[500px]:w-1/5'
					/>

					<CardRedSocial
						nameRedSocial='Reach'
						NameIcon={IoPodium}
						followersCount={`${reachCount ? reachCount : '4684'}`}
						sizeIcon={20}
						nameCount='1020 last month'
						colorIcon=''
						variants='flex-auto min-[500px]:w-1/5'
					/>
				</div>

				<div className='flex flex-col 2xl:flex-row gap-5'>
					<AreaChart variants='flex-auto 2xl:w-2/5' />
					<AreaChart variants='flex-auto 2xl:w-2/5' />
				</div>
			</div>

			<ProfileNetworkSocial />
		</section>
	);
}
