import styles from "./app.module.scss";
import { useObserver, useService } from "feret";
import React, { FC, PropsWithChildren } from "react";
import { Counter } from "./Counter";

const Container: FC<PropsWithChildren<{ caption: string }>> = ({
  caption,
  children,
}) => {
  return (
    <div className={styles.container}>
      <h4>{caption}</h4>
      {children}
    </div>
  );
};

function Dashboard() {
  useObserver([Counter]);
  const counterServices = useService(Counter);
  return (
    <div className={styles.dashboard}>
      <label>Food Supply</label> <span>{counterServices.current}</span>
    </div>
  );
}

function IncrementButton() {
  const counterServices = useService(Counter);
  return (
    <button
      className={styles.button}
      onClick={() => counterServices.increment()}
    >
      Feed Me
    </button>
  );
}

export function App() {
  return (
    <Container caption="My name is Feret :)">
      <Dashboard />
      <IncrementButton />
    </Container>
  );
}
