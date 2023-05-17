import { FC } from "react";
import styles from "./SmallProjects.module.scss";
import { Text } from "../../../shared";
import { Card } from "../../../entities";
import { useTranslation } from "react-i18next";

export const SmallProjects: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.smallProjects}>
      <Text type="h1">
        <span>#</span>{t('small-projects')}
      </Text>
      <div className={styles.projects}>
        {[0, 1, 2, 3, 4].map((e) => (
          <Card key={e} />
        ))}
      </div>
    </div>
  );
};
