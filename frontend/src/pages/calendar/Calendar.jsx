import UserPageMenu from "../../components/userPageMenu/UserPageMenu";
import styles from "./Calendar.module.css";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Calendar = () => {
  return (
    <div className={styles.calendarWrapper}>
      <UserPageMenu />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className={styles.dateCalendar} />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
