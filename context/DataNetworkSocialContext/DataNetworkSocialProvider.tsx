'use client';

import { useState, useMemo } from 'react';
import { DataFacebook, DataNetworkSocialContext } from './DataNetworkSocialContext';

export function DataNetworkSocialProvider({ children }: { children: React.ReactNode }) {
	const [dataFacebook, setDataFacebook] = useState({} as DataFacebook);

	const dataNetworkSocialValues = useMemo(
		() => ({
			dataFacebook,
			setDataFacebook,
		}),
		[dataFacebook]
	);

	return (
		<DataNetworkSocialContext.Provider value={dataNetworkSocialValues}>
			{children}
		</DataNetworkSocialContext.Provider>
	);
}

export default DataNetworkSocialProvider;
