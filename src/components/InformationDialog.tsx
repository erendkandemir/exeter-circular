"use client";

import type { InformationKind } from "@/lib/types";
import { Dialog } from "./Dialog";

export function InformationDialog({
  kind,
  onClose,
}: {
  kind: InformationKind | null;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={kind !== null}
      onClose={onClose}
      labelledBy="info-title"
      closeLabel="Close information"
    >
      <h2 id="info-title">
        {kind === "recognition"
          ? "Your place in the network."
          : "Privacy & participation"}
      </h2>
      <div id="info-body">
        {kind === "recognition" ? (
          <>
            <p>
              Founding membership recognises a business’s place in the first
              cohort of Exeter Circular – Sustainable Business Network.
            </p>
            <h3>What the certificate recognises</h3>
            <p>
              Confirmed membership, agreement to the network’s participation
              rules and a willingness to offer or find reusable resources.
              Certificates are dated and linked to a confirmed member business.
            </p>
            <h3>A shared commitment</h3>
            <p>
              Your certificate will say “Proud member of Exeter Circular –
              Sustainable Business Network”: a local community helping useful
              resources stay in circulation.
            </p>
            <p>
              The certificate shown on this website is a design preview. Actual
              certificates will be issued to confirmed members.
            </p>
          </>
        ) : (
          <>
            <p>
              Exeter Circular – Sustainable Business Network is an independent
              nonprofit student initiative. Participation is voluntary.
              Membership is completely free and will always be free.
            </p>
            <h3>Your enquiry</h3>
            <p>
              This website does not create an account or store your enquiry. The
              form prepares a draft for you to review and send using your email
              app. You can also copy or download your draft. Contact information
              is used to discuss the enquiry.
            </p>
            <h3>Business profiles and photographs</h3>
            <p>
              We will ask permission before publishing a business profile, logo,
              photograph or attributed exchange story. Membership enquiries do
              not automatically create a public listing.
            </p>
            <h3>Member communication channels</h3>
            <p>
              Access to member communication channels is shared privately after
              membership is confirmed. Other participants may see the contact
              details and posts you share. Review the channel information and
              privacy settings before joining, and use business contact details
              you are comfortable sharing.
            </p>
            <h3>Participation</h3>
            <p>
              Keep posts relevant to local reuse. Describe items honestly and
              use direct messages for arrangements. Businesses agree
              suitability, condition, any price and collection themselves. Do
              not post sensitive customer information or prohibited materials.
            </p>
            <h3>Website services</h3>
            <p>
              We do not use advertising or analytics trackers. Fonts are loaded
              from Google Fonts. The hosting platform and communication service
              providers apply their own service and privacy terms.
            </p>
          </>
        )}
      </div>
    </Dialog>
  );
}
