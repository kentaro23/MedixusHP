import { ScrollReveal } from "@/components/ui/ScrollReveal";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <ScrollReveal className={`max-w-3xl ${alignClass}`}>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-textPrimary md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-textSecondary md:text-lg">{description}</p> : null}
    </ScrollReveal>
  );
}
