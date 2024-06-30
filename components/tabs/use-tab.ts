import { useState } from "react";
import { StateTabsProps } from "./types";

interface useTabProps {
  key?: string;
  state?: StateTabsProps;
}

export default function useTab({ key, state }: useTabProps) {
  console.log(state?.selectedKey);

  return {};
}
