import { SectionTitle } from "../components/SectionTitle";

const faqs = [
  {
    q: "Q1.話だけでも可能か",
    a: "A1.もちろん可能です。ぜひ実際に車を見て、乗って、楽しんでください。",
  },
  {
    q: "Q2.同伴可能か",
    a: "A2.可能です。中学生以下は無料のため、ご家族様もご一緒にご来場いただけます。",
  },
  {
    q: "Q3.特典受け取り方法",
    a: "A3.LINE追加後、相談予約まで完了いただけましたら当日入口にて担当者からチケットをお渡しします。",
  },
];

export function FaqSection() {
  return (
    <section className="faq">
      <div className="container">
        <SectionTitle en="FAQ" ja="Q&A" />
        <dl className="faq__list">
          {faqs.map((faq) => (
            <div key={faq.q} className="faq__item">
              <dt className="faq__q">{faq.q}</dt>
              <dd className="faq__a">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
