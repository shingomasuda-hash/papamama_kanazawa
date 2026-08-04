import { SectionTitle } from "../components/SectionTitle";

const merits = [
  {
    no: "01",
    title: "その場で質問",
    body: "疑問はその場で解決。気になることをすぐ質問できるから、理解が深まる。",
  },
  {
    no: "02",
    title: "実車でわかる",
    body: "触れて、座って、初めて分かる。写真では伝わらないサイズ感や乗り心地を、その場で体感",
  },
  {
    no: "03",
    title: "その場で比べられる",
    body: "複数台を一度にチェック。価格・装備・広さを横並びで見て、違いがすぐ分かる。",
  },
  {
    no: "04",
    title: "同伴相談",
    body: "家族やパートナーもと同時に確認。意見のズレをその場で解消して、納得して選べる。",
  },
  {
    no: "05",
    title: "現地で下取り査定",
    body: "当日のお車をその場で査定！",
  },
];

export function MeritSection() {
  return (
    <section className="merit">
      <div className="container">
        <SectionTitle en="MERIT" ja="会場相談のメリットは？" />
        <ul className="merit__list">
          {merits.map((merit) => (
            <li key={merit.no} className="merit__card">
              <h3 className="merit__heading">
                <span className="merit__no" aria-hidden="true">
                  {merit.no}
                </span>
                {merit.title}
              </h3>
              <p className="merit__body">{merit.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
