import { FC, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../../entities";
import { useBurgerMenu } from "../../store/burgerMenu.store";

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { isActive, setIsActive } = useBurgerMenu();

  // Плавный переход
  const sectionRef = useRef<HTMLDivElement>(null);
  function scrollToMyElement() {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToMyElement();
  }, []);
  // /Плавный переход

  return (
    <header className={styles.header} ref={sectionRef}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src="/Logo.svg" alt="logo" />
        <h2>Ernest</h2>
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
