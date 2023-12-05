'use client';

import { useEffect } from 'react';
import useTabContext from '@/hooks/useTabContext';
import { DataNetworkSocialProvider } from '@/context/DataNetworkSocialContext/';
import { ContentFacebook, ContentInstagram, ContentTiktok, ContentTwitter } from '@/app/components';
import { redSocials } from '@/data/redSocials';

const contentsNetworksSocials = (step: number) => {
	switch (step) {
		case 1:
			return <ContentFacebook />;

		case 2:
			return <ContentTwitter />;

		case 3:
			return <ContentInstagram />;

		case 4:
			return <ContentTiktok />;
	}
};

export function TabsRedSocial() {
	const { selectedNumber, setSelectedNumber } = useTabContext();

	const handlerMoveIndicator = () => {
		const tabSelected = document.querySelector<HTMLElement>(`.tab-select`);
		const tabsRedSocial = document.querySelector(`.tabs-red-social`);
		const tabRedSocialAll = document.querySelectorAll(`.tab-red-social`);

		tabRedSocialAll.forEach((tab, index) => {
			tab.addEventListener('click', () => {
				setSelectedNumber(index + 1);
				// tabSelected!.style.width = `${tab.clientWidth}px`;
				// tabSelected!.style.transform = `translate(calc(${tab.getBoundingClientRect().left}px - calc(${
				// 	tabsRedSocial?.clientWidth
				// }px + 2.75px)))`;
			});
		});
	};

	useEffect(() => {
		handlerMoveIndicator();
	}, [selectedNumber]);

	return (
		<>
			<nav className='mb-7 w-fit'>
				<ul className='tabs-red-social relative flex flex-wrap p-2 bg-[#2D2C2D] rounded'>
					{redSocials.map((social) => (
						<li
							key={social.id}
							className={`tab-red-social text-neutral-100 p-2 duration-500 cursor-pointer ease-in-out relative flex-1 text-center`}>
							{social.id === selectedNumber && (
								<span className='tab-select absolute inset-0 z-0 bg-[#101010] rounded w-full h-full transition-all' />
							)}
							<div className='relative text-neutral-100 z-20'>{social.name}</div>
						</li>
					))}
				</ul>
			</nav>

			<DataNetworkSocialProvider>
				<div className='container-red-social'>{contentsNetworksSocials(selectedNumber)}</div>
			</DataNetworkSocialProvider>
		</>
	);
}

export default TabsRedSocial;
