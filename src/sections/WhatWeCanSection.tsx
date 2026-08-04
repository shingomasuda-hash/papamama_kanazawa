import { SectionTitle } from "../components/SectionTitle";
import { PrimaryCta, SecondaryCta } from "../components/Cta";

const items = [
  { no: "01", label: "購入", image: "/images/wwc-01.png" },
  { no: "02", label: "乗り換え", image: "/images/wwc-02.png" },
  { no: "03", label: "カスタム", image: "/images/wwc-03.png" },
  { no: "04", label: "家族利用", image: "/images/wwc-04.png" },
  { no: "05", label: "支払い", image: "/images/wwc-05.png" },
];

export function WhatWeCanSection() {
  return (
    <section className="wwc">
      <div className="container">
        <SectionTitle en="WHAT WE CAN" ja="何を相談できるの？" size="md" />
        <ul className="wwc__grid">
          {items.map((item) => (
            <li key={item.no} className="wwc__card">
              <img
                src={item.image}
                alt={`${item.no} ${item.label}`}
                width={232}
                height={287}
               
              />
            </li>
          ))}
        </ul>
        <div className="wwc__cta">
          <PrimaryCta arrow>まずは説明を聞く</PrimaryCta>
          <SecondaryCta arrow>相談予約をする</SecondaryCta>
        </div>
      </div>
    </section>
  );
}
