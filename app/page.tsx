import { ScrollCircle } from "@/app/components/scroll-circle";

const stations = [
  {
    id: "iglesia-1",
    numeral: "I",
    title: "Primera Iglesia",
    subtitle: "Jesús en el Huerto de Getsemaní",
    meditation:
      "Cerca de las diez de la noche, Jesús llega al Huerto de los Olivos. Su alma se llena de una tristeza inmensa al contemplar los sufrimientos que se avecinan y la ingratitud de tantos hombres. Durante horas ora con lágrimas, y su sudor se convierte en gotas de sangre que caen sobre la tierra. Allí llega Judas, quien con un beso lo señala y lo entrega a los que vienen a aprehenderlo. Pero más que la traición de Judas, fue su amor por cada uno de nosotros lo que lo entregó.",
    prayer:
      "Te compadecemos, Señor Jesús, y te damos gracias por cuanto sufriste en la oración del Huerto para nuestra salvación. Nos duele la traición con que fuiste apresado. Te pedimos fortaleza en nuestras pruebas y el don de perseverar en la oración.",
  },
  {
    id: "iglesia-2",
    numeral: "II",
    title: "Segunda Iglesia",
    subtitle: "Jesús ante Anás",
    meditation:
      "Jesús es llevado maniatado como un criminal ante Anás, quien lo interroga sobre sus discípulos y su enseñanza. El Señor responde con serenidad y firmeza: que pregunten a quienes lo escucharon, pues Él siempre habló públicamente. Un guardia, ofendido por la respuesta, le da una bofetada. Jesús la recibe con mansedumbre.",
    prayer:
      "Señor Jesús, te compadecemos y te damos gracias por la humillación que sufriste al ser golpeado injustamente. Concédenos hablar siempre con verdad y serenidad, y respetar a quienes se dirigen a nosotros.",
  },
  {
    id: "iglesia-3",
    numeral: "III",
    title: "Tercera Iglesia",
    subtitle: "Jesús ante Caifás",
    meditation:
      "Ante el sumo sacerdote, Jesús escucha cómo tergiversan sus palabras y presentan testimonios falsos en su contra. Lo retan a proclamar que es el Hijo de Dios, pero sin voluntad de reconocerlo. Pedro, entre tanto, lo niega tres veces. El tribunal lo declara reo de muerte. La verdad es aplastada por la mentira.",
    prayer:
      "Señor Jesús, Tú eres la Verdad, y sin embargo la mentira se acumula para silenciarte. Dijiste que la verdad nos haría libres, pero vemos cómo la falsedad nos esclaviza. Nos llamaste amigos, y con qué facilidad te negamos. Te compadecemos por estas traiciones y te pedimos la gracia de ser testigos valientes de tu amor.",
  },
  {
    id: "iglesia-4",
    numeral: "IV",
    title: "Cuarta Iglesia",
    subtitle: "Jesús ante Pilato",
    meditation:
      "Jesús es acusado ante Pilato de alborotador, de prohibir el tributo al César y de proclamarse rey. Pero Él anuncia que su Reino no es de este mundo y que todo el que busca la verdad escucha su voz. Pilato no encuentra delito en Él, pero cede ante la presión de la multitud que pide su muerte.",
    prayer:
      "Señor Jesús, te proclamamos Rey de la Verdad, de la Vida y del Amor. Te compadecemos por las calumnias con que te acusan y la ceguera con que tuercen tus palabras. Limpia nuestros labios y corazones, y haz que nuestras vidas den testimonio de Ti.",
  },
  {
    id: "iglesia-5",
    numeral: "V",
    title: "Quinta Iglesia",
    subtitle: "Jesús ante Herodes",
    meditation:
      "Herodes se alegra de ver a Jesús, pero su interés es superficial: espera presenciar algún prodigio, como quien busca entretenimiento. Le hace muchas preguntas, pero Jesús guarda silencio. Ante esa respuesta, Herodes lo desprecia y se burla de Él, revistiéndolo con una túnica blanca.",
    prayer:
      "Señor Jesús, Sabiduría del Padre, ante la vana curiosidad de Herodes guardas silencio. Por Ti los sencillos y humildes contemplaron el poder de Dios. Te agradecemos la lección que nos das, te compadecemos por el ultraje que sufres y te pedimos la gracia de saber hablar y callar oportunamente.",
  },
  {
    id: "iglesia-6",
    numeral: "VI",
    title: "Sexta Iglesia",
    subtitle: "Jesús condenado por Pilato",
    meditation:
      "De vuelta con Pilato, este reconoce que Jesús no ha cometido delito alguno y quiere dejarlo libre. Pero claudica ante la presión de quienes han decidido acabar con Él porque su vida y sus enseñanzas les resultan incómodas. Jesús es condenado a morir en la cruz, azotado y coronado con espinas.",
    prayer:
      "Señor Jesús, te compadecemos por las injusticias de este proceso en el que también nosotros metimos las manos. Compadecemos en Ti a todos los que por ser fieles a la verdad y a la causa de Dios son tratados injustamente. Te pedimos la gracia de la piedad divina ante nuestras propias injusticias.",
  },
  {
    id: "iglesia-7",
    numeral: "VII",
    title: "Séptima Iglesia",
    subtitle: "Jesús en el Santo Sepulcro",
    meditation:
      "Jesús ha muerto en la cruz entre dolores indecibles, burlas y desprecios, sintiéndose abandonado hasta por su Padre. Su Madre y los pocos amigos fieles que lo acompañaron no pudieron evitarlo. Unos amigos lo sepultan con piedad. Se han cumplido las Escrituras. Ahora toca esperar al tercer día, porque Él, poderoso en obras y palabras, prometió que resucitaría.",
    prayer:
      "Señor Jesús, te acompañaremos en silencio durante estos días, esperando que tu Palabra germine en nuestros corazones y contigo resucitemos como hombres y mujeres nuevos. Gracias, Padre Dios, porque Tú siempre escuchaste a tu Hijo y lo resucitaste, vencedor de su muerte y de la nuestra.",
  },
] as const;

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden
    >
      <path d="M12 2v20M5 8h14" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
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
            Devoción iniciada por San Felipe Neri en Roma para acompañar a
            Cristo en su Pasión, agradecer el don de la Eucaristía y del
            sacerdocio, y orar ante el Santísimo Sacramento.
          </p>
        </div>

        <div className="pointer-events-none absolute -bottom-28 -right-28 z-10 md:-bottom-24 md:-right-24">
          <ScrollCircle size={380} />
        </div>
      </section>

      <nav className="overflow-x-auto border-b border-rule px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {stations.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav-pill">
              {s.numeral}
            </a>
          ))}
        </div>
      </nav>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="label-prayer">Oración inicial</span>

          <CrossIcon className="ornament-cross mx-auto mb-6 mt-6 h-6 w-6" />

          <p className="mx-auto max-w-2xl font-display text-xl font-light italic leading-relaxed text-[var(--color-ink)] md:text-2xl">
            Señor Jesús, en esta noche santa en que quisiste quedarte con
            nosotros en el Sacramento del Altar, te acompañamos en oración
            visitando estos templos. Abre nuestros corazones para contemplar
            tu amor y tu entrega.
          </p>

          <p className="mt-8 font-display text-base font-light text-[var(--color-warm-gray)]">
            Se recomienda guardar silencio entre cada estación.
          </p>
        </div>
      </section>

      <hr className="rule-gold mx-auto max-w-3xl" />

      {stations.map((station, index) => (
        <div key={station.id}>
          <article
            id={station.id}
            className="station px-6 py-16 md:px-12 lg:px-20"
          >
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex items-start gap-5">
                <span className="station-numeral">{station.numeral}</span>
                <div className="pt-2">
                  <h2 className="station-title">{station.title}</h2>
                  <p className="station-subtitle mt-1 text-lg">
                    {station.subtitle}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <span className="label-meditation">Meditación</span>
                <p className="meditation-text mt-3">{station.meditation}</p>
              </div>

              <div className="bg-parchment p-6 md:p-8">
                <span className="label-prayer">Oración</span>
                <p className="prayer-text mt-3">{station.prayer}</p>
                <p className="padrenuestro-note mt-6 text-center">
                  Se rezan 3 Padrenuestros
                </p>
              </div>
            </div>
          </article>

          {index < stations.length - 1 ? (
            <hr className="rule-ink mx-auto max-w-3xl" />
          ) : null}
        </div>
      ))}

      <section className="bg-ink px-6 py-16 text-[var(--color-cream)] md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <CrossIcon className="ornament-cross mx-auto mb-6 h-6 w-6" />
          <p className="mx-auto max-w-2xl font-display text-xl font-light italic leading-relaxed text-[var(--color-warm-gray)] md:text-2xl">
            «Velen y oren para no caer en tentación; el espíritu está
            dispuesto, pero la carne es débil.»
          </p>
          <p className="mt-4 font-display text-base font-light text-[var(--color-warm-gray)]">
            — Mt 26, 41
          </p>
        </div>
      </section>

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
            Pastoral Juvenil · Parroquia Nuestra Señora de la Paz · Ciudad
            Juárez
          </p>
        </div>
      </footer>
    </>
  );
}
