import Hero from "@/components/hero";
import ExperienceCard from "@/components/experience-card";

export default function Home() {
  return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-transparent">
        <Hero />
        <ExperienceCard />
      </div>
  );
}
