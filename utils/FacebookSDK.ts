declare global {
	interface Window {
		fbAsyncInit: any;
		FB: any;
	}
}

let FB = window.fbAsyncInit;

export const initFacebookSdk = () => {
	return new Promise((resolve: any, reject) => {
		// Load the Facebook SDK asynchronously
		window.fbAsyncInit = () => {
			window.FB.init({
				appId: '1783970742042452',
				cookie: true,
				xfbml: true,
				version: 'v18.0',
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
