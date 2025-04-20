import UserPageMenu from "../common/userPageMenu/UserPageMenu";
import styles from "./MyStory.module.css";

const MyStory = () => {
  document.title = "My Story";
  return (
    <div className={styles.wrapper}>
      <UserPageMenu />
      <div className={styles.myStoryWrapper}></div>
    </div>
  );
};

export default MyStory;
