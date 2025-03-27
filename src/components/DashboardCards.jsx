import React from "react";
import { CheckCircle, Clock, Award } from "lucide-react";
import {
  getCompletedTasksCount,
  getPendingTasksCount,
} from "../utils/progressUtils";

const DashboardCards = ({ currentMonth }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
            <CheckCircle size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-gray-800 text-lg font-medium">Tugas Selesai</h2>
            <p className="text-3xl font-bold mt-1">
              {getCompletedTasksCount(currentMonth)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600">
            <Clock size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-gray-800 text-lg font-medium">Tugas Pending</h2>
            <p className="text-3xl font-bold mt-1">
              {getPendingTasksCount(currentMonth)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
            <Award size={24} />
          </div>
          <div className="ml-4">
            <h2 className="text-gray-800 text-lg font-medium">Total Minggu</h2>
            <p className="text-3xl font-bold mt-1">
              {currentMonth.weeks.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
