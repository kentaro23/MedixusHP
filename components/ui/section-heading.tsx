import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="section-lead mt-5">{description}</p>
    </div>
  );
}
