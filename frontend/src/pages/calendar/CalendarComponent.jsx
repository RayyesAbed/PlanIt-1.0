import UserPageMenu from "../../components/userPageMenu/UserPageMenu";
import "@mantine/dates/styles.css";
import "@mantine/core/styles/global.css";
import { Calendar } from "@mantine/dates";
import styles from "./CalendarComponent.module.css";

const CalendarComponent = () => {
  return (
    <div className={styles.calendarWrapper}>
      <UserPageMenu />
      <Calendar
        className={styles.calendarContainer}
        classNames={{
          calendarHeader: styles.calendarHeader,
        }}
      />
    </div>
  );
};

export default CalendarComponent;
