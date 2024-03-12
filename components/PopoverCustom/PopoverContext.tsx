import { createContext } from "react";

export type Position =
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"
  | "top"
  | "top-start"
  | "top-end"
  | "static";

export type Rect = Pick<
  DOMRect,
  "left" | "top" | "right" | "width" | "height" | "bottom" | "x" | "y"
>;

export interface PopoverContextProps {
  isMounted: boolean;
  setIsMounted: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRect: Rect;
  setTriggerRect: React.Dispatch<React.SetStateAction<Rect>>;
  preferredPosition: Position;
  shouldRenderChild: boolean;
  widthEqualTrigger: boolean;
}

export const PopoverContext = createContext<PopoverContextProps>(
  {} as PopoverContextProps
);
