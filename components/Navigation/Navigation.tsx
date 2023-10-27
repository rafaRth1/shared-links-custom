import Link from 'next/link';
import Logo from '../Logo/Logo';

const links = [
	{
		label: 'Metrics Social',
		route: '/metrics',
	},

	{
		label: 'Links Profile',
		route: '/links-profile',
	},

	{
		label: 'Settings',
		route: '/settings',
	},
];

export default function Navigation() {
	return (
		<div className='w-[300px] h-screen p-5 bg-[#2D2C2D] flex flex-col justify-between items-start'>
			<Logo />

			<ul className='mt-20 flex flex-col gap-4 h-full w-full'>
				{links.map((link) => (
					<li key={link.route}>
						<Link
							href='#'
							className='text-neutral-100 text-lg cursor-pointer ml-5'>
							{link.label}
						</Link>
					</li>
				))}
			</ul>

			<button className='text-neutral-100'>Logout</button>
		</div>
	);
}
