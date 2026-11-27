import { EnquiryButton } from "@/components/network-buttons";

export function Closing() {
  return (
    <section className="closing shell">
      <div>
        <p className="eyebrow">LET’S BUILD A MORE SUSTAINABLE EXETER</p>
        <h2>
          Make sustainability <br /> part of your business.
        </h2>
        <p>
          Join a free local network turning shared resources into practical
          opportunities for more sustainable business.
        </p>
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
