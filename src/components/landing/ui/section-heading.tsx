type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-[1.9rem] font-bold leading-tight text-balance text-foreground sm:text-[2.3rem] lg:text-[2.9rem]">
        {title}
      </h2>
      <p className="mt-4 text-[15px] leading-7 text-muted sm:text-base">
        {description}
      </p>
    </div>
  );
}
