import styles from "./StoryCard.module.css";

const StoryCard = ({ story, storyNumber }) => {
  return (
    <div className={styles.storyCard}>
      <h3>Story {storyNumber}</h3>
    </div>
  );
};

export default StoryCard;
