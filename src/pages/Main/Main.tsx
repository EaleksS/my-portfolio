import { FC } from "react";
import {
  Layout,
  Skills,
  Projects,
  Quote,
  Preview,
  AboutMe,
  Contacts,
} from "../../widgets";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <Preview />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
    </Layout>
  );
};
