"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { network } from "@/data/network";
import {
  makeEnquiryDraft,
  makeMailto,
  type EnquiryFields,
} from "@/lib/enquiries";
import type { EnquiryKind } from "@/lib/types";
import { Dialog } from "./Dialog";

interface EnquiryDialogProps {
  open: boolean;
  kind: EnquiryKind;
  onClose: () => void;
}

export function EnquiryDialog({ open, kind, onClose }: EnquiryDialogProps) {
  const [draft, setDraft] = useState("");
  const [subject, setSubject] = useState("");
  const [copyStatus, setCopyStatus] = useState("Copy message");
  const resultRef = useRef<HTMLDivElement>(null);
  const draftRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (draft)
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
  }, [draft]);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields: EnquiryFields = {
      business: String(data.get("business") ?? "").trim(),
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      sector: String(data.get("sector") ?? ""),
      interest: String(data.get("interest") ?? ""),
      message: String(data.get("message") ?? "").trim(),
    };
    setDraft(makeEnquiryDraft(fields));
    setSubject(
      `${kind === "question" ? "General" : "Membership"} enquiry: ${fields.business}`,
    );
    setCopyStatus("Copy message");
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Copied");
    } catch {
      draftRef.current?.focus();
      draftRef.current?.select();
      setCopyStatus("Select and copy above");
    }
  }

  function downloadDraft() {
    const url = URL.createObjectURL(
      new Blob([draft], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "exeter-circular-membership-enquiry.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      labelledBy="join-title"
      closeLabel="Close membership enquiry"
    >
      <div className="eyebrow">THE NEXT CONNECTION STARTS HERE</div>
      <h2 id="join-title">
        {kind === "question" ? "Get in touch." : "Join the circle."}
      </h2>
      <p className="dialog-intro">
        Tell us about your business and what you could offer or use. Membership
        is completely free, now and always. We’ll review your enquiry and share
        access to our member communication channels privately once your
        membership is confirmed.
      </p>
      <form
        id="join-form"
        onSubmit={prepareEnquiry}
        onChange={() => {
          if (draft) setDraft("");
        }}
      >
        <div className="form-row">
          <div>
            <label htmlFor="business">Business name</label>
            <input
              id="business"
              name="business"
              autoComplete="organization"
              maxLength={120}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              maxLength={100}
              required
            />
          </div>
        </div>
        <label htmlFor="email">Business email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={150}
          required
        />
        <div className="form-row">
          <div>
            <label htmlFor="sector">Business type</label>
            <select id="sector" name="sector">
              <option>Retail</option>
              <option>Hospitality</option>
              <option>Office &amp; professional services</option>
              <option>Maker &amp; creative business</option>
              <option>Other local business</option>
            </select>
          </div>
          <div>
            <label htmlFor="interest">I’d like to…</label>
            <select id="interest" name="interest">
              <option>Offer and find resources</option>
              <option>Offer surplus resources</option>
              <option>Find resources</option>
              <option>Support the initiative</option>
            </select>
          </div>
        </div>
        <label htmlFor="message">
          {kind === "question"
            ? "What would you like to ask us?"
            : "What could you offer, or what do you need?"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={2000}
          placeholder={
            kind === "question"
              ? "Your question"
              : "A short introduction, your location and any useful resources"
          }
        />
        <label className="check-label">
          <input type="checkbox" id="consent" required />
          <span>
            I’m happy to be contacted about this enquiry. Publishing my business
            details or logo would require separate permission.
          </span>
        </label>
        <button className="button" type="submit">
          Prepare email enquiry
        </button>
        <p className="secondary" id="enquiry-note">
          Prepare your message, then open it in your email app to review and
          send to {network.contactEmail}.
        </p>
      </form>
      <p className="secondary direct-email">
        Prefer to email directly?{" "}
        <a className="textlink" href={`mailto:${network.contactEmail}`}>
          {network.contactEmail}
        </a>
      </p>
      {draft && (
        <div ref={resultRef} className="enquiry-result" aria-live="polite">
          <h3>Your email draft is ready.</h3>
          <p>
            Review and send it from your email app. Nothing is submitted through
            this website.
          </p>
          <textarea
            ref={draftRef}
            readOnly
            value={draft}
            aria-label="Your enquiry draft"
          />
          <a
            className="button"
            href={makeMailto(network.contactEmail, subject, draft)}
          >
            Open email draft
          </a>
          <button type="button" className="button light" onClick={copyDraft}>
            {copyStatus}
          </button>
          <button type="button" className="textlink" onClick={downloadDraft}>
            Download draft
          </button>
        </div>
      )}
    </Dialog>
  );
}
