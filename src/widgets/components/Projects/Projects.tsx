import { FC } from "react";
import styles from "./Projects.module.scss";
import { Text } from "../../../shared";
import { Card } from "../../../entities";

export const Projects: FC = (): JSX.Element => {
  return (
    <div className={styles.projects}>
      <div className={styles.title}>
        <Text type="h1">
          <span>#</span>projects
        </Text>
        <Text type="h3">
          View all <span className={styles.arrow}>{`~~>`}</span>
        </Text>
      </div>
      <div className={styles.items}>
        {[0, 1, 2].map((e) => (
          <Card key={e} />
        ))}
      </div>
    </div>
  );
};
