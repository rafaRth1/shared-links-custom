import { StateTabsProps } from "./types";

interface Props {
  tabKey: string | null;
  state: StateTabsProps;
}

export default function TabPanel({ state, tabKey }: Props) {
  const [content] = state.collection.filter(
    (item) => item.key === state.selectedItem.key
  );

  const isSelected = tabKey === state.selectedItem.key;

  if (!content || !isSelected) {
    return null;
  }

  return <div className="tab-content">{content.props.children}</div>;
}
