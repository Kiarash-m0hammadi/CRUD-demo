import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const saveTasks = (newTasks) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const handleSubmit = (task) => {
    if (editingTask) {
      const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t));
      saveTasks(updatedTasks);
      setEditingTask(null);
    } else {
      saveTasks([...tasks, task]);
    }
  };

  const handleDelete = (id) => {
    saveTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-6 md:py-10 lg:py-16">
      <div className="relative w-full px-4 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="relative px-4 py-6 bg-white mx-2 sm:mx-8 md:mx-12 lg:mx-16 shadow rounded-3xl sm:p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-full mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-4 sm:py-6 md:py-8 lg:py-10 text-base leading-6 space-y-4 md:space-y-6 lg:space-y-8 text-gray-700 sm:text-lg md:text-xl lg:text-2xl sm:leading-7">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                  Task Manager
                </h1>
                <TaskForm
                  task={editingTask}
                  onSubmit={handleSubmit}
                  onCancel={() => setEditingTask(null)}
                />
                <TaskList
                  tasks={tasks}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
