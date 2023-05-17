import { FC } from "react";
import { CompleteApps, Layout, SmallProjects } from "../../widgets";
import styles from "./Works.module.scss";
import { Text } from "../../shared";

export const Works: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.title}>
        <Text type="h1">
          <span>/</span>projects
        </Text>
        <Text>List of my projects</Text>
      </div>
      <CompleteApps />
      <SmallProjects />
    </Layout>
  );
};
