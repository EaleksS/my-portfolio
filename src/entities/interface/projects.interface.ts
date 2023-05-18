export interface Project {
  id: string;
  name: string;
  stack: string[];
  img: string;
  desc: string;
  live: string | null;
  figma: string | null;
  github: string;
}
