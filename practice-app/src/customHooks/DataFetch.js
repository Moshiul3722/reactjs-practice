import React from "react";
import useFetch from "./useFetch";

const DataFetch = () => {
  const {data, isLoading, error}= useFetch("https://jsonplaceholder.typicode.com/todos")
  const loadingMessage = <p>Todo is loading</p>
  const errorMessage = <p>{error}</p>

  const todosElement =
  data &&
  data.map((todo) => {
      return <div>{todo.title}</div>;
    });

  

  return (
    <div>
      <h1>Todos</h1>
      {error && errorMessage}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
};

export default DataFetch;
