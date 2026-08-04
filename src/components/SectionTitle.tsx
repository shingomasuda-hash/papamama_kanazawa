type SectionTitleProps = {
  en: string;
  ja: string;
  /** 元デザインはタイトル文字数に応じて英字サイズが異なる */
  size?: "md" | "lg" | "xl";
  id?: string;
};

export function SectionTitle({ en, ja, size = "xl", id }: SectionTitleProps) {
  return (
    <h2 className={`section-title section-title--${size}`} id={id}>
      <span className="section-title__en" aria-hidden="true">
        {en}
      </span>
      <span className="section-title__ja">{ja}</span>
    </h2>
  );
}
