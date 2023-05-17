import { FC } from "react";
import styles from "./Quote.module.scss";
import { Text } from "../../../shared";
import { useTranslation } from "react-i18next";

export const Quote: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.quote}>
      <div className={styles.content}>
        <Text type="h2">{t("With_great")}</Text>
        <div className={styles.dr}>
          <Text type="h2">{t("Dr_Who")}</Text>
        </div>
      </div>
    </div>
  );
};
