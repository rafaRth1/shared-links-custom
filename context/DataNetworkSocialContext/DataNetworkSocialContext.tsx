import { createContext } from 'react';
import { PageFields } from '@/interfaces';
import { PageInsights } from '@/interfaces/PageInsights';

export type DispatchStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface DataFacebook {
	data_page_fields: PageFields;
	data_impression: PageInsights[];
	data_interaction: PageInsights[];
	total_follows_time: PageInsights[];
}

export interface DataNetworkSocialContextProps {
	dataFacebook: DataFacebook;
	setDataFacebook: DispatchStateAction<DataFacebook>;
}

export const DataNetworkSocialContext = createContext<DataNetworkSocialContextProps>(
	{} as DataNetworkSocialContextProps
);
