import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow"
        >
          <div>
            <h3 className="text-lg font-medium">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(task)}
              className="p-2 text-blue-600 hover:bg-blue-100 rounded-full"
            >
              <PencilIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="p-2 text-red-600 hover:bg-red-100 rounded-full"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
