import { FC } from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../../entities";

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src="/Logo.svg" alt="logo" />
        <h2>Elias</h2>
      </div>
      <Nav />
    </header>
  );
};
