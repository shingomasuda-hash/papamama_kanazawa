import { SectionTitle } from "../components/SectionTitle";

const bodyColors = ["#d9d2c0", "#a8bcc9", "#d99384", "#e0c084", "#8fae9b"];

export function ExteriorSection() {
  return (
    <section className="exterior">
      <div className="container">
        <SectionTitle en="EXTERIOR" ja="車の外観" size="md" />

        <img
          src="/images/exterior-van.png"
          alt="ホワイトカラーにカスタムされたPAPAMAMA CAR'Sのバン"
          width={480}
          height={330}
          className="exterior__van"
        />

        <div className="exterior__grid">
          <div className="exterior__item">
            <h3 className="exterior__heading">
              <span className="exterior__no" aria-hidden="true">
                01
              </span>
              BODY COLOR
            </h3>
            <ul className="exterior__swatches" aria-label="ボディカラーの例">
              {bodyColors.map((color) => (
                <li
                  key={color}
                  className="exterior__swatch"
                  style={{ backgroundColor: color }}
                />
              ))}
            </ul>
            <p className="exterior__body">
              自分らしいカラーで、車との時間をより楽しく！
            </p>
          </div>

          <div className="exterior__item">
            <h3 className="exterior__heading">
              <span className="exterior__no" aria-hidden="true">
                02
              </span>
              COSTOM
              <br />
              FRONT FACE
            </h3>
            <p className="exterior__body">
              社用車とは思えない、タフでワイルドなフロントフェイス
            </p>
          </div>

          <div className="exterior__item">
            <h3 className="exterior__heading">
              <span className="exterior__no" aria-hidden="true">
                03
              </span>
              CUSTOM
              <br />
              HEAD LIGHT
            </h3>
            <p className="exterior__body">
              商用バンからSUVへ。ヘッドライトカスタムでアウトドア感を演出します。
            </p>
          </div>

          <div className="exterior__item">
            <h3 className="exterior__heading">
              <span className="exterior__no" aria-hidden="true">
                04
              </span>
              LIFT-UP
            </h3>
            <p className="exterior__body">
              商用車の取り回しの良さに、リフトアップで走破性をプラス
            </p>
          </div>

          <div className="exterior__item exterior__item--wide">
            <h3 className="exterior__heading">
              <span className="exterior__no" aria-hidden="true">
                05
              </span>
              RACK
            </h3>
            <p className="exterior__body">
              「組み立てが面倒」「音がうるさそう」そんなルーフラックのイメージを覆す、パパママカーズこだわりのオリジナルモデル。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
