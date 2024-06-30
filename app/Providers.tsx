"use client";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return (
    <NextUIProvider>
      <SessionProvider>{children}</SessionProvider>
    </NextUIProvider>
  );
}

export default Providers;
