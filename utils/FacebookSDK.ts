export const initFacebookSdk = () => {
	return new Promise((resolve: any, reject) => {
		// Load the Facebook SDK asynchronously
		window.fbAsyncInit = () => {
			window.FB.init({
				appId: '1268250524120464',
				cookie: true,
				xfbml: true,
				version: 'v16.0',
			});
			// Resolve the promise when the SDK is loaded
			resolve();
		};
	});
};

export const getFacebookLoginStatus = () => {
	return new Promise((resolve: any, reject) => {
		window.FB.getLoginStatus((response: any) => {
			resolve(response);
		});
	});
};

export const fbLogin = () => {
	return new Promise((resolve: any, reject) => {
		window.FB.login((response: any) => {
			resolve(response);
		});
	});
};
