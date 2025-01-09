import UserPageMenu from "../../components/forExistingUsers/userPageMenu/UserPageMenu";

import styles from "./Tasks.module.css";

const Tasks = () => {
  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.tasksWrapper}></div>
    </div>
  );
};

export default Tasks;
