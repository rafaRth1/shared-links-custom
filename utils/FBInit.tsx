'use client';

import { useEffect } from 'react';
import { initFacebookSdk, getFacebookLoginStatus, fbLogin } from './FacebookSDK';

export default function FBInit() {
	useEffect(() => {
		console.log('Started use effect');
		initFacebookSdk().then(() => {
			getFacebookLoginStatus().then((response) => {
				if (response == null) {
					console.log('No login status for the person');
				} else {
					console.log(response);
				}
			});
		});
	}, []);
}
