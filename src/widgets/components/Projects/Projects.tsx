import { FC } from "react";
import styles from "./Projects.module.scss";
import { Text } from "../../../shared";
import { Card } from "../../../entities";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Projects: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.projects}>
      <div className={styles.title}>
        <Text type="h1">
          <span>#</span>
          {t("projects")}
        </Text>
        <div onClick={() => navigate("/works")}>
          <Text type="h3">
            {t("View_all")} <span className={styles.arrow}>{`~~>`}</span>
          </Text>
        </div>
      </div>
      <div className={styles.items}>
        {[0, 1, 2].map((e) => (
          <Card key={e} />
        ))}
      </div>
    </div>
  );
};
