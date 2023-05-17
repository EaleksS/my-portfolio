import { FC } from "react";
import styles from "./AllMedia.module.scss";
import { Text } from "../../../shared";
import { BsDiscord, BsGithub } from "react-icons/bs";

export const AllMedia: FC = (): JSX.Element => {
  return (
    <div className={styles.all_media}>
      <Text type="h1">
        <span>#</span>all-media
      </Text>
      <div className={styles.social}>
        <Text>
          <BsGithub className={styles.icon} /> Github
        </Text>
        <Text>
          <BsDiscord className={styles.icon} /> Discord
        </Text>
      </div>
    </div>
  );
};
