import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import { Calendar } from "@mantine/dates";
import { Box, Tooltip } from "@mantine/core";
import styles from "./CalendarComponent.module.css";
import dayjs from "dayjs";
import { useContext } from "react";
import { TaskContext } from "../../../contexts/TaskContext";

const CalendarComponent = () => {
  document.title = "Calendar";
  // disable dates that are older than 3 months
  const minSelectableDate = dayjs()
    .subtract(3, "month")
    .startOf("month")
    .toDate();

  const { state } = useContext(TaskContext);

  // Create a map of date strings to their completed/uncompleted task ratio
  const dateToRatio = {};

  state.forEach((task) => {
    const dueDate = dayjs(task.taskDueDate).format("YYYY-MM-DD");
    if (!dateToRatio[dueDate]) {
      dateToRatio[dueDate] = { completed: 0, uncompleted: 0 };
    }

    if (task.completed) {
      dateToRatio[dueDate].completed++;
    } else {
      dateToRatio[dueDate].uncompleted++;
    }
  });

  // Compute ratios
  const dateToRatioFinal = {};
  Object.keys(dateToRatio).forEach((date) => {
    const { completed, uncompleted } = dateToRatio[date];
    const total = completed + uncompleted;
    dateToRatioFinal[date] = total > 0 ? uncompleted / total : null;
  });

  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.calendarWrapper}>
        <Calendar
          classNames={{
            calendarHeader: styles.calendarHeader, // Calendar header root element
            calendarHeaderControl: styles.calendarHeaderControl, // Previous/next calendar header controls
            calendarHeaderLevel: styles.calendarHeaderLevel, // Level control (changes levels when clicked, month -> year -> decade)
            day: styles.day, // day
          }}
          minDate={minSelectableDate}
          renderDay={(date) => {
            const dateStr = dayjs(date).format("YYYY-MM-DD");
            const ratio = dateToRatioFinal[dateStr];

            // create a stats and assign it to the day's tasks, otherwise initialize an object with properties equal to 0
            const stats = dateToRatio[dateStr] || {
              completed: 0,
              uncompleted: 0,
            };

            const total = stats.completed + stats.uncompleted; // add completed and uncompleted tasks to total

            let bg = "transparent";
            if (ratio != null) {
              if (ratio > 0.5) bg = "#7a1616"; // red
              else if (ratio > 0) bg = "#baa218"; // yellow
              else bg = "#26ba18"; // green
            }

            // if total is greater than 0 for the hovered day, return the div with the respective tasks, otherwise return 'no tasks'
            const tooltipLabel =
              total > 0 ? (
                <div>
                  <div>Completed Tasks: {stats.completed}</div>
                  <div>Uncompleted Tasks: {stats.uncompleted}</div>
                  <div>Total Tasks: {total}</div>
                </div>
              ) : (
                "No tasks"
              );

            return (
              <Tooltip
                label={tooltipLabel}
                style={{
                  position: "absolute",
                  backgroundColor: "rgb(65, 65, 65)",
                  padding: "5px 10px",
                  borderRadius: "20px",
                }}
              >
                <Box
                  className={styles.styledDay}
                  style={{
                    backgroundColor: bg,
                  }}
                >
                  {date.getDate()}
                </Box>
              </Tooltip>
            );
          }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
