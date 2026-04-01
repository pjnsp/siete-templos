export function DevotionalHeader() {
  return (
    <header className="bg-ink px-6 py-5 text-[var(--color-cream)] md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <div className="flex items-center gap-3">
          <svg
            className="h-5 w-5 text-gold"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden
          >
            <path d="M12 2v20M5 8h14" strokeLinecap="round" />
          </svg>
          <span className="font-display text-sm uppercase tracking-[0.15em]">
            Devocionario
          </span>
        </div>
        <span className="font-display text-sm tracking-wider text-[var(--color-warm-gray)]">
          Jueves Santo
        </span>
      </div>
    </header>
  );
}
