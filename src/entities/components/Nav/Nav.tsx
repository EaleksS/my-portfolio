import { FC, useState } from "react";
import styles from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";
import { useCloseBody } from "../../../shared";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Nav: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const pageUrl = window.location.pathname;

  const [isActive, setIsActive] = useState<boolean>(false);

  // Закрытие по нажатию на документ, если нету stopPropagation()
  useCloseBody(setIsActive);

  return (
    <nav className={styles.nav}>
      <ul>
        <li
          className={`${pageUrl === "/" && styles.active}`}
          onClick={() => navigate("/")}
        >
          <span>#</span>home
        </li>
        <li
          className={`${pageUrl === "/works" && styles.active}`}
          onClick={() => navigate("/works")}
        >
          <span>#</span>works
        </li>
        <li
          className={`${pageUrl === "/about-me" && styles.active}`}
          onClick={() => navigate("/about-me")}
        >
          <span>#</span>about-me
        </li>
        <li
          className={`${pageUrl === "/contacts" && styles.active}`}
          onClick={() => navigate("/contacts")}
        >
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
  );
};
