import { FC } from "react";
import styles from "./CompleteApps.module.scss";
import { Text } from "../../../shared";
import { Card } from "../../../entities";
import { useTranslation } from "react-i18next";
import { useProjects } from "../../store/projects.store";

export const CompleteApps: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { projects } = useProjects();

  return (
    <div className={styles.complete_apps}>
      <Text type="h1">
        <span>#</span>
        {t("complete-apps")}
      </Text>
      <div className={styles.projects}>
        {projects.map((e) => (
          <Card key={e.id} {...e} />
        ))}
      </div>
    </div>
  );
};
