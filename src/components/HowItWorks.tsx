export function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="shell section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PRACTICAL STEPS TOWARDS SUSTAINABILITY</p>
            <h2>
              A network you can
              <br />
              use between customers.
            </h2>
          </div>
          <p>
            Our dedicated member communication channels connect local businesses
            and turn shared sustainability goals into practical resource
            exchanges.
          </p>
        </div>
        <div className="how-grid">
          <div className="steps">
            <article>
              <span className="step-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="9" cy="8" r="3"></circle>
                  <path d="M3 21v-3a6 6 0 0 1 12 0v3m4-13v8m-4-4h8"></path>
                </svg>
              </span>
              <div>
                <h3>Join the local network</h3>
                <p>
                  Tell us about your business. Once membership is confirmed,
                  we’ll introduce you to our member communication channels.
                </p>
              </div>
            </article>
            <article>
              <span className="step-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 4h18v13H8l-5 4V4Z"></path>
                  <path d="M7 9h10m-10 4h6"></path>
                </svg>
              </span>
              <div>
                <h3>Post what you have or need</h3>
                <p>
                  Share a photo, quantity, location and collection time. Browse
                  offers and requests from other members.
                </p>
              </div>
            </article>
            <article>
              <span className="step-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 7h15l-4-4M20 17H5l4 4M20 7v4M4 17v-4"></path>
                </svg>
              </span>
              <div>
                <h3>Arrange a local handover</h3>
                <p>
                  Agree suitability, any price and collection directly. Let us
                  know when it’s complete so we can record the result.
                </p>
              </div>
            </article>
          </div>
          <div className="chat-demo">
            <div className="chat-header">
              <div className="chat-avatar">↻</div>
              <div>
                <strong>Exeter Circular · Exchange</strong>
                <span>Illustrative member conversation</span>
              </div>
              <span className="chat-dots">•••</span>
            </div>
            <div className="chat-body">
              <div className="day">AN EXAMPLE EXCHANGE</div>
              <div className="bubble">
                <span className="sender">Independent retailer</span>
                <strong>OFFERED · Shipping boxes</strong>
                <p>
                  We have 30 clean cardboard boxes spare. City centre collection
                  this week. Useful to anyone?
                </p>
                <span className="chat-time">09:41</span>
              </div>
              <div className="bubble reply">
                <span className="sender">Local online seller</span>
                <p>
                  These would be perfect for our orders. I’ll message you to
                  arrange collection.
                </p>
                <span className="chat-time">09:46</span>
              </div>
              <div className="bubble">
                <span className="sender">Independent retailer</span>
                <p>Collected. Great to see them used again!</p>
                <span className="chat-time">14:15</span>
              </div>
              <div className="chat-caption">
                A small connection. A useful second life.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
