import { ExperienceData } from "@/app/lib/definitions";

export default function ExperienceItem({
  experienceData,
}: {
  experienceData: ExperienceData;
}) {
  return (
    <main>
      <li className="ms-4">
        <div className="absolute w-5 h-5 bg-black rounded-full mt-2.5 -start-2.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {experienceData.start} -{experienceData.end}
        </time>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {experienceData.position} - {experienceData.company}
        </h3>
        <div className="grid gap-6 py-6">
          {experienceData.projects.map((projectExperience, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {projectExperience.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {projectExperience.description}
              </p>
            </div>
          ))}
        </div>
      </li>
    </main>
  );
}
