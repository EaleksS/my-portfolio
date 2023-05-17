import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />

      <BurgerMenu />
    </div>
  );
};
