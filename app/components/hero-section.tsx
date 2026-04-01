import { ScrollCircle } from "@/app/components/scroll-circle";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-16 text-[var(--color-cream)] md:px-12 lg:px-20">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "var(--hero-image)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-20 mx-auto max-w-3xl text-center">
        <div className="mb-6">
          <span className="section-number">Jueves Santo</span>
        </div>
        <h1
          className="heading-display mb-6 text-5xl md:text-7xl"
          style={{ color: "var(--color-cream)" }}
        >
          Visita de las
          <br />
          <span className="font-light italic text-gold">Siete Iglesias</span>
        </h1>
        <hr className="rule-gold mx-auto mb-8 max-w-[3rem]" />
        <p className="mx-auto max-w-xl font-body text-lg font-light leading-relaxed text-[var(--color-warm-gray)] md:text-xl">
          Devoción iniciada por San Felipe Neri en Roma para acompañar a Cristo
          en su Pasión, agradecer el don de la Eucaristía y del sacerdocio, y
          orar ante el Santísimo Sacramento.
        </p>
      </div>

      <div className="pointer-events-none absolute -bottom-28 -right-28 z-10 md:-bottom-24 md:-right-24">
        <ScrollCircle size={380} />
      </div>
    </section>
  );
}
