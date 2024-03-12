import PopoverPattern from "./PopoverCustom";

import Trigger from "./Trigger";
import Body from "./Body";
import PopoverContent from "./PopoverContent";

import "./PopoverCustom.css";

const PopoverCustom = Object.assign(PopoverPattern, {
  Trigger: Trigger,
  Body: Body,
  PopoverContent: PopoverContent,
});

export { PopoverCustom, Trigger, Body, PopoverContent };
