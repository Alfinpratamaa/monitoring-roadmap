import React from "react";
import TaskItem from "./TaskItem";

const DailyTaskList = ({ day, onToggleTask }) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center">
        <div className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {day.dayName} - {day.date}
        </div>
        <div className="ml-2 text-gray-500 text-xs">
          {day.tasks.filter((task) => task.completed).length} dari{" "}
          {day.tasks.length} selesai
        </div>
      </div>

      <ul className="mt-2 space-y-2">
        {day.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => onToggleTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default DailyTaskList;
