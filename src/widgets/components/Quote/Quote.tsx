import { FC } from "react";
import styles from "./Quote.module.scss";
import { Text } from "../../../shared";

export const Quote: FC = (): JSX.Element => {
  return (
    <div className={styles.quote}>
      <div className={styles.content}>
        <Text type="h2">With great power comes great electricity bill</Text>
        <div className={styles.dr}>
          <Text type="h2">- Dr. Who</Text>
        </div>
      </div>
    </div>
  );
};
