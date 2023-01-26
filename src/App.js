import { Fragment } from "react";
import { TodoCounter } from "./TODOs/index";

const fakeTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Hacer popo", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <Fragment>
      <TodoCounter />
    </Fragment>
  );
}

export default App;
