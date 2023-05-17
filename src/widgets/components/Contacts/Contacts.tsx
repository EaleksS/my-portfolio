import { FC } from "react";
import styles from "./Contacts.module.scss";
import { Text } from "../../../shared";
import { Contact, SupportMeHere } from "../../../entities";

interface Props {
  type?: 1 | 2;
}

export const Contacts: FC<Props> = ({ type = 1 }): JSX.Element => {
  switch (type) {
    case 2:
      return (
        <div className={styles.contacts} style={{ marginTop: "3rem" }}>
          <Text type="h1">
            <span>/</span>contacts
          </Text>
          <Text mt="1rem">
            <span style={{ color: "#fff" }}>Who am i?</span>
          </Text>
          <div className={styles.content}>
            <Text>
              I’m interested in freelance opportunities. However, <br /> if you
              have other request or question, don’t <br /> hesitate to contact
              me
            </Text>
            <div className={styles.right}>
              <SupportMeHere />
              <Contact />
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={styles.contacts}>
          <Text type="h1">
            <span>#</span>contacts
          </Text>
          <div className={styles.content}>
            <Text>
              I’m interested in freelance opportunities. However, <br /> if you
              have other request or question, don’t <br /> hesitate to contact
              me
            </Text>
            <Contact />
          </div>
        </div>
      );
  }
};
