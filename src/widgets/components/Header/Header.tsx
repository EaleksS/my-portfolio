import { FC } from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../../entities";
import { useBurgerMenu } from "../../store/burgerMenu.store";

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { isActive, setIsActive } = useBurgerMenu();

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src="/Logo.svg" alt="logo" />
        <h2>Elias</h2>
      </div>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div
        className={`${styles.burger_menu} ${isActive && styles.active}`}
        onClick={() => setIsActive("reverse")}
      >
        <div className={styles.l1}></div>
        <div className={styles.l2}></div>
        <div className={styles.l3}></div>
      </div>
    </header>
  );
};
