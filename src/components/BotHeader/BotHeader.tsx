import styles from "./BotHeader.module.css";
import Close from "../../assets/cross.svg";
import BotImage from "../../assets/chat.jpg";

const BotHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.botMeta}>
        <img src={BotImage} alt="BotImage" />
        <div className={styles.metaData}>
          <p className={styles.title}>Jinn Live</p>
          <p className={styles.subTitle}>Demo Bot</p>
        </div>
      </div>
      <div className={styles.close}>
        <img src={Close} alt="close icon" />
      </div>
    </div>
  );
};

export default BotHeader;