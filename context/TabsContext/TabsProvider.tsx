'use client';

import { useState, useMemo } from 'react';
import { TabsContext } from './TabsContext';

export default function TabsProvider({ children }: { children: React.ReactNode }) {
	const [selectedNumber, setSelectedNumber] = useState(1);

	const handlerMoveIndicator = () => {
		const tabSelected = document.querySelector<HTMLElement>(`.tab-select`);
		const tabsRedSocial = document.querySelector(`.tabs-red-social`);
		const tabRedSocialAll = document.querySelectorAll(`.tab-red-social`);

		tabRedSocialAll.forEach((tab, index) => {
			tab.addEventListener('click', () => {
				setSelectedNumber(index + 1);
				tabSelected!.style.width = `${tab.clientWidth}px`;
				tabSelected!.style.transform = `translate(calc(${tab.getBoundingClientRect().left}px - calc(${
					tabsRedSocial?.clientWidth
				}px + 2.75px)))`;
			});
		});
	};

	const tabsValues = useMemo(
		() => ({
			selectedNumber,
			setSelectedNumber,
			handlerMoveIndicator,
		}),
		[selectedNumber]
	);

	return <TabsContext.Provider value={tabsValues}>{children}</TabsContext.Provider>;
}
