import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TaskContext } from "../context/TaskContext";

function AddTask() {
  const [title, setTitle] = useState("");

  const { addTask } = useContext(TaskContext);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) return;

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
    <div>
      <h1>Add Task</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default AddTask;