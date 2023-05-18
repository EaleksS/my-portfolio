import { FC } from "react";
import styles from "./Contact.module.scss";
import { Text, useCopyToClipboard } from "../../../shared";
import { BsDiscord } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from "react-i18next";

export const Contact: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <div className={styles.contact}>
      <Text type="h4">{t("Message_me_here")}</Text>
      <div onClick={() => copy("Ernest#4200")}>
        <Text>
          <BsDiscord />
          Ernest#4200
        </Text>
      </div>
      <div onClick={() => copy("ealkser@gmail.com")}>
        <Text>
          <IoIosMail />
          ealkser@gmail.com
        </Text>
      </div>
      <div className={`${styles.is_copied} ${isCopied && styles.active}`}>
        скопировано
      </div>
    </div>
  );
};
