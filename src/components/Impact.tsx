import { network } from "@/data/network";

export function Impact() {
  return (
    <section className="impact-section">
      <div className="shell section">
        <div className="impact-top">
          <div>
            <p className="eyebrow">SMALL ACTIONS. VISIBLE RESULTS.</p>
            <h2>
              A network with
              <br />
              something to show.
            </h2>
          </div>
          <p>
            We’ll share the practical outcomes of the network as it grows, with
            a clear distinction between membership and completed activity.
          </p>
        </div>
        <div className="impact-grid">
          <article>
            <span className="impact-icon">↻</span>
            <h3>Resources reused</h3>
            <p>
              Items and materials that actually reach another business, recorded
              after handover.
            </p>
          </article>
          <article>
            <span className="impact-icon">£</span>
            <h3>Value for local businesses</h3>
            <p>
              Reported purchases avoided, alongside collection costs and the
              effort involved.
            </p>
          </article>
          <article>
            <span className="impact-icon">◎</span>
            <h3>Connections that continue</h3>
            <p>
              Repeat exchanges and relationships that make local reuse part of
              everyday business.
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
