import { FC, useState } from "react";
import styles from "./Header.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCloseBody } from "../../hooks/useCloseBody";

export const Header: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  // Закрытие по нажатию на документ, если нету stopPropagation()
  useCloseBody(setIsActive);

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src="/Logo.svg" alt="logo" />
        <h2>Elias</h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.active} onClick={() => navigate("/")}>
            <span>#</span>home
          </li>
          <li onClick={() => navigate("/works")}>
            <span>#</span>works
          </li>
          <li onClick={() => navigate("/about-me")}>
            <span>#</span>about-me
          </li>
          <li onClick={() => navigate("/contacts")}>
            <span>#</span>contacts
          </li>
          <ol
            onClick={(e) => {
              e.stopPropagation();
              setIsActive((prev) => !prev);
            }}
          >
            EN
            <MdKeyboardArrowDown
              className={`${styles.icon} ${isActive && styles.active}`}
            />
            <div className={`${styles.lang_menu} ${isActive && styles.active}`}>
              <ul>
                <li>RU</li>
                <li>EN</li>
              </ul>
            </div>
          </ol>
        </ul>
      </nav>
    </header>
  );
};
