"use client";

import { useState } from "react";
import { network } from "@/data/network";
import { safeWebsite } from "@/lib/enquiries";
import { EnquiryButton } from "./network-buttons";

export function MemberDirectory() {
  const [query, setQuery] = useState("");
  const members = network.members.filter(
    (member) => member.confirmed && member.publishPermission,
  );
  const filtered = members.filter((member) =>
    `${member.name} ${member.sector}`
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );
  const logos = members.filter(
    (member) => member.logo && member.logoPermission,
  );

  return (
    <section className="shell section" id="members">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE PEOPLE BEHIND THE CIRCLE</p>
          <h2>
            Independent businesses.
            <br />
            One connected city.
          </h2>
        </div>
        <p>
          Our founding network is taking shape. Join early and help build a
          community that works for Exeter.
        </p>
      </div>
      {members.length > 0 ? (
        <>
          <p className="member-stats">
            {members.length} confirmed member{" "}
            {members.length === 1 ? "business" : "businesses"}
          </p>
          {logos.length > 0 && (
            <div
              className="logo-carousel"
              role="region"
              tabIndex={0}
              aria-label="Member business logos, scroll horizontally"
            >
              {logos.map((member) => (
                <img
                  key={member.id}
                  src={member.logo}
                  alt={member.name}
                  loading="lazy"
                />
              ))}
            </div>
          )}
          <div className="member-tools">
            <label htmlFor="member-search">Find a member business</label>
            <input
              id="member-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by business or sector"
            />
          </div>
          <div className="member-grid">
            {filtered.map((member) => {
              const website = safeWebsite(member.website);
              return (
                <article key={member.id} className="member-card">
                  {member.logo && member.logoPermission && (
                    <img
                      src={member.logo}
                      alt={`${member.name} logo`}
                      loading="lazy"
                    />
                  )}
                  <p className="eyebrow">
                    {member.membership || "Member business"}
                  </p>
                  <h3>{member.name}</h3>
                  <p>{member.sector}</p>
                  {member.description && <p>{member.description}</p>}
                  {website && (
                    <a
                      className="textlink"
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit business website
                    </a>
                  )}
                </article>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <p role="status">No member businesses match your search.</p>
          )}
        </>
      ) : (
        <div className="founding-callout">
          <div className="founding-graphic" aria-hidden="true">
            <span>
              YOUR
              <br />
              BUSINESS
              <br />
              HERE.
            </span>
            <div className="circle-mini">↻</div>
          </div>
          <div>
            <span className="eyebrow">FOUNDING MEMBERS WANTED</span>
            <h3>
              Your shop. Your resources.
              <br />
              Your place in the network.
            </h3>
            <p>
              We’re inviting Exeter businesses to help shape the first cohort.
              Confirmed members and their logos will appear here with their
              permission.
            </p>
            <EnquiryButton className="button light">
              Enquire about membership
            </EnquiryButton>
          </div>
        </div>
      )}
    </section>
  );
}
