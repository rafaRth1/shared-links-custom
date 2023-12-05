import { useContext } from 'react';
import { TabsContext, TabsContextProps } from '@/context/TabsContext/TabsContext';

export default function useTabContext() {
	return useContext<TabsContextProps>(TabsContext);
}
