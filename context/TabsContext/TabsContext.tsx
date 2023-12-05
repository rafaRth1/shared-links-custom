import { createContext } from 'react';

export type DispatchStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface TabsContextProps {
	selectedNumber: number;
	setSelectedNumber: DispatchStateAction<number>;
	handlerMoveIndicator: () => void;
}

export const TabsContext = createContext<TabsContextProps>({} as TabsContextProps);
