import UserPageMenu from "../../components/forExistingUsers/userPageMenu/UserPageMenu";
import styles from "./Performance.module.css";
import { Chart } from "react-google-charts";

const Performance = () => {
  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.chartWrapper}></div>
    </div>
  );
};

export default Performance;
