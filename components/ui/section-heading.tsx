import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-azure/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>
      <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
    </div>
  );
}
