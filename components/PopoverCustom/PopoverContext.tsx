import { createContext } from "react";

export type Position =
  | "bottom-center"
  | "left"
  | "right"
  | "top-center"
  | "static";
export type Rect = Pick<DOMRect, "left" | "top" | "width" | "height">;

export interface PopoverContextProps {
  isMounted: boolean;
  setIsMounted: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRect: Rect;
  setTriggerRect: React.Dispatch<React.SetStateAction<Rect>>;
  preferredPosition: Position;
  shouldRenderChild: boolean;
}

export const PopoverContext = createContext<PopoverContextProps>(
  {} as PopoverContextProps
);
