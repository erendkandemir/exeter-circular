import { network } from "@/data/network";
import { EnquiryButton, InfoButton } from "@/components/network-buttons";

export function Membership() {
  return (
    <section className="membership-section" id="membership">
      <div className="shell section membership-grid">
        <div>
          <p className="eyebrow">FREE MEMBERSHIP. SHARED PURPOSE.</p>
          <h2>
            Be part of Exeter’s
            <br />
            next circular chapter.
          </h2>
          <p className="lead">
            A local network your business can use, contribute to and be proud to
            join.
          </p>
          <div className="benefits">
            <div>
              <span>✓</span>
              <p>
                <strong>A practical exchange community</strong>
                <br />
                Find useful resources and offer surplus through our member
                communication channels.
              </p>
            </div>
            <div>
              <span>✓</span>
              <p>
                <strong>A place in our member directory</strong>
                <br />A business profile and logo, published with your
                permission.
              </p>
            </div>
            <div>
              <span>✓</span>
              <p>
                <strong>Recognition on your doorstep</strong>
                <br />A dated membership certificate and window sticker to show
                you’re part of the network.
              </p>
            </div>
            <div>
              <span>✓</span>
              <p>
                <strong>Stories worth sharing</strong>
                <br />
                Opportunities to feature your confirmed exchanges and local
                collaborations.
              </p>
            </div>
          </div>
          <EnquiryButton className="button">
            Enquire about founding membership
          </EnquiryButton>
          <p className="secondary">
            Completely free membership, with no joining fees or ongoing
            subscriptions. Now and always.
          </p>
        </div>
        <div className="certificate-scene">
          <div
            className="certificate"
            aria-label="Illustrative founding member certificate"
          >
            <div className="cert-top">
              <span>EXETER CIRCULAR</span>
              <span>{network.membershipYear}</span>
            </div>
            <div className="cert-symbol">↻</div>
            <div className="eyebrow">BUSINESS NETWORK</div>
            <h3>
              Founding
              <br />
              Member
            </h3>
            <div className="cert-business">Your business name</div>
            <p>
              We are part of the
              <br />
              <strong>
                Exeter Circular Business Network
                <br />
                for Sustainability.
              </strong>
            </p>
            <div className="cert-rule"></div>
            <div className="cert-bottom">
              <span>
                NONPROFIT
                <br />
                STUDENT INITIATIVE
              </span>
              <span>
                LOCAL BUSINESS
                <br />
                SHARED PURPOSE
              </span>
            </div>
          </div>
          <div className="certificate-label">
            Membership certificate · Design preview
          </div>
          <InfoButton
            className="textlink"
            id="certificate-info"
            info="recognition"
          >
            About member recognition
          </InfoButton>
        </div>
      </div>
    </section>
  );
}
