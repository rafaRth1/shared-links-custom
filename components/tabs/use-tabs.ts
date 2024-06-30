interface Props {
  children: React.ReactElement[];
  selectedKey: string | null;
}

export default function useTabs({ children, selectedKey }: Props) {
  const [selectedItem] = children.filter((item) => item.key === selectedKey);

  const state = {
    collection: children,
    selectedItem,
    selectedKey,
  };

  return {
    state,
  };
}
