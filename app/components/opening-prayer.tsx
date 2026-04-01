import { CrossIcon } from "@/app/components/cross-icon";

export function OpeningPrayer() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="label-prayer">Oración inicial</span>

        <CrossIcon className="ornament-cross mx-auto mb-6 mt-6 h-6 w-6" />

        <p className="mx-auto max-w-2xl font-display text-xl font-light italic leading-relaxed text-[var(--color-ink)] md:text-2xl">
          Señor Jesús, en esta noche santa en que quisiste quedarte con nosotros
          en el Sacramento del Altar, te acompañamos en oración visitando estos
          templos. Abre nuestros corazones para contemplar tu amor y tu entrega.
        </p>

        <p className="mt-8 font-display text-base font-light text-[var(--color-warm-gray)]">
          Se recomienda guardar silencio entre cada estación.
        </p>
      </div>
    </section>
  );
}
