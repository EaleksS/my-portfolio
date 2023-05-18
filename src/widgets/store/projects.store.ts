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
            "Zustand",
          ],
          img: "/projects/riksha.png",
          desc: "Доставка Суши",
          live: "https://project-02-iota.vercel.app/",
          figma:
            "https://www.figma.com/file/NRRHaIGSzhO7NftDkPjZmZ/Riksha?type=design&node-id=1%3A3&t=kV8cDM95vIUiVsAF-1",
          github: "https://github.com/EaleksS/project_02",
        },
        {
          id: "2",
          name: "Portfolio",
          stack: [
            "HTML",
            "SCSS",
            "React",
            "Nest",
            "Node.js",
            "TypeScript",
            "React Query",
            "Zustand",
          ],
          img: "/projects/portfolio.png",
          desc: "My portfolio",
          live: "https://my-portfolio-amber-nine.vercel.app/",
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
