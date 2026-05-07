import { useContext } from "react";
import { Link } from "react-router-dom";

import { TaskContext } from "../context/TaskContext";

function Home() {
  const { tasks, removeTask } = useContext(TaskContext);

  return (
    <div>
      <h1>Task Manager</h1>

      <Link to="/add-task">
        Adicionar tarefa
      </Link>

      {tasks.length === 0 && (
        <p>Nenhuma tarefa cadastrada.</p>
      )}

      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}

              <button onClick={() => removeTask(task.id)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;