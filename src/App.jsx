import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCards from "./components/DashboardCards";
import WeeklyTaskList from "./components/WeeklyTaskList";
import useRoadmap from "./hooks/useRoadmap";
import { calculateOverallProgress } from "./utils/progressUtils";

function App() {
  const {
    months,
    activeMonth,
    currentMonth,
    setActiveMonth,
    toggleWeek,
    toggleTask,
    resetProgress,
    isResetDialogOpen,
    showResetDialog,
    closeResetDialog,
  } = useRoadmap();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Calculate overall progress
  const overallProgress = calculateOverallProgress(months);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        months={months}
        activeMonth={activeMonth}
        setActiveMonth={setActiveMonth}
        overallProgress={overallProgress}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        resetProgress={resetProgress}
        isResetDialogOpen={isResetDialogOpen}
        showResetDialog={showResetDialog}
        closeResetDialog={closeResetDialog}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <Header currentMonth={currentMonth} />

        {/* Dashboard Cards */}
        <DashboardCards currentMonth={currentMonth} />

        {/* Weekly Tasks */}
        <WeeklyTaskList
          currentMonth={currentMonth}
          onToggleWeek={toggleWeek}
          onToggleTask={toggleTask}
        />
      </div>
    </div>
  );
}

export default App;
