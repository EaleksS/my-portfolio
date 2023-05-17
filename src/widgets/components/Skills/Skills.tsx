import { FC } from "react";
import styles from "./Skills.module.scss";
import { Dots, Text } from "../../../shared";
import { Skill } from "../../../entities";

interface Props {
  type?: 1 | 2;
}

export const Skills: FC<Props> = ({ type = 1 }): JSX.Element => {
  switch (type) {
    case 2:
      return (
        <div className={styles.skill}>
          <Text type="h1">
            <span>#</span>skills
          </Text>
          <div className={styles.block}>
            <Skill title="Languages" desc="TypeScript Lua Python JavaScript" />
            <Skill title="Databases" desc="TypeScript Lua Python JavaScript" />
            <Skill title="Other" desc="TypeScript Lua Python JavaScript TypeScript Lua Python JavaScript TypeScript Lua Python JavaScript" />
            <Skill title="Tools" desc="TypeScript Lua Python JavaScript" />
            <Skill title="Frameworks" desc="TypeScript Lua Python JavaScript" />
          </div>
        </div>
      );

    default:
      return (
        <div className={styles.skill}>
          <Text type="h1">
            <span>#</span>skills
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
                  title="Languages"
                  desc="TypeScript Lua Python JavaScript"
                />
              </div>
              <div className={styles.items}>
                <Skill
                  title="Databases"
                  desc="TypeScript Lua Python JavaScript"
                />
                <Skill title="Other" desc="TypeScript Lua Python JavaScript" />
              </div>
              <div className={styles.items}>
                <Skill title="Tools" desc="TypeScript Lua Python JavaScript" />
                <Skill
                  title="Frameworks"
                  desc="TypeScript Lua Python JavaScript"
                />
              </div>
            </div>
          </div>
        </div>
      );
  }
};
