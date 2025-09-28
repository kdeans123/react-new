import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title"

function App() {
  return (
    <div className="todo">
      <Title></Title>
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
    </div>
  );
}

export default App;
