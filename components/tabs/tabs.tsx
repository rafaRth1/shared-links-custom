import React, { useMemo, useState } from "react";
import Tab from "./tab";
import useTabs from "./use-tabs";
import TabPanel from "./tab-panel";

interface Props {
  children: React.ReactElement[];
}

export default function Tabs({ children }: Props) {
  const [selectedKey, setSelectedKey] = useState(children[0].key);
  const { state } = useTabs({ children, selectedKey });

  const tabProps = {
    state,
  };

  return (
    <div className="tabs">
      <div className="flex gap-2 bg-neutral-900 rounded-xl p-1 h-12 max-w-max text-sm">
        {[...state.collection].map((item) => {
          return (
            <Tab
              key={item.key}
              item={item}
              {...tabProps}
              {...item.props}
              setSelectedKey={setSelectedKey}
            />
          );
        })}
      </div>
      {[...state.collection].map((item) => (
        <TabPanel key={item.key} tabKey={item.key} state={state} />
      ))}
    </div>
  );
}
