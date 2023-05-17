import { RouteData } from "./types";
import { Main } from "../Main/Main";
import { Works } from "../Works/Works";
import { AboutMe } from "../AboutMe/AboutMe";
import { Contacts } from "../Contacts/Contacts";
import { NotFound } from "../NotFound/NotFound";

export const routes: RouteData[] = [
  { path: "/", Component: Main, key: "main_page" },
  { path: "/works", Component: Works, key: "work_page" },
  { path: "/about-me", Component: AboutMe, key: "about-me_page" },
  { path: "/contacts", Component: Contacts, key: "contacts_page" },
  { path: "*", Component: NotFound, key: "not-found_page" },
];
