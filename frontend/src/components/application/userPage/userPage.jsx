import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import styles from "./UserPage.module.css";

const UserPage = () => {
  return (
    <div className={styles.userPageWrapper}>
      <UserPageMenu />
    </div>
  );
};

export default UserPage;
