import { ContentContainer } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import styles from "./Container.module.css";

export type ContainerProps = {
  id?: string;
};


const Container: FunctionComponent<ContainerProps> = ({ children, id}) => {
  return <ContentContainer id = {id} className={styles.container}>{children}</ContentContainer>;
};

export default Container;
