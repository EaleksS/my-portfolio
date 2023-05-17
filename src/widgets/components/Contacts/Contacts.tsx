import { FC } from "react";
import styles from "./Contacts.module.scss";
import { Text } from "../../../shared";
import { BsDiscord } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export const Contacts: FC = (): JSX.Element => {
  return (
    <div className={styles.contacts}>
      <Text type="h1">
        <span>#</span>contacts
      </Text>
      <div className={styles.content}>
        <Text>
          I’m interested in freelance opportunities. However, <br /> if you have
          other request or question, don’t <br /> hesitate to contact me
        </Text>
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
      </div>
    </div>
  );
};
