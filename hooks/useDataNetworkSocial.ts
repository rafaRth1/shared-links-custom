import { useContext } from 'react';
import {
	DataNetworkSocialContext,
	DataNetworkSocialContextProps,
} from '@/context/DataNetworkSocialContext/DataNetworkSocialContext';

export default function useDataNetworkSocial() {
	return useContext<DataNetworkSocialContextProps>(DataNetworkSocialContext);
}
