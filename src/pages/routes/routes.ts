import { RouteData } from "./types";
import { Main } from "../Main/Main";
import { Works } from "../Works/Works";
import { AboutMePage } from "../AboutMe/AboutMe";
import { ContactsPage } from "../Contacts/Contacts";
import { NotFound } from "../NotFound/NotFound";

export const routes: RouteData[] = [
  { path: "/", Component: Main, key: "main_page" },
  { path: "/works", Component: Works, key: "work_page" },
  { path: "/about-me", Component: AboutMePage, key: "about-me_page" },
  { path: "/contacts", Component: ContactsPage, key: "contacts_page" },
  { path: "*", Component: NotFound, key: "not-found_page" },
];
