"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { NetworkDialog } from "@/lib/types";
import { EnquiryDialog } from "./EnquiryDialog";
import { InformationDialog } from "./InformationDialog";

interface NetworkContextValue {
  openDialog: (dialog: Exclude<NetworkDialog, null>) => void;
}

const NetworkContext = createContext<NetworkContextValue | null>(null);

export function useNetwork(): NetworkContextValue {
  const context = useContext(NetworkContext);
  if (!context) throw new Error("Network controls require NetworkProvider.");
  return context;
}

export function NetworkProvider({ children }: { children: ReactNode }) {
  const [dialog, setDialog] = useState<NetworkDialog>(null);
  const closeDialog = () => setDialog(null);

  return (
    <NetworkContext.Provider value={{ openDialog: setDialog }}>
      {children}
      <EnquiryDialog
        open={dialog === "membership" || dialog === "question"}
        kind={dialog === "question" ? "question" : "membership"}
        onClose={closeDialog}
      />
      <InformationDialog
        kind={dialog === "privacy" || dialog === "recognition" ? dialog : null}
        onClose={closeDialog}
      />
    </NetworkContext.Provider>
  );
}
