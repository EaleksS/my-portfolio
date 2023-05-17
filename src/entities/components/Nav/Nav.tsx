import { FC, useState } from "react";
import styles from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";
import { useCloseBody } from "../../../shared";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Nav: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState<boolean>(false);

  // Закрытие по нажатию на документ, если нету stopPropagation()
  useCloseBody(setIsActive);

  return (
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
  );
};
