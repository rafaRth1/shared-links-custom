import { Position, Rect } from "@/components/PopoverCustom/PopoverContext";

export const getCoords = (
  triggerRect: Rect,
  modalRect: Rect,
  position: Position
):
  | {
      top: number;
      left: number;
    }
  | undefined => {
  let top = 0;
  let left = 0;

  switch (position) {
    case "bottom-center":
      top = triggerRect.top + triggerRect.height + 10;
      left = Math.max(
        triggerRect.left + triggerRect.width / 2 - modalRect.width / 2,
        10
      );

      if (top + modalRect.height > window.innerHeight - 10) {
        top = triggerRect.top - 10 - modalRect.height;
      }
      break;

    case "left":
      top = Math.max(
        triggerRect.top + triggerRect.height / 2 - modalRect.height / 2,
        10
      );
      left = triggerRect.left - modalRect.width - 10;
      break;

    case "right":
      top = Math.max(
        triggerRect.top + triggerRect.height / 2 - modalRect.height / 2,
        10
      );
      left = triggerRect.left + triggerRect.width + 10;
      break;

    case "top-center":
      top = triggerRect.top - modalRect.height - 10;
      left = Math.max(
        triggerRect.left + triggerRect.width / 2 - modalRect.width / 2,
        10
      );
      break;

    case "static":
      return;
  }

  return {
    top,
    left,
  };
};
