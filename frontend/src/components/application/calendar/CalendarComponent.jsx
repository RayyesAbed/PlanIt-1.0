import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import "@mantine/dates/styles.css";
import "@mantine/core/styles/global.css";
import { Calendar } from "@mantine/dates";
import styles from "./CalendarComponent.module.css";
import dayjs from "dayjs";

const CalendarComponent = () => {
  const minSelectableDate = dayjs()
    .subtract(3, "month")
    .startOf("month")
    .toDate();

  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.calendarWrapper}>
        <Calendar
          classNames={{
            calendarHeader: styles.calendarHeader, // Calendar header root element
            calendarHeaderControl: styles.calendarHeaderControl, // Previous/next calendar header controls
            calendarHeaderLevel: styles.calendarHeaderLevel, // Level control (changes levels when clicked, month -> year -> decade)
            day: styles.day, // day
          }}
          minDate={minSelectableDate}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
