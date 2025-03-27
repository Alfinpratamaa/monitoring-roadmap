import React from "react";
import { getProgressColor } from "../utils/progressUtils";

const Header = ({ currentMonth }) => {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {currentMonth.name} - {currentMonth.title}
          </h1>
          <p className="text-gray-600">
            Target: Menguasai {currentMonth.title}
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-gray-700 mr-2">Progress:</span>
          <div className="w-48 bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColor(currentMonth.progress)}`}
              style={{ width: `${currentMonth.progress}%` }}
            ></div>
          </div>
          <span className="ml-2 text-gray-700 font-medium">
            {currentMonth.progress}%
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
