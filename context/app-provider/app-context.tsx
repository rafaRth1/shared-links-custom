"use client";

import { createContext } from "react";
import { AppContextType } from "./app-context-type";

export const AppContext = createContext<AppContextType>({} as AppContextType);
