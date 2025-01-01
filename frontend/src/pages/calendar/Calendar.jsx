import UserPageMenu from "../../components/userPageMenu/UserPageMenu";
import styles from "./Calendar.module.css";

const Calendar = () => {
  return (
    <div className={styles.calendarWrapper}>
      <UserPageMenu />
    </div>
  );
};

export default Calendar;
