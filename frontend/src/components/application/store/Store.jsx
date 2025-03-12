import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import styles from "./Store.module.css";

const Store = () => {
  return (
    <div className={styles.userPageWrapper}>
      <UserPageMenu />
    </div>
  );
};

export default Store;
