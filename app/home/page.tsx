import Experience from "@/app/ui/experience/experience";
import Greeting from "@/app/ui/greeting";
import About from "@/app/ui/about";
import Skills from "@/app/ui/skills/skills";
import loadJsonContent from "@/app/lib/util";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Christian Hemauer",
  description: "Welcome to my portfolio site",
};

export default async function Home() {
  const content = await loadJsonContent("/content/portfolio.json");

  return (
    <main>
      <Greeting
        firstname={content.firstname}
        lastname={content.lastname}
        profession={content.profession}
      />
      <About text={content.about} />
      <Skills />
      <Experience experiences={content.experiences} />
    </main>
  );
}
