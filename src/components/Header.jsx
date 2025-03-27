import React from "react";
import { getProgressColor } from "../utils/progressUtils";

const Header = ({ currentMonth }) => {
  return (
    <header className="bg-white shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-6 py-4 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            {currentMonth.name} - {currentMonth.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            Target: Menguasai {currentMonth.title}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mx-auto md:mx-0 space-y-2 md:space-y-0 md:space-x-4">
          <span className="text-xs sm:text-sm md:text-base text-gray-700">
            Progress:
          </span>
          <div className="w-32 sm:w-48 bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColor(currentMonth.progress)}`}
              style={{ width: `${currentMonth.progress}%` }}
            ></div>
          </div>
          <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
            {currentMonth.progress}%
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
