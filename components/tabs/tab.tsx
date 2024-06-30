import { StateTabsProps } from "./types";
import useTab from "./use-tab";

interface TabProps {
  title: string;
  item?: {
    key: string;
    rendered: React.ReactNode;
  };
  children?: React.ReactNode[] | React.ReactNode;
  varients?: string;
  setSelectedKey?: React.Dispatch<React.SetStateAction<string>>;
  state?: StateTabsProps;
}

export default function Tab(props: TabProps) {
  const { item, title, varients, setSelectedKey, state } = props;

  // const {} = useTab({ key: item?.key, state });

  const handleSelectedKey = (key?: string) => setSelectedKey!(key!);

  return (
    <button
      onClick={() => handleSelectedKey(item?.key)}
      className={`rounded ${varients} ${
        state?.selectedKey === item?.key ? "bg-neutral-800" : ""
      }`}
    >
      {title}
    </button>
  );
}
