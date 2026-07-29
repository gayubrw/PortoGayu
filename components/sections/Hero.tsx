import { getHeroData } from "@/lib/utils";
import HeroScene from "@/components/sections/HeroScene";

export default async function Hero() {
  const heroData = await getHeroData();
  return <HeroScene heroData={heroData} />;
}
