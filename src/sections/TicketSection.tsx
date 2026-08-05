import { PrimaryCta, SecondaryCta } from "../components/Cta";
import { PAINT_CTA_URL } from "../constants";

export function TicketSection() {
  return (
    <section className="ticket" aria-label="来場特典">
      <div className="ticket__band">
        <div className="ticket__band-inner">
          <p className="ticket__band-item">
            <span className="ticket__band-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 11 6.5 6.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6Zm2.6-4 .9-1h7l.9 1 1 3H6.6l1-3ZM7.5 14.5A1.25 1.25 0 1 0 7.5 12a1.25 1.25 0 0 0 0 2.5Zm9 0A1.25 1.25 0 1 0 16.5 12a1.25 1.25 0 0 0 0 2.5Z" />
              </svg>
            </span>
            <span className="ticket__band-text">
              愛車の<strong>相談OK!</strong>
            </span>
          </p>
          <span className="ticket__band-divider" aria-hidden="true" />
          <p className="ticket__band-item">
            <span className="ticket__band-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.6 4 12 9l3.4-5h2.4l-3.6 5.2H17v1.6h-4v1.6h4V14h-4v3h-2v-3H7v-1.6h4v-1.6H7V9.2h2.8L6.2 4h2.4Z" />
              </svg>
            </span>
            <span className="ticket__band-text">
              下取り査定も<strong>OK!</strong>
            </span>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="ticket__present">
          <p className="ticket__present-text">
            <span className="ticket__present-badge">
              相談
              <br />
              予約で
            </span>
            <span className="ticket__present-copy">
              入場チケット
              <br />
              <strong>無料プレゼント！</strong>
            </span>
          </p>
          <img
            src="/images/ticket.png"
            alt="入場チケット無料"
            width={165}
            height={160}
            className="ticket__present-img"
          />
        </div>

        <div className="cta-pair ticket__cta">
          <PrimaryCta>相談予約</PrimaryCta>
          <SecondaryCta href={PAINT_CTA_URL}>塗装体験予約</SecondaryCta>
        </div>
      </div>
    </section>
  );
}
