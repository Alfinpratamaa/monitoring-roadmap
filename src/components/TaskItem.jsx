import React from "react";
import { CheckCircle, Circle } from "lucide-react";

const TaskItem = ({ task, onToggle }) => {
  return (
    <li
      className="flex items-start cursor-pointer hover:opacity-75 transition-opacity duration-200 ease-in-out"
      onClick={onToggle}
    >
      <button className="mt-0.5 flex-shrink-0 text-gray-400 hover:text-indigo-600 focus:outline-none">
        {task.completed ? (
          <CheckCircle className="text-green-500" size={18} />
        ) : (
          <Circle size={18} />
        )}
      </button>
      <span
        className={`ml-2 ${
          task.completed ? "line-through text-gray-400" : "text-gray-700"
        }`}
      >
        {task.text}
      </span>
    </li>
  );
};

export default TaskItem;
