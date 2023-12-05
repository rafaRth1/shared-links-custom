import { ProfileNetworkSocial } from '.';
import { AreaChart, CardRedSocial } from '@/components';
import { IoHeartSharp, IoPeople, IoPodium } from 'react-icons/io5';

export function ContentTwitter() {
	return (
		<section className='content-red-social flex flex-col md:flex-row'>
			<div className='flex flex-col w-full md:w-2/3'>
				<div className='flex flex-wrap gap-4 mb-5 h-fit'>
					<CardRedSocial
						nameRedSocial='Followers'
						NameIcon={IoPeople}
						followersCount={`${'0'}`}
						sizeIcon={20}
						nameCount='0 last month'
						colorIcon='#9ca3af'
						variants='flex-auto min-[500px]:w-1/5'
					/>

					<CardRedSocial
						nameRedSocial='Likes'
						NameIcon={IoHeartSharp}
						followersCount={`${'0'}`}
						colorIcon='#f21361ff'
						sizeIcon={20}
						nameCount='15 last month'
						variants='flex-auto min-[500px]:w-1/5'
					/>

					<CardRedSocial
						nameRedSocial='Reach'
						NameIcon={IoPodium}
						followersCount={`${'0'}`}
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
