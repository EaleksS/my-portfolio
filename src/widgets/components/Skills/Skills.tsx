import { FC } from "react";
import styles from "./Skills.module.scss";
import { Dots, Text } from "../../../shared";
import { Skill } from "../../../entities";
import { useTranslation } from "react-i18next";

interface Props {
  type?: 1 | 2;
}

export const Skills: FC<Props> = ({ type = 1 }): JSX.Element => {
  const { t } = useTranslation();

  switch (type) {
    case 2:
      return (
        <div className={styles.skill}>
          <Text type="h1">
            <span>#</span>
            {t("skills")}
          </Text>
          <div className={styles.block}>
            <Skill title={t("Languages")} desc="TypeScript NodeJs JavaScript" />
            <Skill title={t("Databases")} desc="SQLite PostgreSQL Mongo" />
            <Skill
              title={t("Tools")}
              desc="VSCode Linux Figma Git Font Awesome"
            />
            <Skill title={t("Other")} desc="HTML CSS SCSS REST JSX TSX" />
            <Skill title={t("Frameworks")} desc="React NextJs NestJs" />
          </div>
        </div>
      );

    default:
      return (
        <div className={styles.skill}>
          <Text type="h1">
            <span>#</span>
            {t("skills")}
          </Text>
          <div className={styles.gg}>
            <div className={styles.ill}>
              <Dots className={styles.dots1} />
              <Dots className={styles.dots2} />
              <div className={styles.square1}></div>
              <div className={styles.square2}></div>
            </div>
            <div className={styles.skills}>
              <div className={styles.items}>
                <Skill
                  title={t("Languages")}
                  desc="TypeScript NodeJs JavaScript"
                />
              </div>
              <div className={styles.items}>
                <Skill title={t("Databases")} desc="SQLite PostgreSQL Mongo" />
                <Skill title={t("Other")} desc="HTML CSS SCSS REST JSX TSX" />
              </div>
              <div className={styles.items}>
                <Skill
                  title={t("Tools")}
                  desc="VSCode Linux Figma Git Font Awesome"
                />
                <Skill title={t("Frameworks")} desc="React NextJs NestJs" />
              </div>
            </div>
          </div>
        </div>
      );
  }
};
