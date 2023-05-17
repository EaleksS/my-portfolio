import { FC } from "react";
import styles from "./Contact.module.scss";
import { Text } from "../../../shared";
import { BsDiscord } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export const Contact: FC = (): JSX.Element => {
  return (
    <div className={styles.contact}>
      <Text type="h4">Message me here</Text>
      <Text>
        <BsDiscord />
        !Elias#3519
      </Text>
      <Text>
        <IoIosMail />
        elias@elias.me
      </Text>
    </div>
  );
};
