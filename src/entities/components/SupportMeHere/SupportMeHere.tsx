import { FC } from "react";
import styles from "./SupportMeHere.module.scss";
import { Text } from "../../../shared";

export const SupportMeHere: FC = (): JSX.Element => {
  return (
    <div className={styles.support_me_here}>
      <Text type="h4">Support me here</Text>
      <Text>4149 5001 2069 0030</Text>
    </div>
  );
};
