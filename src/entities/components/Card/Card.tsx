import { FC } from "react";
import styles from "./Card.module.scss";
import { Button, Text } from "../../../shared";

interface Props {
  img?: string;
}

export const Card: FC<Props> = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <img src="/item1.jpg" alt="project" />
      <div className={styles.content}>
        <div className={styles.stack}>
          <Text>HTML SCSS Python Flask HTML SCSS Python Flask</Text>
        </div>
        <div className={styles.info}>
          <Text type="h2">ChertNodes</Text>
          <Text mt="1rem">
            Figma landing page about service for viewing chess tournaments
          </Text>
          <div className={styles.btns}>
            <Button type="primary">Live {`<~>`}</Button>
            <Button>Github {`<~>`}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
