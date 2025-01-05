import UserPageMenu from "../../components/forExistingUsers/userPageMenu/UserPageMenu";
import styles from "./Performance.module.css";
import { LineChart } from "@mantine/charts";

const Performance = () => {
  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.chartWrapper}></div>
    </div>
  );
};

export default Performance;
