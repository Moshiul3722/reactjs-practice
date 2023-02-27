import React, { useEffect, useState } from "react";

const loadingMessage = <p>Todo is loading</p>

const DataFetch = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if(!res.ok){
            throw Error("fetching is not successful");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err)=>{
        setError(err.message);
        setIsLoading(false);
      });
    }, 3000);
  }, []);

  const todosElement =
    todos &&
    todos.map((todo) => {
      return <div>{todo.title}</div>;
    });

  

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
};

export default DataFetch;
