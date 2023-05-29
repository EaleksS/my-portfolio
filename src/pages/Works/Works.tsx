import { FC } from "react";
import { CompleteApps, Layout } from "../../widgets";
import styles from "./Works.module.scss";
import { Text } from "../../shared";
import { useTranslation } from "react-i18next";

export const Works: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className={styles.title}>
        <Text type="h1">
          <span>/</span>
          {t("projects")}
        </Text>
        <Text>{t("List_of_my")}</Text>
      </div>
      <CompleteApps />
      {/* <SmallProjects /> */}
    </Layout>
  );
};
