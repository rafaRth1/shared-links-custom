"use client";

import { createPortal } from "react-dom";
import { useState, useEffect, useContext } from "react";
import { PopoverContext } from "./PopoverContext";

interface Props {
  children: React.ReactElement;
}

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: any;

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

export function Body({ children }: Props) {
  const { isMounted, triggerRect } = useContext(PopoverContext);
  const shouldRenderChild = useDelayUnmount(isMounted, 100);
  const mountedStyle = { animation: "inAnimation 100ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 110ms ease-in" };

  if (typeof window === "object") {
    return createPortal(
      shouldRenderChild && (
        <div
          style={{
            ...(isMounted ? mountedStyle : unmountedStyle),
            position: "absolute",
            top: `${triggerRect.top + (triggerRect.height + 10)}px`,
            left: `${triggerRect.left - 2 * triggerRect.width}px`,
            transformOrigin: `100% 0% 0px`,
          }}
        >
          {children}
        </div>
      ),
      document.body
    );
  }

  return null;
}
