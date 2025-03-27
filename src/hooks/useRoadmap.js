import { useState, useEffect } from "react";
import initialMonths from "../data/roadmapData";
import { updateAllProgress } from "../utils/progressUtils";

const useRoadmap = () => {
  // State for roadmap data
  const [months, setMonths] = useState(() => {
    const savedData = localStorage.getItem("roadmapData");
    return savedData ? JSON.parse(savedData) : updateAllProgress(initialMonths);
  });

  // State for active month
  const [activeMonth, setActiveMonth] = useState(months[0].id);

  // State for reset dialog
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("roadmapData", JSON.stringify(months));
  }, [months]);

  // Get current month data
  const currentMonth = months.find((month) => month.id === activeMonth);

  // Toggle week expansion
  const toggleWeek = (monthId, weekId) => {
    setMonths(
      months.map((month) => {
        if (month.id === monthId) {
          return {
            ...month,
            weeks: month.weeks.map((week) => {
              if (week.id === weekId) {
                return { ...week, expanded: !week.expanded };
              }
              return week;
            }),
          };
        }
        return month;
      })
    );
  };

  // Toggle task completion
  const toggleTask = (monthId, weekId, dayId, taskId) => {
    const updatedMonths = months.map((month) => {
      if (month.id === monthId) {
        const updatedWeeks = month.weeks.map((week) => {
          if (week.id === weekId) {
            const updatedDays = week.days.map((day) => {
              if (day.id === dayId) {
                const updatedTasks = day.tasks.map((task) => {
                  if (task.id === taskId) {
                    return { ...task, completed: !task.completed };
                  }
                  return task;
                });
                return { ...day, tasks: updatedTasks };
              }
              return day;
            });
            return { ...week, days: updatedDays };
          }
          return week;
        });
        return { ...month, weeks: updatedWeeks };
      }
      return month;
    });

    // Update progress for all months
    setMonths(updateAllProgress(updatedMonths));
  };

  // Fungsi untuk menunjukkan dialog reset
  const showResetDialog = () => {
    setIsResetDialogOpen(true);
  };

  // Fungsi untuk menutup dialog reset
  const closeResetDialog = () => {
    setIsResetDialogOpen(false);
  };

  // Reset all progress (now called from dialog)
  const resetProgress = () => {
    localStorage.removeItem("roadmapData");
    setMonths(updateAllProgress(initialMonths));
    setActiveMonth(initialMonths[0].id);
  };

  return {
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
  };
};

export default useRoadmap;
