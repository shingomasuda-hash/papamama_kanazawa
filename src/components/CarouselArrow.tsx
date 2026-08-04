type CarouselArrowProps = {
  direction: "prev" | "next";
  label: string;
  className: string;
};

export function CarouselArrow({
  direction,
  label,
  className,
}: CarouselArrowProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`carousel-arrow carousel-arrow--${direction} ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {direction === "prev" ? (
          <path
            d="M15 5 8 12l7 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="m9 5 7 7-7 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
