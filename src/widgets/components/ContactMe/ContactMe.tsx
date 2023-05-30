import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Modal } from "../../../entities";
import styles from "./ContactMe.module.scss";
import { Button, Input, Loader, useWindowDimensions } from "../../../shared";
import emailjs from "@emailjs/browser";
import { IoClose } from "react-icons/io5";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const ContactMe: FC<Props> = ({
  setIsActive,
  isActive,
}): JSX.Element => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (isActive && width < 601) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive, width]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [valueName, setValueName] = useState<string>("");
  const [valueNameErr, setValueNameErr] = useState<boolean>(false);

  const [valueEmail, setValueEmail] = useState<string>("");
  const [valueEmailErr, setValueEmailErr] = useState<boolean>(false);

  const [valueTitle, setValueTitle] = useState<string>("");
  const [valueTitleErr, setValueTitleErr] = useState<boolean>(false);

  const [valueMessage, setValueMessage] = useState<string>("");
  const [valueMessageErr, setValueMessageErr] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSend = () => {
    setValueNameErr(true);
    setValueEmailErr(true);
    setValueTitleErr(true);
    setValueMessageErr(true);

    if (!valueName || !valueEmail || !valueMessage || !valueTitle) return;
    if (!formRef.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_im9b81j",
        "template_63pb787",
        formRef.current,
        "xr-fBIcwmUcRF8sM5"
      )
      .then(
        () => {
          setIsLoading(false);
          alert("Сообщение успешно отправлено");
          setIsActive(false);

          setValueNameErr(false);
          setValueEmailErr(false);
          setValueTitleErr(false);
          setValueMessageErr(false);
          setValueName("");
          setValueEmail("");
          setValueTitle("");
          setValueMessage("");
        },
        (error) => {
          alert(`Ошибка:"${error}", попробуйте позже`);
          setIsLoading(false);
        }
      );
  };

  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <form
        ref={formRef}
        className={styles.contact_me}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={styles.close}>
          <IoClose onClick={() => setIsActive(false)} />
        </div>
        <div className={styles.user}>
          <Input
            placholder="Name"
            value={valueName}
            setValue={setValueName}
            error={!valueName && valueNameErr ? true : false}
            name="to_name"
          />
          <Input
            placholder="Email"
            value={valueEmail}
            setValue={setValueEmail}
            error={!valueEmail && valueEmailErr ? true : false}
            name="email"
          />
        </div>
        <Input
          placholder="Title"
          value={valueTitle}
          setValue={setValueTitle}
          error={!valueTitle && valueTitleErr ? true : false}
          name="from_name"
        />
        <Input
          placholder="Message"
          type="textarea"
          value={valueMessage}
          setValue={setValueMessage}
          error={!valueMessage && valueMessageErr ? true : false}
          name="message"
        />
        <Button type="primary" onClick={handleSend}>
          {isLoading ? (
            <Loader w={35} h={35} className={styles.loader} />
          ) : (
            "Send"
          )}
        </Button>
      </form>
    </Modal>
  );
};
