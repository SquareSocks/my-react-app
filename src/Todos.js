import { memo } from "react";
import styles from "./my-style.module.css";

const Todos = ({ todosProperties }) => {
  console.log("child render");
  return (
    <>
      <h2 className={styles.bigblue}>My Todos</h2>
      {todosProperties.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);
