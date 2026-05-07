import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { TaskContext } from "../context/TaskContext";

function Home() {
  const {
    tasks,
    removeTask,
    editTask,
    toggleTask,
  } = useContext(TaskContext);

  const [editingId, setEditingId] = useState(null);

  const [editingText, setEditingText] = useState("");

  function handleEdit(task) {
    setEditingId(task.id);
    setEditingText(task.title);
  }

  function handleSave(task) {
    editTask({
      ...task,
      title: editingText,
    });

    setEditingId(null);
    setEditingText("");
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Task Manager</h1>

        <Link to="/add-task" className="add-button">
          Nova tarefa
        </Link>
      </div>

      {tasks.length === 0 && (
        <p className="empty-message">
          Nenhuma tarefa cadastrada.
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              {editingId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(event) =>
                      setEditingText(event.target.value)
                    }
                  />

                  <button onClick={() => handleSave(task)}>
                    Salvar
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={
                      task.completed ? "completed-task" : ""
                    }
                  >
                    {task.title}
                  </span>

                  <div className="task-actions">
                    <button
                      onClick={() => toggleTask(task.id)}
                    >
                      {task.completed
                        ? "Desfazer"
                        : "Concluir"}
                    </button>

                    <button onClick={() => handleEdit(task)}>
                      Editar
                    </button>

                    <button
                      onClick={() => removeTask(task.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;