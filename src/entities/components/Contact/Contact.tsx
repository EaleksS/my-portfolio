import { FC } from "react";
import styles from "./Contact.module.scss";
import { Text } from "../../../shared";
import { BsDiscord } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from "react-i18next";

export const Contact: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.contact}>
      <Text type="h4">{t("Message_me_here")}</Text>
      <Text>
        <BsDiscord />
        Ernest#4200
      </Text>
      <Text>
        <IoIosMail />
        ealkser@gmail.com
      </Text>
    </div>
  );
};
