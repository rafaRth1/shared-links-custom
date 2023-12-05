export function ProfileNetworkSocial() {
	return (
		<section className='profile-network-social mt-5 md:mt-0 md:ml-4 flex-auto w-full md:w-1/3'>
			<div className='border border-neutral-600 bg-[#2D2C2D] rounded'>
				<h2 className='block text-neutral-100 text-xl font-medium p-4'>Account</h2>

				<picture className='flex justify-center mb-6 p-4'>
					<img
						src='./profile.png'
						alt='Image Network Social'
						className='rounded-full w-28 h-28'
					/>
				</picture>

				<div className='flex flex-col items-center mb-6'>
					<span className='text-neutral-100'>Rafael Alvarez</span>
					<span className='text-neutral-400'>@rafael_official</span>
				</div>

				<div className='w-full h-[1px] bg-neutral-600' />

				<div className='flex p-4'>
					<div className='flex flex-col flex-1 items-center'>
						<span className='text-neutral-100 text-lg font-medium'>1314</span>
						<span className='text-neutral-100'>Post</span>
					</div>

					<div className='flex flex-col flex-1 items-center'>
						<span className='text-neutral-100 text-lg font-medium'>2471</span>
						<span className='text-neutral-100'>Seguidores</span>
					</div>

					<div className='flex flex-col flex-1 items-center'>
						<span className='text-neutral-100 text-lg font-medium'>7521</span>
						<span className='text-neutral-100'>Siguiendo</span>
					</div>
				</div>
			</div>
		</section>
	);
}
