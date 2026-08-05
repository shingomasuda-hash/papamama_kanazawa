import type { ReactNode } from "react";
import { CTA_URL } from "../constants";

type CtaProps = {
  children: ReactNode;
  className?: string;
  arrow?: boolean;
  /** 遷移先の上書き(省略時は相談予約リンク) */
  href?: string;
};

function CtaBase({
  children,
  color,
  className = "",
  arrow = false,
  href = CTA_URL,
}: CtaProps & { color: "orange" | "lime" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta cta--${color} ${arrow ? "cta--arrow" : ""} ${className}`}
    >
      {children}
    </a>
  );
}

export function PrimaryCta(props: CtaProps) {
  return <CtaBase {...props} color="orange" />;
}

export function SecondaryCta(props: CtaProps) {
  return <CtaBase {...props} color="lime" />;
}
