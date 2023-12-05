import { TabsRedSocial } from './components';

export default async function Home() {
	return (
		<div className='metric-social'>
			<h2 className='text-neutral-100 text-xl mt-8 mb-5'>
				¡Buenos dias!
				<span className='font-semibold'> Rafael Alvarez </span>
				<span className='text-3xl'>👋</span>
				<p className='text-neutral-500'>Tu datos de tus red social esta aquí</p>
			</h2>

			<TabsRedSocial />
		</div>
	);
}
