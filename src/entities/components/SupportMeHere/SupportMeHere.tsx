import { FC } from "react";
import styles from "./SupportMeHere.module.scss";
import { Text } from "../../../shared";
import { useTranslation } from "react-i18next";

export const SupportMeHere: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.support_me_here}>
      <Text type="h4">{t("Support_me_here")}</Text>
      <Text>5536914146466598</Text>
    </div>
  );
};
