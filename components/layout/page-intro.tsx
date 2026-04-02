type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-edge/70 bg-hero-ambient">
      <div className="grid-faint" aria-hidden />
      <div className="site-shell section-gap relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.1rem,4.5vw,4.1rem)] font-semibold leading-[1.04] text-ink">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl section-lead">{description}</p>
      </div>
    </section>
  );
}
