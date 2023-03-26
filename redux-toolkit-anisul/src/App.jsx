import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getAllTodos } from "./components/todosActions";

/**
 * Plan
 * 1. package install
 * 2. constance difine
 * 3. async action function create
 * 4. reducer create
 * 5. store create
 * 6. provide store
 * 7. use store in our react app
 * 8. appl style with css
 */

function App() {
  const { isLoading, todo, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h1>TODO APP</h1>
      <small>{isLoading && "Loading ..."}</small>
      <small>{error && `${error}`}</small>
      <Form>
        {todo.map((todo) => (
          <div key={todo.id}>
            <Form.Check
              type={"checkbox"}
              id={todo.id}
              label={todo.title}
              checked={todo.completed}
            />
          </div>
        ))}
      </Form>
    </div>
  );
}

export default App;
