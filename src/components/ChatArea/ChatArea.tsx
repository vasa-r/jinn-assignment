import styles from "./ChatArea.module.css";
import Bot from "../../assets/chat.jpg";

const ChatArea = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.textContainer} ${styles.userCont}`}>
        <p className={styles.user}>Hello Jinn</p>
      </div>
      <div className={styles.mainBotCon}>
        <img src={Bot} alt="bot icon" />
        <div className={`${styles.textContainer} ${styles.botCont}`}>
          <p className={styles.bot}>
            Hello Anurag! How can I help you <br /> today?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
