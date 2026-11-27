import { network } from "@/data/network";
import { InfoButton } from "@/components/network-buttons";

export function Footer() {
  return (
    <footer className="shell">
      <div className="footer-main">
        <a className="brand" href="#home">
          <svg className="brandmark" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M35 13A16 16 0 1 0 40 27"></path>
            <path d="M35 4v12H23"></path>
          </svg>
          <span>
            exeter circular<small>BUSINESS NETWORK</small>
          </span>
        </a>
        <p>
          A nonprofit student initiative.
          <br />
          Local business. Less waste. More possibility.
        </p>
        <div>
          <a href="#how-it-works">How it works</a>
          <a href="#membership">Membership</a>
          <a href={`mailto:${network.contactEmail}`}>{network.contactEmail}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Exeter Circular Business Network</span>
        <span>Independent · Student-led · Exeter, Devon</span>
        <InfoButton id="privacy-link" info="privacy">
          Privacy &amp; participation
        </InfoButton>
      </div>
    </footer>
  );
}
