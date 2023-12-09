import { PopoverCustom as PopoverPattern } from "./PopoverCustom";

import { Trigger } from "./Trigger";
import { Body } from "./Body";
import { PopoverContent } from "./PopoverContent";

export { Trigger } from "./Trigger";
export { Body } from "./Body";
export { PopoverContent } from "./PopoverContent";

export const PopoverCustom = Object.assign(PopoverPattern, {
  Trigger: Trigger,
  Body: Body,
  PopoverContent: PopoverContent,
});

export default PopoverCustom;
