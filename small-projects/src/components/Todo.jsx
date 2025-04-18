import { useState } from "react";
import "../styles/todo.css";
import { nanoid } from "nanoid";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleChange = (e) => {
      setInput(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          text: input,
          id: nanoid()
        }
      ]);
      setInput("");
    };

    const removeTodo = (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
    
    return (
        <div className="container">
          <h1>Todo</h1>
          <input type="text" placeholder="New Todo" value={input} onChange={handleChange} />
          <button onClick={handleSubmit}>Add</button>
          <ul className="todos-list">
            {todos.map(({text, id}) => (
              <li className="todo" key={id}>
                <span>{text}</span>
                <button className="close" onClick={() => removeTodo(id)}>X</button>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default Todo;