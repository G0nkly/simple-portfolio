import SectionHeader from "@/app/ui/navigation/sectionHeader";
import {
  AWS,
  DOCKER,
  ELASTICSEARCH,
  FASTAPI,
  GIT,
  JAVA,
  JENKINS,
  JUPYTER,
  KOTLIN,
  KUBERNETES,
  PANDAS,
  POETRY,
  POSTGRES,
  PYTHON,
  QUARKUS,
  SCIKITLEARN,
  SPRING,
  SQLA,
  SQLSERVER,
  TERRAFORM,
} from "@/app/lib/icons";

export default function Skills() {
  const technologies = [
    FASTAPI,
    JAVA,
    PYTHON,
    KOTLIN,
    AWS,
    POSTGRES,
    QUARKUS,
    TERRAFORM,
    JENKINS,
    JUPYTER,
    SPRING,
    ELASTICSEARCH,
    POETRY,
    PANDAS,
    SQLSERVER,
    SQLA,
    GIT,
    DOCKER,
    KUBERNETES,
    SCIKITLEARN,
  ];
  return (
    <main>
      <article className="sm:p-8 md:p-16" id="skills">
        <SectionHeader sectionTitle="Skills" />
        <div className="grid justify-items-center grid-cols-2 sm:grid-cols-2 sm:gap-1 md:grid-cols-4 lg:grid-cols-8 lg:gap-6 py-6 gap-4">
          {technologies.map((technology, index) => (
            <div key={index} className="w-16 h-16 hover:animate-bounce">
              {technology}
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
