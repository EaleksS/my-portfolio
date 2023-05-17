import { FC } from "react";
import styles from "./Contacts.module.scss";
import { Text } from "../../../shared";
import { Contact, SupportMeHere } from "../../../entities";
import { useTranslation } from "react-i18next";

interface Props {
  type?: 1 | 2;
}

export const Contacts: FC<Props> = ({ type = 1 }): JSX.Element => {
  const { t } = useTranslation();

  switch (type) {
    case 2:
      return (
        <div className={styles.contacts} style={{ marginTop: "3rem" }}>
          <Text type="h1">
            <span>/</span>
            {t("contacts")}
          </Text>
          <Text mt="1rem">
            <span style={{ color: "#fff" }}>{t("Who_am")}</span>
          </Text>
          <div className={styles.content}>
            <Text>{t("interested")}</Text>
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
            <span>#</span>
            {t("contacts")}
          </Text>
          <div className={styles.content}>
            <Text>{t("interested")}</Text>
            <Contact />
          </div>
        </div>
      );
  }
};
