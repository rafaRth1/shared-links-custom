import { IoMenuSharp, IoNotificationsOutline, IoSearchOutline } from 'react-icons/io5';

export default function Header() {
	return (
		<header className='flex items-center text-neutral-100'>
			<IoMenuSharp
				size={20}
				className='xl:hidden'
			/>

			<div className='flex items-center relative'>
				<IoSearchOutline className='block ml-4 min-[460px]:absolute right-2 text-xl' />

				<input
					type='text'
					id='search'
					className='bg-[#2D2C2D] border border-neutral-600 rounded-md ml-4 p-2 outline-none text-sm hidden min-[460px]:block min-[460px]:w-[260px]'
					placeholder='Busca alguna sección'
				/>
			</div>

			<div className='flex-1' />

			<div className='flex items-center'>
				<IoNotificationsOutline
					size={20}
					className='cursor-pointer block'
				/>

				<div className='perfil-account ml-4'>
					<picture>
						<img
							src='./profile.png'
							alt='Image Network Social'
							className='rounded-full w-9 h-9'
						/>
					</picture>
				</div>
			</div>
		</header>
	);
}
