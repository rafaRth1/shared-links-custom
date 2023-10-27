import Link from 'next/link';

export default function Logo() {
	return (
		<div className='logo-main'>
			<Link
				href='#'
				className='text-neutral-100 text-2xl'>
				Shared Links Custom
			</Link>
		</div>
	);
}
