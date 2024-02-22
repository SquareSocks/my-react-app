import { memo } from "react";

const Todos = ({ todosProperties }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todosProperties.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);
