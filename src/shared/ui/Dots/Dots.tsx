import { FC } from "react";
import styles from "./Dotsx.module.scss";

interface Props {
  className?: string;
}

export const Dots: FC<Props> = ({ className = "" }): JSX.Element => {
  return (
    <div className={`${styles.dots} ${className}`}>
      <img src="/Dots.svg" alt="Dots" />
    </div>
  );
};
