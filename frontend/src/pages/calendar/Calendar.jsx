import UserPageMenu from "../../components/userPageMenu/UserPageMenu";
import styles from "./Calendar.module.css";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calendar = () => {
  return (
    <div className={styles.calendarWrapper}>
      <UserPageMenu />
      <DateCalendar className={styles.dateCalendar} />
    </div>
  );
};

export default Calendar;
