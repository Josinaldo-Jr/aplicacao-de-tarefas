import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { TaskContext } from "../context/TaskContext";

function AddTask() {
  const [title, setTitle] = useState("");

  const { addTask } = useContext(TaskContext);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      alert("Digite uma tarefa.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    addTask(newTask);

    setTitle("");

    navigate("/");
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Nova tarefa</h1>

        <Link to="/" className="back-button">
          Voltar
        </Link>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite sua tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <button type="submit">
          Adicionar tarefa
        </button>
      </form>
    </div>
  );
}

export default AddTask;