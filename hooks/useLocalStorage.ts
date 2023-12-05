import { useEffect } from 'react';

export default function useLocalStorage() {
	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem('access_token')!);

		console.log(storage);
	}, []);
}
