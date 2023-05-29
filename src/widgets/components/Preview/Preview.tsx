import { FC, useState } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "../../../shared";
import { useTranslation } from "react-i18next";
import { ContactMe } from "../ContactMe/ContactMe";

export const Preview: FC = (): JSX.Element => {
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <div className={styles.preview}>
        <div className={styles.text}>
          <Text type="h1">
            {/* Ernest is a <span style={{ animation: "none" }}>web designer</span> and
        <span style={{ animation: "none" }}> front-end developer</span> */}
            {t("Ptitle").split("|")[0]}
            <span>{t("Ptitle").split("|")[1]}</span>
            {t("Ptitle").split("|")[2]}
            <span>{t("Ptitle").split("|")[3]}</span>
          </Text>

          <Text mt="2rem">{t("Pdesc")}</Text>

          <Button type="primary" mt="1.5rem" onClick={() => setIsActive(true)}>
            {t("Contact_me")}
          </Button>
        </div>
        <div className={styles.img}>
          <img src="/person.png" alt="person" />
          <div className={styles.img_title}>
            <div></div>
            <Text type="h3">
              {/* <span>Currently working on</span> Portfolio */}
              <span>{t("Currently_working").split("|")[0]}</span>
              {t("Currently_working").split("|")[1]}
            </Text>
          </div>
        </div>
      </div>
      <ContactMe isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};
