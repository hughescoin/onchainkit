"use client";

import { type ReactNode } from "react";
import { base } from "wagmi/chains";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";

export function Providers(props: { children: ReactNode }) {
  return (
    <MiniKitProvider
      apiKey=""
      chain={base}
      projectName="MiniKit App"
      appLogoUrl=""
      config={{
        appearance: {
          mode: "auto",
          theme: "mini-app-theme",
          name: "MiniKit App",
          logo: "",
        },
      }}
    >
      {props.children}
    </MiniKitProvider>
  );
}
