import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Project } from "../../entities/interface/projects.interface";

type useProjects = {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
};

export const useProjects = create(
  persist<useProjects>(
    (set) => ({
      projects: [
        {
          id: "1",
          name: "Riksha",
          stack: [
            "HTML",
            "SCSS",
            "React",
            "Nest",
            "Node.js",
            "TypeScript",
            "React Query",
          ],
          img: "/projects/riksha.png",
          desc: "Figma landing page about service for viewing chess tournaments",
          live: "https://project-02-iota.vercel.app/",
          figma:
            "https://www.figma.com/file/nPJNTMFdk8Y2Jjtopx3pse/Portfolio?type=design&node-id=42%3A403&t=jO6rxpmoqQDX6uIW-1",
          github: "https://github.com/EaleksS/my-portfolio",
        },
      ],
      setProjects: (projects) => {
        set({ projects: projects });
      },
    }),
    { name: "projects" }
  )
);
