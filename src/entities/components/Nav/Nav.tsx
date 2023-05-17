import { FC, useEffect, useState } from "react";
import styles from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";
import { useCloseBody } from "../../../shared";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useLang } from "../../store/lang.store";

export const Nav: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const pageUrl = window.location.pathname;

  const { t, i18n } = useTranslation();
  const { lang, setLang } = useLang();

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  // Закрытие по нажатию на документ, если нету stopPropagation()
  useCloseBody(setIsActive);

  return (
    <nav className={styles.nav}>
      <ul>
        <li
          className={`${pageUrl === "/" && styles.active}`}
          onClick={() => navigate("/")}
        >
          <span>#</span>
          {t("home")}
        </li>
        <li
          className={`${pageUrl === "/works" && styles.active}`}
          onClick={() => navigate("/works")}
        >
          <span>#</span>
          {t("works")}
        </li>
        <li
          className={`${pageUrl === "/about-me" && styles.active}`}
          onClick={() => navigate("/about-me")}
        >
          <span>#</span>
          {t("about-me")}
        </li>
        <li
          className={`${pageUrl === "/contacts" && styles.active}`}
          onClick={() => navigate("/contacts")}
        >
          <span>#</span>
          {t("contacts")}
        </li>
        <ol
          onClick={(e) => {
            e.stopPropagation();
            setIsActive((prev) => !prev);
          }}
        >
          {lang.toUpperCase()}
          <MdKeyboardArrowDown
            className={`${styles.icon} ${isActive && styles.active}`}
          />
          <div className={`${styles.lang_menu} ${isActive && styles.active}`}>
            <ul>
              <li onClick={() => setLang("ru")}>RU</li>
              <li onClick={() => setLang("en")}>EN</li>
            </ul>
          </div>
        </ol>
      </ul>
    </nav>
  );
};
