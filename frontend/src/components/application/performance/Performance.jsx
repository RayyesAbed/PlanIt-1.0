import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import styles from "./Performance.module.css";
import { Chart } from "react-google-charts";

// some dummy data, to be replaced later by the backend fetches
const data = [
  ["x", "dogs"],
  [0, 0],
  [1, 10],
  [2, 23],
];

const Performance = () => {
  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.chartWrapper}>
        <Chart
          data={data}
          chartType="LineChart"
          height="600px"
          width="100%"
          options={{ title: "My Performance", curveType: "function" }}
        />
      </div>
    </div>
  );
};

export default Performance;
