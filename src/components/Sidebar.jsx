import React from "react";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  BarChart3,
  User,
  Settings,
  RotateCcw,
} from "lucide-react";
import { getProgressColor } from "../utils/progressUtils";
import ConfirmationDialog from "./ConfirmationDialog";

// Function to get month abbreviation (3-4 letters)
const getMonthAbbreviation = (monthName) => {
  // Extract the month name from formats like "April 2025"
  const month = monthName.split(" ")[0];

  // Custom abbreviations for each month
  const abbreviations = {
    Januari: "Jan",
    Februari: "Feb",
    Maret: "Mar",
    April: "Apr",
    Mei: "Mei",
    Juni: "Jun",
    Juli: "Jul",
    Agustus: "Aug",
    September: "Sep",
    Oktober: "Okt",
    November: "Nov",
    Desember: "Des",
  };

  return abbreviations[month] || month.substring(0, 3);
};

const Sidebar = ({
  months,
  activeMonth,
  setActiveMonth,
  overallProgress,
  sidebarOpen,
  setSidebarOpen,
  resetProgress,
  showResetDialog,
  isResetDialogOpen,
  closeResetDialog,
}) => {
  return (
    <>
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-24"
        } bg-indigo-900 text-white transition-all duration-300 flex flex-col scrollbar-hide`}
      >
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen ? (
            <h2 className="text-xl font-bold">Golang Roadmap</h2>
          ) : (
            <span className="text-xl font-bold">Go</span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-full hover:bg-indigo-800"
          >
            {sidebarOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>
        </div>

        <div className="px-4 py-2 border-t border-indigo-800">
          {sidebarOpen ? (
            <p className="text-xs text-indigo-300">PROGRESS KESELURUHAN</p>
          ) : null}
          <div className="mt-2 flex items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center">
              <BarChart3 size={18} />
            </div>
            {sidebarOpen && (
              <div className="ml-3">
                <div className="bg-indigo-800 h-2 w-36 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getProgressColor(overallProgress)}`}
                    style={{ width: `${overallProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs mt-1">{overallProgress}% Selesai</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide py-4">
          <ul className="space-y-1">
            {months.map((month) => (
              <li key={month.id}>
                <button
                  onClick={() => setActiveMonth(month.id)}
                  className={`w-full flex items-center px-3 py-2 ${
                    activeMonth === month.id
                      ? "bg-indigo-800"
                      : "hover:bg-indigo-800"
                  }`}
                >
                  <Calendar size={sidebarOpen ? 18 : 16} />

                  {sidebarOpen ? (
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {month.name}
                        </span>
                        <span className="text-xs bg-indigo-600 px-2 rounded-full">
                          {month.progress}%
                        </span>
                      </div>
                      <div className="mt-1 bg-indigo-700 h-1 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getProgressColor(
                            month.progress
                          )}`}
                          style={{ width: `${month.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <span className="ml-1 text-xs font-medium">
                      {getMonthAbbreviation(month.name)}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border-t border-indigo-800">
          <button
            onClick={showResetDialog}
            className={`mt-3 flex items-center justify-center w-full ${
              sidebarOpen ? "text-sm py-2" : "text-xs py-1"
            } bg-red-600 hover:bg-red-700 text-white rounded transition-colors`}
          >
            {sidebarOpen ? (
              <>
                <RotateCcw size={14} className="mr-1" />
                Reset Progress
              </>
            ) : (
              <RotateCcw size={14} />
            )}
          </button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={isResetDialogOpen}
        onClose={closeResetDialog}
        onConfirm={resetProgress}
        title="Reset Progress"
        message="Apakah Anda yakin ingin menghapus semua progress pembelajaran Anda? Tindakan ini tidak dapat dibatalkan dan semua status yang sudah selesai akan kembali ke awal."
      />
    </>
  );
};

export default Sidebar;