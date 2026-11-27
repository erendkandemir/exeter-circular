import { EnquiryButton } from "@/components/network-buttons";

export function Hero() {
  return (
    <section className="hero shell">
      <div className="herocopy">
        <span className="eyebrow">
          <span className="mini-loop">↻</span> A NONPROFIT STUDENT INITIATIVE
        </span>
        <h1>
          Local business.
          <br />
          Less waste.
          <br />
          <span>More possibility.</span>
        </h1>
        <p>
          Connecting Exeter businesses to give surplus materials and equipment a
          second life. Good things happen when we make more of what’s already
          here.
        </p>
        <p className="free-promise">Completely free. Now and always.</p>
        <div className="actions">
          <EnquiryButton className="button">
            Enquire about membership
          </EnquiryButton>
          <a className="textlink" href="#how-it-works">
            See how it works
          </a>
        </div>
        <div className="hero-meta">
          <span>No membership fees</span>
          <span>Member communication channels</span>
          <span>Rooted in Exeter</span>
        </div>
      </div>
      <div className="heroart">
        <div className="art-top">
          <span>THE FUTURE IS CIRCULAR</span>
          <span>EXETER, DEVON</span>
        </div>
        <svg
          viewBox="0 0 560 470"
          className="scene"
          role="img"
          aria-label="Illustration of independent shops connected by a circular reuse loop"
        >
          <defs>
            <pattern
              id="grid"
              width="26"
              height="26"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M26 0H0V26"
                fill="none"
                stroke="#dce2c9"
                strokeWidth=".7"
              ></path>
            </pattern>
          </defs>
          <rect width="560" height="470" fill="url(#grid)"></rect>
          <ellipse cx="280" cy="336" rx="210" ry="75" fill="#dce2c9"></ellipse>
          <path
            d="M144 350C60 297 117 182 228 172M416 206c100 57 34 168-73 174"
            fill="none"
            stroke="#bbd255"
            strokeWidth="29"
          ></path>
          <path
            d="M221 146l38 26-38 27M350 353l-34 26 38 25"
            fill="none"
            stroke="#bbd255"
            strokeWidth="12"
            strokeLinecap="square"
          ></path>
          <g transform="translate(70 161)">
            <path d="M0 37l101-40 84 37-101 40z" fill="#ffffff"></path>
            <path d="M0 37v130l84 42V74z" fill="#d7b08d"></path>
            <path d="M84 74l101-40v130l-101 45z" fill="#f7e3c8"></path>
            <path d="M91 89l86-34v24L91 114z" fill="#1c5545"></path>
            <path
              d="M92 98l12-5v22l-12 5M116 88l12-5v22l-12 5M140 78l12-5v22l-12 5M164 68l12-5v22l-12 5"
              fill="#f8f7ef"
            ></path>
            <path
              d="M101 131l32-13v67l-32 13M144 114l30-12v45l-30 13"
              fill="#487a68"
            ></path>
            <path d="M14 68l52 26v58l-52-26z" fill="#855d43"></path>
            <path d="M18 76l44 23v23l-44-22z" fill="#e8bd91"></path>
          </g>
          <g transform="translate(303 151)">
            <path d="M0 47l92-37 91 44-92 37z" fill="#faf8f1"></path>
            <path d="M0 47v133l91 44V91z" fill="#94b5a3"></path>
            <path d="M91 91l92-37v133l-92 37z" fill="#d1deca"></path>
            <path d="M101 107l73-30v24l-73 30z" fill="#d47650"></path>
            <path
              d="M105 111l10-4v23l-10 4M127 102l10-4v23l-10 4M149 93l10-4v23l-10 4"
              fill="#fff3da"
            ></path>
            <path
              d="M109 148l23-9v65l-23 10M143 134l27-11v39l-27 11"
              fill="#245744"
            ></path>
            <path d="M16 78l56 27v51l-56-27z" fill="#426f5c"></path>
            <path d="M22 87l43 21v26l-43-21z" fill="#b1c9b7"></path>
          </g>
          <g transform="translate(242 296)">
            <path d="M0 18l34-16 38 18-35 17z" fill="#d5a570"></path>
            <path d="M0 18v39l37 19V37z" fill="#b47c49"></path>
            <path d="M37 37l35-17v39L37 76z" fill="#e1b786"></path>
            <path d="M15 11l38 18v13l-15 7V35L0 18" fill="#f5d9ac"></path>
          </g>
          <g fill="none" stroke="#355e46" strokeWidth="4">
            <path d="M59 351v-32m0 15c-26-1-22-23-22-23 22-2 22 23 22 23Zm0-6c0-20 21-24 21-24 6 18-21 24-21 24Z"></path>
            <path d="M497 294v-30m0 14c-22-2-22-22-22-22 23-1 22 22 22 22Zm0-4c1-20 19-23 19-23 7 17-19 23-19 23Z"></path>
          </g>
        </svg>
        <div className="art-sticker">
          <span className="sticker-icon">↻</span>
          <div>
            Keep it local.
            <br />
            <strong>Keep it in use.</strong>
          </div>
        </div>
        <div className="art-bottom">
          <span>One business’s surplus.</span>
          <span>Another’s next opportunity.</span>
        </div>
      </div>
    </section>
  );
}
