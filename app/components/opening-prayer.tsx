import { CrossIcon } from "@/app/components/cross-icon";

export function OpeningPrayer() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="label-prayer">Introducción</span>

        <CrossIcon className="ornament-cross mx-auto mb-6 mt-6 h-6 w-6" />

        <p className="mx-auto max-w-2xl font-display text-xl font-light italic leading-relaxed text-[var(--color-ink)] md:text-2xl">
          Según la tradición, cada iglesia, después de la Misa de la Cena del Señor, guarda el Santísimo Sacramento en el tabernáculo y erige un monumento en señal de acción de gracias a Jesús por su sagrada Pasión con la que redimió con amor al mundo. 
          <br />
          <br />
          Los fieles que visitan los monumentos están invitados a hacer también una oración de reparación por el abandono con que frecuentemente se le deja en el Sagrario y la poca frecuencia a la Santa Misa y Comunión.
        </p>

        <p className="mt-8 font-display text-base font-light text-[var(--color-warm-gray)]">
          Se recomienda guardar silencio entre cada estación.
        </p>
      </div>
    </section>
  );
}
