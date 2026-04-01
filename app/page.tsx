import { ClosingReflection } from "@/app/components/closing-reflection";
import { DevotionalFooter } from "@/app/components/devotional-footer";
import { DevotionalHeader } from "@/app/components/devotional-header";
import { HeroSection } from "@/app/components/hero-section";
import { OpeningPrayer } from "@/app/components/opening-prayer";
import { StationsList } from "@/app/components/stations-list";
import { StationsNav } from "@/app/components/stations-nav";
import { stations } from "@/app/components/stations-data";

export default function Home() {
  return (
    <>
      <DevotionalHeader />
      <HeroSection />
      <StationsNav stations={stations} />
      <OpeningPrayer />

      <hr className="rule-gold mx-auto max-w-3xl" />

      <StationsList stations={stations} />
      <ClosingReflection />
      <DevotionalFooter />
    </>
  );
}
