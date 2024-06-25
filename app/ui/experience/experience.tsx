import SectionHeader from "@/app/ui/navigation/sectionHeader";
import ExperienceItem from "@/app/ui/experience/experienceItem";
import { ExperienceData } from "@/app/lib/definitions";

export default function Experience({
  experiences,
}: {
  experiences: ExperienceData[];
}) {
  return (
    <main>
      <article className="p-16" id="experience">
        <SectionHeader sectionTitle="Experience" />
        <ol className="relative border-s-2 border-black dark:border-gray-700">
          {experiences.map((experience: ExperienceData, index) => (
            <ExperienceItem key={index} experienceData={experience} />
          ))}
        </ol>
      </article>
    </main>
  );
}
