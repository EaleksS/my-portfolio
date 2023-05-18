import { FC } from "react";
import styles from "./SmallProjects.module.scss";
import { Text } from "../../../shared";
import { Card } from "../../../entities";
import { useTranslation } from "react-i18next";
import { useProjects } from "../../store/projects.store";

export const SmallProjects: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { projects } = useProjects();

  return (
    <div className={styles.smallProjects}>
      <Text type="h1">
        <span>#</span>
        {t("small-projects")}
      </Text>
      <div className={styles.projects}>
        {projects.map((e) => (
          <Card key={e.id} {...e} />
        ))}
      </div>
    </div>
  );
};
