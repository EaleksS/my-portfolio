import { FC } from "react";
import styles from "./AboutMe.module.scss";
import { Button, Text } from "../../../shared";
import { useNavigate } from "react-router-dom";

interface Props {
  type?: 1 | 2;
}

export const AboutMe: FC<Props> = ({ type = 1 }): JSX.Element => {
  const navigate = useNavigate();

  switch (type) {
    case 2:
      return (
        <div className={styles.about_me}>
          <Text type="h1">
            <span>/</span>about-me
          </Text>
          <Text mt="1rem">
            <span style={{ color: "#fff" }}>Who am i?</span>
          </Text>
          <div className={styles.content}>
            <div className={styles.text}>
              <Text mt="5rem">
                Hello, i’m Elias!
                <br />
                <br />
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
                <br />
                <br />
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </Text>
            </div>
            <div className={styles.img}>
              <img src="/person2.png" alt="person" />
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={styles.about_me}>
          <Text type="h1">
            <span>#</span>about-me
          </Text>
          <div className={styles.content}>
            <div className={styles.text}>
              <Text>
                Hello, i’m Elias!
                <br />
                <br />
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
                <br />
                <br />
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </Text>
              <Button
                type="primary"
                mt="1.5rem"
                onClick={() => navigate("/about-me")}
              >
                Read more {`->`}
              </Button>
            </div>
            <div className={styles.img}>
              <img src="/person2.png" alt="person" />
            </div>
          </div>
        </div>
      );
  }
};
