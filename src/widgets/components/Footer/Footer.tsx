import { FC } from "react";
import styles from "./Footer.module.scss";
import { BsGithub, BsDiscord } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../shared";
import { useTranslation } from "react-i18next";

export const Footer: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <Text type="h3">
            <img src="/Logo.svg" alt="logo" />
            Elias
          </Text>
          <Text>{t("Web")}</Text>
        </div>
        <div className={styles.media}>
          <Text type="h2">{t("Media")}</Text>
          <div className={styles.social}>
            <BsGithub className={styles.icon} />
            <BsDiscord className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <Text>© Copyright 2023. Made by Elias</Text>
      </div>
    </footer>
  );
};
