import {
  useState,
  useContext,
  ReactElement,
  useLayoutEffect,
  useEffect,
} from "react";
import { PopoverContext } from "./PopoverContext";
import { PopoverInternal } from "./PopoverInternal";
import { createPortal } from "react-dom";

interface Props {
  children: ReactElement | ReactElement[];
}

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useLayoutEffect(() => {
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

function Body({ children }: Props) {
  const { isMounted } = useContext(PopoverContext);
  const [mounted, setMounted] = useState(false);
  const shouldRenderChild = useDelayUnmount(isMounted, 100);

  useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        shouldRenderChild && (
          <div tabIndex={-1}>
            <PopoverInternal>{children}</PopoverInternal>
          </div>
        ),
        document.body
      )
    : null;
}

Body.displayName = "PopoverCustom.Body";

export default Body;
