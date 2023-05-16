import { FC } from "react";
import styles from "./Main.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/UI/Button/Button";
import { Text } from "../../components/UI/Text/Text";
import { Dots } from "../../components/UI/Dots/Dots";
import { BsDiscord } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.preview}>
          <div className={styles.text}>
            <Text type="h1">
              Elias is a <span>web designer</span> and
              <span> front-end developer</span>
            </Text>

            <Text mt="2rem">
              He crafts responsive websites where technologies meet creativity
            </Text>

            <Button type="primary" mt="1.5rem">
              Contact me!!
            </Button>
          </div>
          <div className={styles.img}>
            <img src="/person.png" alt="person" />
            <div className={styles.img_title}>
              <div></div>
              <Text type="h3">
                <span>Currently working on</span> Portfolio
              </Text>
            </div>
          </div>
        </div>

        <div className={styles.quote}>
          <div className={styles.content}>
            <Text type="h2">With great power comes great electricity bill</Text>
            <div className={styles.dr}>
              <Text type="h2">- Dr. Who</Text>
            </div>
          </div>
        </div>

        <div className={styles.projects}>
          <div className={styles.title}>
            <Text type="h1">
              <span>#</span>projects
            </Text>
            <Text type="h3">
              View all <span className={styles.arrow}>{`~~>`}</span>
            </Text>
          </div>
          <div className={styles.items}>
            {[0, 1, 2].map((e) => (
              <div className={styles.item} key={e}>
                <img src="/item1.jpg" alt="project" />
                <div className={styles.content}>
                  <div className={styles.stack}>
                    <Text>HTML SCSS Python Flask HTML SCSS Python Flask</Text>
                  </div>
                  <div className={styles.info}>
                    <Text type="h2">ChertNodes</Text>
                    <Text mt="1rem">
                      Figma landing page about service for viewing chess
                      tournaments
                    </Text>
                    <div className={styles.btns}>
                      <Button type="primary">Live {`<~>`}</Button>
                      <Button>Github {`<~>`}</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skill}>
          <Text type="h1">
            <span>#</span>skills
          </Text>
          <div className={styles.gg}>
            <div className={styles.ill}>
              <Dots className={styles.dots1} />
              <Dots className={styles.dots2} />
              <div className={styles.square1}></div>
              <div className={styles.square2}></div>
            </div>
            <div className={styles.skills}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <div className={styles.title}>
                    <Text type="h4">Languages</Text>
                  </div>
                  <Text>TypeScript Lua Python JavaScript</Text>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.item}>
                  <div className={styles.title}>
                    <Text type="h4">Databases</Text>
                  </div>
                  <Text>TypeScript Lua Python JavaScript</Text>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>
                    <Text type="h4">Other</Text>
                  </div>
                  <Text>TypeScript Lua Python JavaScript</Text>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.item}>
                  <div className={styles.title}>
                    <Text type="h4">Tools</Text>
                  </div>
                  <Text>TypeScript Lua Python JavaScript</Text>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>
                    <Text type="h4">Frameworks</Text>
                  </div>
                  <Text>TypeScript Lua Python JavaScript</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <Button type="primary" mt="1.5rem">
                Read more {`->`}
              </Button>
            </div>
            <div className={styles.img}>
              <img src="/person2.png" alt="person" />
            </div>
          </div>
        </div>

        <div className={styles.contacts}>
          <Text type="h1">
            <span>#</span>contacts
          </Text>
          <div className={styles.content}>
            <Text>
              I’m interested in freelance opportunities. However, <br /> if you
              have other request or question, don’t <br /> hesitate to contact
              me
            </Text>
            <div className={styles.contact}>
              <Text type="h4">Message me here</Text>
              <Text>
                <BsDiscord />
                !Elias#3519
              </Text>
              <Text>
                <IoIosMail />
                elias@elias.me
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
