import type { ReactNode } from "react";
import { CTA_URL } from "../constants";

type CtaProps = {
  children: ReactNode;
  className?: string;
  arrow?: boolean;
};

function CtaBase({
  children,
  color,
  className = "",
  arrow = false,
}: CtaProps & { color: "orange" | "lime" }) {
  return (
    <a
      href={CTA_URL}
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
