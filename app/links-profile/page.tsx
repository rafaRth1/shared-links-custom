'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { Reorder } from 'framer-motion';
import { IoAddCircleOutline, IoImageOutline, IoLink, IoPerson, IoReorderTwo } from 'react-icons/io5';

export default function Links() {
	const [dataBio, setDataBio] = useState({ name: '', description: '', image_bio: '', image_cover: '' });
	const [dataLinks, setDataLinks] = useState([
		{ id: '1', platform: 'youtube', url: 'https://www.youtube.com/rafarth1' },
		{ id: '2', platform: 'facebook', url: 'https://www.facebook.com/rafarth1' },
	]);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleAddLinks = () => {
		setDataLinks([...dataLinks, { id: `${dataLinks.length + 1}`, platform: '', url: '' }]);
	};

	const handleEditPlatform = (value: string, idItemLink: string) => {
		const updateDataLinks = dataLinks.map((dataLink) => {
			if (dataLink.id === idItemLink) {
				return {
					...dataLink,
					platform: value,
				};
			} else {
				return dataLink;
			}
		});

		setDataLinks(updateDataLinks);
	};

	const handleEditLink = (value: string, idItemLink: string) => {
		const updateDataLinks = dataLinks.map((dataLink) => {
			if (dataLink.id === idItemLink) {
				return {
					...dataLink,
					url: value,
				};
			} else {
				return dataLink;
			}
		});

		setDataLinks(updateDataLinks);
	};

	const handleRemoveLink = (idItemLink: string) => {
		const updateDataLinks = dataLinks.filter((dataLink) => dataLink.id !== idItemLink);
		setDataLinks(updateDataLinks);
	};

	const handleFileUploadImage = (value: any) => {
		console.log(value);
	};

	return (
		<div className='links-profile'>
			<h1 className='text-neutral-100 text-2xl font-medium my-8'>Personaliza tus enlaces sociales</h1>

			<div className='links-profile-content flex flex-col lg:flex-row'>
				<section className='flex-auto lg:w-2/5 p-4'>
					<picture className='relative'>
						<img
							src='https://media.bio.site/sites/b1f391a4-bc7c-4844-a167-24f87f88a449/oMwQYdp5JAYaTCByXCcEQF.png'
							alt='Cover Photo'
							className='object-cover h-[170px] w-full'
						/>

						{/* <div className='custom-shape-divider-bottom-1701468740'>
							<svg
								data-name='Layer 1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 1200 120'
								preserveAspectRatio='none'>
								<path
									d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
									className='shape-fill'></path>
							</svg>
						</div> */}
					</picture>

					<div className='profile-wrapper relative flex flex-col justify-center items-center'>
						<div className='-mt-[60px] bg-[#1a1b1a] p-4 rounded-full'>
							<picture className=''>
								{/* <img
									src='./profile.png'
									alt='Image Profile'
									className='rounded-full object-cover w-[100px] h-[100px]'
								/> */}

								<IoPerson
									size='100'
									className='text-neutral-100'
								/>
							</picture>
						</div>

						<div className='links-profile-bio'>
							<p className='text-neutral-100 text-3xl text-center font-semibold mb-3'>
								{dataBio.name.length <= 0 ? 'Nombre identificador' : dataBio.name}
							</p>

							<p className='text-neutral-400 text-base text-center'>
								{dataBio.description.length <= 0 ? 'Tu descripción' : dataBio.description}
							</p>
						</div>

						<div className='card-network-social flex flex-col w-full shadow-md'>
							{dataLinks.map((dataLink) =>
								dataLink.url ? (
									<div
										key={dataLink.id}
										className='mt-5 flex-1 text-center bg-neutral-800 rounded-md cursor-pointer'>
										<Link
											target='_blank'
											href={dataLink.url}
											className='block flex-1 text-neutral-100 capitalize p-4'>
											{dataLink.platform}
										</Link>
									</div>
								) : null
							)}
						</div>
					</div>
				</section>

				<section className='flex-auto lg:w-3/5 p-4'>
					<div className='mb-6'>
						<h2 className='text-neutral-100 text-lg text-center font-medium mb-6'>
							Personaliza tu biografía de enlaces
						</h2>

						<div>
							<div className='bg-[#1a1b1a] mb-5'>
								<label
									className='block text-neutral-300 mb-2 text-sm'
									htmlFor='image'>
									Agrega un perfil de imagen:
								</label>

								<button
									className='w-full text-neutral-100 bg-[#101010] p-3 rounded border border-neutral-500 active:bg-neutral-900 active:scale-[.99]'
									onClick={() => fileInputRef.current?.click()}>
									<IoImageOutline
										size='20'
										className='inline'
									/>
									<span className='ml-3'>Seleccionar imagen de perfil</span>
								</button>

								<input
									type='file'
									onChange={(e: any) => handleFileUploadImage(e.target.files)}
									className='hidden'
									ref={fileInputRef}
								/>
							</div>

							<div className='bg-[#1a1b1a] mb-5'>
								<label
									className='block text-neutral-300 mb-2 text-sm'
									htmlFor='name-bio'>
									Escriba su nombre para su perfil:
								</label>

								<input
									id='name-bio'
									type='text'
									className='bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none'
									placeholder='Ejm: Richard Madison'
									value={dataBio.name}
									onChange={(e) => setDataBio({ ...dataBio, name: e.target.value })}
								/>
							</div>

							<div className='bg-[#1a1b1a] mb-5'>
								<label
									className='block text-neutral-300 mb-2 text-sm'
									htmlFor='name-desc'>
									Escriba su descripción para su perfil:
								</label>

								<input
									id='name-desc'
									type='text'
									className='bg-neutral-800 text-neutral-100 p-2 w-full rounded-lg border-2 border-neutral-500 hover:border-neutral-600 focus-visible:border-neutral-400 outline-none'
									placeholder='Ejm: Sigueme en mis...'
									value={dataBio.description}
									onChange={(e) => setDataBio({ ...dataBio, description: e.target.value })}
								/>
							</div>
						</div>
					</div>

					<button
						onClick={() => handleAddLinks()}
						className='flex items-center  justify-center w-full bg-[#101010] text-neutral-100 p-3 border border-neutral-600 rounded-md active:bg-neutral-900 active:scale-[.99]'>
						<IoAddCircleOutline size='20' />
						<span className='ml-3'>Agregar nuevo enlace</span>
					</button>

					<Reorder.Group
						axis='y'
						values={dataLinks}
						onReorder={setDataLinks}>
						{dataLinks.map((item) => (
							<Reorder.Item
								key={item.id}
								value={item}>
								<div className='bg-[#2D2C2D] mt-7 py-4 px-5 rounded-md'>
									<header className='flex items-center text-neutral-100 '>
										<IoReorderTwo
											size='30'
											className='cursor-pointer'
										/>

										<div className='flex-1' />

										<button
											className='bg-rose-600 py-2 px-3 rounded-md active:scale-95'
											onClick={() => handleRemoveLink(item.id)}>
											Remove
										</button>
									</header>

									<div className='text-neutral-100 mt-4'>
										<label className='block mb-2 text-sm'>Plataforma</label>
										<select
											autoComplete='off'
											name='platform'
											className='w-full p-2 rounded-sm bg-neutral-800 cursor-pointer outline-none'
											value={item.platform}
											onChange={(e) => handleEditPlatform(e.target.value, item.id)}>
											<option value='github'>Github</option>
											<option value='facebook'>Facebook</option>
											<option value='twitter'>Twitter</option>
											<option value='tiktok'>Tiktok</option>
											<option value='instagram'>Instagram</option>
											<option value='youtube'>Youtube</option>
										</select>
									</div>

									<div className='text-neutral-100 mt-4 relative'>
										<label className='block mb-2 text-sm'>Enlace</label>
										<input
											autoComplete='off'
											name='link'
											type='text'
											placeholder='Escribe o pega tu enlace aquí'
											className='w-full bg-neutral-800 py-3 px-2 outline-none pl-10'
											value={item.url}
											onChange={(e) => handleEditLink(e.target.value, item.id)}
										/>
										<IoLink className='absolute top-11 ml-3' />
									</div>
								</div>
							</Reorder.Item>
						))}
					</Reorder.Group>
				</section>
			</div>
		</div>
	);
}
