"use client";

import { useState, ReactElement, memo, useEffect } from "react";
import { PopoverContext, Position } from "./PopoverContext";

interface PropsModal {
  children: ReactElement | ReactElement[];
  preferredPosition: Position;
}

const defaultRect = {
  left: 0,
  top: 0,
  width: 0,
  height: 0,
};

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
}

export const PopoverCustom = ({
  children,
  preferredPosition = "bottom-center",
}: PropsModal) => {
  const [isMounted, setIsMounted] = useState(false);
  const [triggerRect, setTriggerRect] = useState(defaultRect);
  const shouldRenderChild = useDelayUnmount(isMounted, 100);

  const contextValues = {
    isMounted,
    setIsMounted,
    triggerRect,
    setTriggerRect,
    preferredPosition,
    shouldRenderChild,
  };

  return (
    <PopoverContext.Provider value={contextValues}>
      {children}
    </PopoverContext.Provider>
  );
};
