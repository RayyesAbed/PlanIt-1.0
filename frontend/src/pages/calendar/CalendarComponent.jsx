import UserPageMenu from "../../components/userPageMenu/UserPageMenu";
import "@mantine/dates/styles.css";
import "@mantine/core/styles/global.css";
import { Calendar } from "@mantine/dates";
import styles from "./CalendarComponent.module.css";

const CalendarComponent = () => {
  return (
    <div className={styles.calendarWrapper}>
      <UserPageMenu />
      <div className={styles.calendarContainer}>
        <Calendar
          classNames={{
            calendarHeader: styles.calendarHeader,
          }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
