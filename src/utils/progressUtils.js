// Calculate progress for a single month
export const calculateMonthProgress = (month) => {
  let totalTasks = 0;
  let completedTasks = 0;

  month.weeks.forEach((week) => {
    week.days.forEach((day) => {
      totalTasks += day.tasks.length;
      completedTasks += day.tasks.filter((task) => task.completed).length;
    });
  });

  return totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
};

// Update progress for all months
export const updateAllProgress = (months) => {
  return months.map((month) => ({
    ...month,
    progress: calculateMonthProgress(month),
  }));
};

// Calculate overall progress across all months
export const calculateOverallProgress = (months) => {
  return Math.round(
    months.reduce((sum, month) => sum + month.progress, 0) / months.length
  );
};

// Get progress color based on percentage
export const getProgressColor = (progress) => {
  if (progress < 30) return "bg-red-500";
  if (progress < 70) return "bg-yellow-500";
  return "bg-green-500";
};

// Calculate week progress
export const calculateWeekProgress = (week) => {
  const totalTasks = week.days.flatMap((day) => day.tasks).length;
  const completedTasks = week.days.flatMap((day) =>
    day.tasks.filter((task) => task.completed)
  ).length;

  return totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
};

// Calculate completed tasks count for a month
export const getCompletedTasksCount = (month) => {
  return month.weeks
    .flatMap((week) =>
      week.days.flatMap(
        (day) => day.tasks.filter((task) => task.completed).length
      )
    )
    .reduce((a, b) => a + b, 0);
};

// Calculate pending tasks count for a month
export const getPendingTasksCount = (month) => {
  return month.weeks
    .flatMap((week) =>
      week.days.flatMap(
        (day) => day.tasks.filter((task) => !task.completed).length
      )
    )
    .reduce((a, b) => a + b, 0);
};
