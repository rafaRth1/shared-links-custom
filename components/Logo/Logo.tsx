import Link from 'next/link';

export default function Logo() {
	return (
		<div className='logo-main self-center'>
			<Link
				href='#'
				className='text-neutral-100 text-xl block'>
				Shared Links Custom
			</Link>
		</div>
	);
}
