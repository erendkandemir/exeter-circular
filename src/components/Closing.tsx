import { EnquiryButton } from "@/components/network-buttons";

export function Closing() {
  return (
    <section className="closing shell">
      <div>
        <p className="eyebrow">LET’S KEEP EXETER CIRCULATING</p>
        <h2>
          Something spare?
          <br />
          Start a connection.
        </h2>
        <p>Join a local network making more of what we already have.</p>
      </div>
      <div className="closing-actions">
        <EnquiryButton className="button">
          Enquire about membership
        </EnquiryButton>
        <EnquiryButton className="textlink" kind="question">
          Ask us a question
        </EnquiryButton>
      </div>
      <span className="closing-loop" aria-hidden="true">
        ↻
      </span>
    </section>
  );
}
