"use client";

import { useState } from "react";
import { EnquiryButton } from "./network-buttons";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="nav shell">
        <a className="brand" href="#home" aria-label="Exeter Circular home">
          <svg className="brandmark" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M35 13A16 16 0 1 0 40 27"></path>
            <path d="M35 4v12H23"></path>
          </svg>
          <span>
            exeter circular<small>BUSINESS NETWORK</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#members">Our network</a>
          <a href="#membership">Membership</a>
          <EnquiryButton className="button small">
            Membership enquiry
          </EnquiryButton>
        </nav>
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          Menu
        </button>
      </div>
      <div
        className="mobile-menu"
        hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <a href="#how-it-works">How it works</a>
        <a href="#members">Our network</a>
        <a href="#membership">Membership</a>
        <EnquiryButton className="button">Membership enquiry</EnquiryButton>
      </div>
    </header>
  );
}
