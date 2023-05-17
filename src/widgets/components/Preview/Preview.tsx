import { FC } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "../../../shared";

export const Preview: FC = (): JSX.Element => {
  return (
    <div className={styles.preview}>
      <div className={styles.text}>
        <Text type="h1">
          Elias is a <span>web designer</span> and
          <span> front-end developer</span>
        </Text>

        <Text mt="2rem">
          He crafts responsive websites where technologies meet creativity
        </Text>

        <Button type="primary" mt="1.5rem">
          Contact me!!
        </Button>
      </div>
      <div className={styles.img}>
        <img src="/person.png" alt="person" />
        <div className={styles.img_title}>
          <div></div>
          <Text type="h3">
            <span>Currently working on</span> Portfolio
          </Text>
        </div>
      </div>
    </div>
  );
};
