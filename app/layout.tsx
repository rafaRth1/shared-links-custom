import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navigation from '@/components/Navigation/Navigation';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Shared Links Custom',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<div className='min-h-screen flex'>
					<Navigation />

					<main className='py-5 px-8'>{children}</main>

					<div id='fb-rootlayout'></div>

					<div
						className='fb-login-button'
						data-width='200'
						data-size=''
						data-button-type=''
						data-layout=''
						data-auto-logout-link='true'
						data-use-continue-as='true'></div>
				</div>
			</body>

			<script
				async
				defer
				crossOrigin='anonymous'
				src='https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0&appId=1783970742042452'
				nonce='Y2kVOzv0'></script>
		</html>
	);
}
