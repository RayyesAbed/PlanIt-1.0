import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import styles from "./Performance.module.css";
import { Chart } from "react-google-charts";

// some dummy data, to be replaced later by the backend fetches
const data = [
  ["x", "tasks completed per day"],
  ["03-14", 2],
  ["03-17", 3],
  ["03-18", 1],
  ["03-20", 7],
  ["03-23", 5],
];

const Performance = () => {
  const textStyle = { color: "white" };

  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.chartWrapper}>
        <Chart
          data={data}
          chartType="LineChart"
          height="600px"
          width="100%"
          options={{
            title: "My Performance",
            titleTextStyle: {
              ...textStyle,
            },
            curveType: "function",
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
