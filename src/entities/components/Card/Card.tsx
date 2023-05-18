import { FC } from "react";
import styles from "./Card.module.scss";
import { Button, Text } from "../../../shared";
import { Project } from "../../interface/projects.interface";
import { Link } from "react-router-dom";

export const Card: FC<Project> = (props): JSX.Element => {
  return (
    <div className={styles.card}>
      <img src={props.img} alt="project" />
      <div className={styles.content}>
        <div className={styles.stack}>
          <Text>{props.stack.map((e) => e)}</Text>
        </div>
        <div className={styles.info}>
          <Text type="h2">{props.name}</Text>
          <Text mt="1rem">{props.desc}</Text>
          <div className={styles.btns}>
            {props.live && (
              <Link to={props.live} target="_blank">
                <Button type="primary">Live {`<~>`}</Button>
              </Link>
            )}
            <Link to={props.github} target="_blank">
              <Button>Github {`<~>`}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
