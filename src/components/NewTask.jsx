import { useState } from "react";

const NewTask = ({ onAdd,tasks }) => {
  const [task, setTasks] = useState("");

  const handleAddTask = (data) => {
    if (data.trim() !== "") {
      onAdd(task);
      setTasks("");
    }
  };

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <input
          type="text"
          className="border-1 rounded-md px-2  w-2/3"
          onChange={(e) => setTasks(e.target.value)}
          value={task}
        />
        <button onClick={() => handleAddTask(task)}>Add Task</button>
      </div>

      <div className="mt-2">
        {tasks.length > 0 ? (
            <ul>
                {tasks.map((data)=>(
                    <li key={data.id} className="flex justify-between">
                        <span>{data.task}</span>
                        <button>Clear</button>
                    </li>
                ))}
            </ul>
        ) : (
            <p>There is no Tasks available . create a new Tasks</p>
        ) }
      </div>
    </div>
  );
};

export default NewTask;
