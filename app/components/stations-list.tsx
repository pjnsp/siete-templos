import type { Station } from "@/app/components/stations-data";

export function StationsList({ stations }: { stations: Station[] }) {
  return (
    <>
      {stations.map((station, index) => (
        <div key={station.id}>
          <article id={station.id} className="station px-6 py-16 md:px-12 lg:px-20">
            <div className="mx-auto max-w-3xl">
              <div className="station-header mb-8 flex items-start gap-5">
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
    </>
  );
}
