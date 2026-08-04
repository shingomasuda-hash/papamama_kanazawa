import type { ReactNode } from "react";
import { SectionTitle } from "../components/SectionTitle";

function AboutItem({
  icon,
  heading,
  children,
}: {
  icon: ReactNode;
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="about__item">
      <h3 className="about__heading">
        <span className="about__icon" aria-hidden="true">
          {icon}
        </span>
        {heading}
      </h3>
      <div className="about__body">{children}</div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="about">
      <div className="container">
        <SectionTitle en="ABOUT" ja="イベント概要" />

        <AboutItem
          heading="開催日"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2Zm12 8H5v10h14V10ZM8 13h3v3H8v-3Z" />
            </svg>
          }
        >
          <p>
            2026年
            <br />
            <strong className="about__date">8月29日(土)〜30日(日)</strong>
          </p>
          <p className="about__day-chip">29日(土)</p>
          <p>9:00〜17:00(一般公開)</p>
          <p className="about__day-chip">30日(日)</p>
          <p>9:00〜17:00(一般公開)</p>
        </AboutItem>

        <AboutItem
          heading="会場"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 4.5A2.5 2.5 0 1 0 12 11.5 2.5 2.5 0 0 0 12 6.5Z" />
            </svg>
          }
        >
          <p>
            <strong>石川県産業展示館4号館</strong>
          </p>
          <p className="about__small">
            〒920-0361
            <br />
            石川県金沢市袋畠町南193
          </p>
        </AboutItem>

        <AboutItem
          heading="イベントテーマ"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="m8 6 4 7H4l4-7Zm8 3 5 8H11l5-8ZM3 18h18v1.5H3V18Z" />
            </svg>
          }
        >
          <p>
            <strong>
              多様で最先端の
              <br />
              アウトドア
            </strong>
          </p>
          <p className="about__small">
            キャンプ・ハイキング・登山・釣り・ランなど、多様なライフスタイルを提案。アジアのアウトドアカルチャーを体験できます。
          </p>
        </AboutItem>

        <AboutItem
          heading="注目コンテンツ"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3 3 19h18L12 3Zm0 4.5 5.5 9.5h-11L12 7.5ZM11 12v3h2v-3h-2Z" />
            </svg>
          }
        >
          <ul className="about__contents">
            <li>最新アウトドアギア・ウェア</li>
            <li>モビリティ展示</li>
            <li>エコロジーエリア</li>
            <li>アクティビティ体験</li>
            <li>アウトドアテクノロジーエリア(新設予定)</li>
            <li>キッズエリア</li>
          </ul>
        </AboutItem>

        <AboutItem
          heading="こんな方におすすめ"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Zm2 11V10.6c1.2-.6 2.4-2 3-3.6.3-1 .4-2.6.3-3.6 0-.7.6-1.4 1.4-1.4 1 0 1.9.8 2.1 1.9.2 1.2 0 2.7-.5 4.1H20a2 2 0 0 1 2 2.4l-1.3 8A2 2 0 0 1 18.7 21H9Z" />
            </svg>
          }
        >
          <ul className="about__tags">
            <li>#車中泊・キャンピングカー検討者</li>
            <li>#ペットとアウトドアを楽しみたい方</li>
            <li>#アクティビティ好き/ファミリー層</li>
          </ul>
        </AboutItem>
      </div>
    </section>
  );
}
