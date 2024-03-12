import { Position, Rect } from "@/components/PopoverCustom/PopoverContext";

export const getCoords = (
  triggerRect: Rect,
  modalRect: Rect,
  position: Position
):
  | {
      top: number;
      left: number;
      transform: string;
    }
  | undefined => {
  let top = 0;
  let left = 0;
  let transform = "";

  /** Will multiply by 10 because the scale animation is 0.1 */
  const widthBody = modalRect.width * 10;
  const heightBody = modalRect.height * 10;

  switch (position) {
    case "top":
      top = triggerRect.top - heightBody - 10;
      left = triggerRect.left + triggerRect.width / 2 - widthBody / 2;
      transform = "50% 100% 0px";

      break;

    case "top-start":
      top = triggerRect.top - heightBody - 10;
      left = triggerRect.left;
      transform = "0% 100% 0px";
      break;

    case "top-end":
      top = triggerRect.top - heightBody - 10;
      left = triggerRect.left - widthBody + triggerRect.width;
      transform = "100% 100% 0px";
      break;

    case "bottom":
      top = triggerRect.bottom + 10;
      left = triggerRect.left + triggerRect.width / 2 - widthBody / 2;
      transform = "50% 0% 0px";

      if (left < 0) {
        left = 0;
      }

      // if (top + modalRect.height > window.innerHeight - 10) {
      // 	top = triggerRect.top - 10 - modalRect.height;
      // }

      break;

    case "bottom-start":
      top = triggerRect.bottom + 10;
      left = triggerRect.left;
      transform = "0% 0% 0px";
      break;

    case "bottom-end":
      top = triggerRect.bottom + 10;
      left = triggerRect.left - widthBody + triggerRect.width;
      transform = "100% 0% 0px";
      break;

    case "left":
      top = triggerRect.bottom - (heightBody + triggerRect.height) / 2;
      left = triggerRect.left - widthBody - 10;
      transform = "100% 50% 0px";
      break;

    case "left-start":
      top = triggerRect.bottom - triggerRect.height;
      left = triggerRect.left - widthBody - 10;
      transform = "100% 0% 0px";
      break;

    case "left-end":
      top = triggerRect.bottom - heightBody;
      left = triggerRect.left - widthBody - 10;
      transform = "100% 100% 0px";
      break;

    case "right":
      top = triggerRect.bottom - (heightBody + triggerRect.height) / 2;
      left = triggerRect.left + triggerRect.width + 10;
      transform = " 0% 50% 0px";
      break;

    case "right-start":
      top = triggerRect.bottom - triggerRect.height;
      left = triggerRect.left + triggerRect.width + 10;
      transform = "0% 0% 0px";
      break;

    case "right-end":
      top = triggerRect.bottom - heightBody;
      left = triggerRect.left + triggerRect.width + 10;
      transform = "0% 100% 0px";
      break;

    case "static":
      return;
  }

  return {
    top,
    left,
    transform,
  };
};
