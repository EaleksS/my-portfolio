import { FC } from "react";
import styles from "./CompleteApps.module.scss";
import { Text } from "../../../shared";
import { Card } from "../../../entities";

export const CompleteApps: FC = (): JSX.Element => {
  return (
    <div className={styles.complete_apps}>
      <Text type="h1">
        <span>#</span>complete-apps
      </Text>
      <div className={styles.projects}>
        {[0, 1, 2, 3, 4].map((e) => (
          <Card key={e} />
        ))}
      </div>
    </div>
  );
};
