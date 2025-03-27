import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import DailyTaskList from "./DailyTaskList";
import { calculateWeekProgress } from "../utils/progressUtils";

const WeeklyTaskList = ({ currentMonth, onToggleWeek, onToggleTask }) => {
  return (
    <div className="px-6 pb-8">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">
            Checklist Mingguan
          </h3>
        </div>

        <div className="divide-y divide-gray-200">
          {currentMonth.weeks.map((week) => (
            <div key={week.id}>
              <div
                className="px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => onToggleWeek(currentMonth.id, week.id)}
              >
                <h4 className="text-gray-700 font-medium">{week.name}</h4>
                <div className="flex items-center">
                  {week.days.length > 0 && (
                    <div className="flex items-center mr-4">
                      <span className="text-sm text-gray-600 mr-2">
                        {week.days
                          .flatMap(
                            (day) =>
                              day.tasks.filter((task) => task.completed).length
                          )
                          .reduce((a, b) => a + b, 0)}{" "}
                        / {week.days.flatMap((day) => day.tasks).length}
                      </span>
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-600"
                          style={{
                            width: `${calculateWeekProgress(week)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                  {week.expanded ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>
              </div>

              {week.expanded && (
                <div className="px-6 py-4 bg-gray-50">
                  {week.days.map((day) => (
                    <DailyTaskList
                      key={day.id}
                      day={day}
                      onToggleTask={(taskId) =>
                        onToggleTask(currentMonth.id, week.id, day.id, taskId)
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyTaskList;
