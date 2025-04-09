import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import { Calendar } from "@mantine/dates";
import { Box } from "@mantine/core";
import styles from "./CalendarComponent.module.css";
import dayjs from "dayjs";
import { useContext } from "react";
import { TaskContext } from "../../../contexts/TaskContext";

const CalendarComponent = () => {
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

            let bg = "transparent";
            if (ratio != null) {
              if (ratio > 0.5) bg = "#7a1616"; // red
              else if (ratio > 0) bg = "#baa218"; // yellow
              else bg = "#26ba18"; // green
            }

            return (
              <Box
                className={styles.styledDay}
                style={{
                  backgroundColor: bg,
                }}
              >
                {date.getDate()}
              </Box>
            );
          }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
