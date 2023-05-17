import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const Router: FC<Props> = ({ children }): JSX.Element => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
