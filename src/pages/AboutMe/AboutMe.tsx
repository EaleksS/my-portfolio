import { FC } from "react";
import { Layout, Skills } from "../../widgets";
import { AboutMe } from "../../widgets";

export const AboutMePage: FC = (): JSX.Element => {

  return (
    <Layout>
      <AboutMe type={2} />
      <Skills type={2} />
    </Layout>
  );
};
