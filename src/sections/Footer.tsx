import { CTA_URL } from "../constants";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img
          src="/images/logo-footer.png"
          alt="PAPAMAMA CAR'S"
          width={450}
          height={100}
          className="footer__logo"
        />

        <div className="footer__shop">
          <h2 className="footer__shop-name">【ららぽーと堺店】</h2>
          <p className="footer__shop-info">
            大阪府堺市美原区黒山　22-1
            <br />
            営業時間：10:00〜21:00
            <br />
            ※営業時間・定休日はららぽーと堺に準じます。詳しくはホームページなどでご確認ください。
          </p>
        </div>

        <div className="footer__shop">
          <h2 className="footer__shop-name">【ららぽーと湘南平塚店】</h2>
          <p className="footer__shop-info">
            神奈川県平塚市天沼　10-1-15130
            <br />
            営業時間：10:00〜21:00
            <br />
            ※営業時間・定休日はららぽーと湘南平塚に準じます。詳しくはホームページなどでご確認ください。
          </p>
        </div>

        <div className="footer__event">
          <p className="footer__event-name">
            北陸オート
            <br />
            リミックス
            <br />
            2026 in金沢
          </p>
          <p className="footer__event-date">
            <span className="footer__event-year">2026</span>
            <span className="footer__event-days">
              <strong>29</strong>
              <span className="footer__event-day footer__event-day--sat">
                土
              </span>
              ・<strong>30</strong>
              <span className="footer__event-day footer__event-day--sun">
                日
              </span>
            </span>
          </p>
        </div>

        <p className="footer__follow">Follow Us</p>
        <ul className="footer__sns">
          <li>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer__sns-link"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3.6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="16.6" cy="7.4" r="1.1" fill="currentColor" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer__sns-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.4 1.5-1.4h1.4V5.5c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v2.3H8.5V14H11v7h2.5Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINE"
              className="footer__sns-link footer__sns-link--line"
            >
              <span aria-hidden="true">LINE</span>
            </a>
          </li>
        </ul>

        <p className="footer__copyright">
          COPYRIGHT(C) 2022 PapaMama CAR'S All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
