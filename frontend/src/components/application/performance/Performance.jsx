import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import styles from "./Performance.module.css";
import { Chart } from "react-google-charts";
import dayjs from "dayjs";
import { useContext, useMemo } from "react";
import { TaskContext } from "../../../contexts/TaskContext";

const Performance = () => {
  const textStyle = { color: "white" };
  const { state } = useContext(TaskContext);

  const completedTasksDays = useMemo(() => {
    // initialize a counter
    let counter = 0;

    // create a days array and initialize the completed tasks to zeros
    const days = Array(7)
      .fill()
      .map((_, day) => [dayjs().subtract(day, "day").format("MM-DD"), 0]);

    // modify the completed tasks on days array based on number of completed tasks by looping through days and state (fetched tasks)
    days.forEach((tasksDayItem) => {
      state.forEach((task) => {
        if (
          task.completed && // check first if task is completed
          dayjs(task.taskDueDate).format("MM-DD") === tasksDayItem[0] // then check if task due date is equal to the day item
        ) {
          counter++;
        }
      });
      tasksDayItem[1] = counter; // Save the counter value in completed tasks in days
      counter = 0; // reset the counter
    });

    return [["Day", "Tasks Completed"], ...days];
  }, [state]);

  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.chartWrapper}>
        <Chart
          data={completedTasksDays}
          chartType="LineChart"
          height="600px"
          width="100%"
          options={{
            title: "My Performance",
            titleTextStyle: {
              ...textStyle,
            },
            backgroundColor: "black",
            vAxis: {
              title: "Number of Tasks completed",
              titleTextStyle: textStyle,
              textStyle,
            },
            hAxis: {
              title: "Date",
              format: "MM-DD",
              titleTextStyle: textStyle,
              textStyle,
            },
            legend: {
              textStyle,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Performance;
