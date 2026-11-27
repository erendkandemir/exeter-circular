import { network } from "@/data/network";

export function Impact() {
  return (
    <section className="impact-section">
      <div className="shell section">
        <div className="impact-top">
          <div>
            <p className="eyebrow">SUSTAINABILITY IN PRACTICE</p>
            <h2>
              Local action. <br /> Measurable progress.
            </h2>
          </div>
          <p>
            We want to understand how resource sharing can support more
            sustainable business practices. As the network grows, we’ll report
            completed exchanges, resources reused and the commercial value of
            local collaboration.
          </p>
        </div>
        <div className="impact-grid">
          <article>
            <span className="impact-icon">↻</span>
            <h3>Resource efficiency</h3>
            <p>
              Record the items and materials reused after handover, helping us
              understand how businesses keep resources in circulation.
            </p>
          </article>
          <article>
            <span className="impact-icon">£</span>
            <h3>The business case for sustainability</h3>
            <p>
              Track reported purchases avoided alongside collection costs and
              effort, exploring when sustainable choices also make commercial
              sense.
            </p>
          </article>
          <article>
            <span className="impact-icon">◎</span>
            <h3>Sustainable habits that last</h3>
            <p>
              Look for repeat exchanges and lasting relationships that make
              resource reuse part of everyday business decisions.
            </p>
          </article>
        </div>
        <p id="impact-status" className="impact-status">
          {network.impact.confirmedExchanges > 0
            ? `${network.impact.confirmedExchanges} completed ${network.impact.confirmedExchanges === 1 ? "exchange" : "exchanges"} confirmed by the network.`
            : "At the founding stage: completed exchange results will be published as they are confirmed."}
        </p>
      </div>
    </section>
  );
}
