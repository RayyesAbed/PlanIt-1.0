import styles from "./StoryCard.module.css";

const StoryCard = ({ story }) => {
  return (
    <div className={styles.storyCard}>
      <h3>{story.storyTitle}</h3>
    </div>
  );
};

export default StoryCard;
