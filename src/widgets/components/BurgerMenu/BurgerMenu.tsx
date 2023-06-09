import { FC, useEffect } from "react";
import styles from "./BurgerMenu.module.scss";
import { Modal, Nav } from "../../../entities";
import { useBurgerMenu } from "../../store/burgerMenu.store";
import { useCloseRedirect } from "../../../shared/lib/hooks/useCloseRedirect";

export const BurgerMenu: FC = (): JSX.Element => {
  const { isActive, setIsActive } = useBurgerMenu();

  useCloseRedirect(setIsActive);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <div className={styles.burger_menu}>
        <Nav />
      </div>
    </Modal>
  );
};
