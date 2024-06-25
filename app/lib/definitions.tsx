export type LinkData = {
  linkedIn: string;
  github: string;
};

type Project = {
  name: string;
  description: string;
};

export type ExperienceData = {
  start: string;
  end: string;
  position: string;
  company: string;
  projects: Project[];
};
