"use client";

import type { ButtonHTMLAttributes } from "react";
import type { EnquiryKind, InformationKind } from "@/lib/types";
import { useNetwork } from "./NetworkProvider";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export function EnquiryButton({
  kind = "membership",
  children,
  ...props
}: ButtonProps & { kind?: EnquiryKind }) {
  const { openDialog } = useNetwork();
  return (
    <button {...props} type="button" onClick={() => openDialog(kind)}>
      {children}
    </button>
  );
}

export function InfoButton({
  info,
  children,
  ...props
}: ButtonProps & { info: InformationKind }) {
  const { openDialog } = useNetwork();
  return (
    <button {...props} type="button" onClick={() => openDialog(info)}>
      {children}
    </button>
  );
}
