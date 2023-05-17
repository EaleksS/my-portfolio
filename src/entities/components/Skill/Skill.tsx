import { FC } from "react";
import styles from "./Skill.module.scss";
import { Text } from "../../../shared";

interface Props {
  title: string;
  desc: string;
}

export const Skill: FC<Props> = ({ title, desc }): JSX.Element => {
  return (
    <div className={styles.skill}>
      <div className={styles.title}>
        <Text type="h4">{title}</Text>
      </div>
      <Text>{desc}</Text>
    </div>
  );
};
