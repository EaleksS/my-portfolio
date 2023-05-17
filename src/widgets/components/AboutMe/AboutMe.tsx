import { FC } from "react";
import styles from "./AboutMe.module.scss";
import { Button, Text } from "../../../shared";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  type?: 1 | 2;
}

export const AboutMe: FC<Props> = ({ type = 1 }): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  switch (type) {
    case 2:
      return (
        <div className={styles.about_me}>
          <Text type="h1">
            <span>/</span>
            {t("about-me")}
          </Text>
          <Text mt="1rem">
            <span style={{ color: "#fff" }}>{t("Who_am")}</span>
          </Text>
          <div className={styles.content}>
            <div className={styles.text}>
              <Text mt="5rem">
                {t("hello")}
                <br />
                <br />
                {t("develop_responsive_websites")}
                <br />
                <br />
                {t("Transforming_my_creativity")}
              </Text>
            </div>
            <div className={styles.img}>
              <img src="/person2.png" alt="person" />
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={styles.about_me}>
          <Text type="h1">
            <span>#</span>
            {t("about-me")}
          </Text>
          <div className={styles.content}>
            <div className={styles.text}>
              <Text>
                {t("hello")}
                <br />
                <br />
                {t("develop_responsive_websites")}
                <br />
                <br />
                {t("Transforming_my_creativity")}
              </Text>
              <Button
                type="primary"
                mt="1.5rem"
                onClick={() => navigate("/about-me")}
              >
                {t("read_more")} {`->`}
              </Button>
            </div>
            <div className={styles.img}>
              <img src="/person2.png" alt="person" />
            </div>
          </div>
        </div>
      );
  }
};
