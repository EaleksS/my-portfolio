import { FC } from "react";
import styles from "./SmallProjects.module.scss";
import { Text } from "../../../shared";
import { Card } from "../../../entities";

export const SmallProjects: FC = (): JSX.Element => {
  return (
    <div className={styles.smallProjects}>
      <Text type="h1">
        <span>#</span>small-projects
      </Text>
      <div className={styles.projects}>
        {[0, 1, 2, 3, 4].map((e) => (
          <Card key={e} />
        ))}
      </div>
    </div>
  );
};
