export function DevotionalFooter() {
  return (
    <footer className="border-t border-[var(--color-warm-gray)] border-opacity-20 bg-ink px-6 py-8 text-[var(--color-cream)] md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm text-[var(--color-warm-gray)]">
          Oraciones basadas en la guía publicada por{" "}
          <a
            href="https://www.aciprensa.com/noticias/54951/guia-de-oracion-para-visitar-las-7-iglesias-en-semana-santa"
            className="underline transition-colors hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACI Prensa
          </a>
        </p>
        <p className="mt-2 text-xs text-[var(--color-warm-gray)] opacity-60">
          Pastoral Juvenil · Parroquia Nuestra Señora de la Paz · Ciudad Juárez
        </p>
        <p className="mt-4 text-xs text-white/30">
          Hecho con amor por{" "}
          <a
            href="https://diogneto-labs.pjnsp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
          >
            Diogneto
          </a>{" "}
          para nuestra comunidad
        </p>
      </div>
    </footer>
  );
}
