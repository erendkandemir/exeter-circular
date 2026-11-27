"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  closeLabel: string;
  children: ReactNode;
}

/** Native dialog supplies focus containment, Escape handling and focus restoration. */
export function Dialog({
  open,
  onClose,
  labelledBy,
  closeLabel,
  children,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      document.body.classList.add("modal-open");
    } else if (dialog.open) {
      dialog.close();
    }
    return () => {
      if (open) document.body.classList.remove("modal-open");
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          onClose();
      }}
    >
      <button
        type="button"
        className="close-dialog"
        aria-label={closeLabel}
        onClick={onClose}
      >
        ×
      </button>
      {children}
    </dialog>
  );
}
