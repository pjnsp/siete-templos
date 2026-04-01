import type { Station } from "@/app/components/stations-data";

export function StationsNav({ stations }: { stations: Station[] }) {
  return (
    <nav className="overflow-x-auto border-b border-rule px-6 py-6 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
        {stations.map((station) => (
          <a key={station.id} href={`#${station.id}`} className="nav-pill">
            {station.numeral}
          </a>
        ))}
      </div>
    </nav>
  );
}
