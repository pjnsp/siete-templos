import { CrossIcon } from "@/app/components/cross-icon";

export function ClosingReflection() {
  return (
    <section className="bg-ink px-6 py-16 text-[var(--color-cream)] md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <CrossIcon className="ornament-cross mx-auto mb-6 h-6 w-6" />
        <p className="mx-auto max-w-2xl font-display text-xl font-light italic leading-relaxed text-[var(--color-warm-gray)] md:text-2xl">
          «Velen y oren para no caer en tentación; el espíritu está dispuesto,
          pero la carne es débil.»
        </p>
        <p className="mt-4 font-display text-base font-light text-[var(--color-warm-gray)]">
          — Mt 26, 41
        </p>
      </div>
    </section>
  );
}
