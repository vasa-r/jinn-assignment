import styles from "./ChatArea.module.css";
import Bot from "../../assets/chat.jpg";
import { useAppContext } from "../../context/AppContext";

const ChatArea = () => {
  const { bubblesData } = useAppContext();
  const { botBg, userBg, botTextColor, userTextColor } = bubblesData;
  return (
    <div className={styles.container}>
      <div className={`${styles.textContainer} ${styles.userCont}`}>
        <p
          className={styles.user}
          style={{ color: userTextColor, backgroundColor: userBg }}
        >
          Hello Jinn
        </p>
      </div>
      <div className={styles.mainBotCon}>
        <img src={Bot} alt="bot icon" />
        <div className={`${styles.textContainer} ${styles.botCont}`}>
          <p
            className={styles.bot}
            style={{ color: botTextColor, backgroundColor: botBg }}
          >
            Hello Anurag! How can I help you <br /> today?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
