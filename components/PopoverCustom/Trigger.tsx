import {
  ReactElement,
  useContext,
  useRef,
  cloneElement,
  useMemo,
  Children,
} from "react";
import { PopoverContext } from "./PopoverContext";

interface Props {
  children: ReactElement;
}

export const Trigger = ({ children }: Props) => {
  const { isMounted, setIsMounted, setTriggerRect } =
    useContext(PopoverContext);
  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    const element = ref.current;

    if (element === null) {
      return;
    }

    const rect = element.getBoundingClientRect();

    setTriggerRect(rect);
    setIsMounted((isMounted) => !isMounted);
  };

  const child = useMemo(() => {
    return Children.only(children);
  }, [children]);

  const childrenTrigger = cloneElement(child, {
    onClick,
    ref,
  });

  return childrenTrigger;
};

// Trigger.displayName = 'Popover.Trigger';
