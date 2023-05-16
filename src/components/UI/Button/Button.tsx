import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  type?: "default" | "primary";
  children: ReactNode;
  mt?: string;
}

export const Button: FC<Props> = ({
  type = "default",
  children,
  mt = "0",
}): JSX.Element => {
  switch (type) {
    case "primary":
      return (
        <button
          className={`${styles.btn} ${styles.primary}`}
          style={{ marginTop: mt }}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          className={`${styles.btn} ${styles.default}`}
          style={{ marginTop: mt }}
        >
          {children}
        </button>
      );
  }
};
