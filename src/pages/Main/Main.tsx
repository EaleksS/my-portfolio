import { FC } from "react";
import styles from "./Main.module.scss";
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
      <div className={styles.main}>
        <Preview />
        <Quote />
        <Projects />
        <Skills />
        <AboutMe />
        <Contacts />
      </div>
    </Layout>
  );
};
