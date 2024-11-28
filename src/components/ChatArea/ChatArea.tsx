import styles from "./ChatArea.module.css";
import Bot from "../../assets/chat.jpg";
import { useAppContext } from "../../context/AppContext";

const ChatArea = () => {
  const { bubblesData, textData } = useAppContext();
  const { botBg, userBg, botTextColor, userTextColor } = bubblesData;
  const { fontFam, fontSize } = textData;
  console.log(fontSize);
  return (
    <div className={styles.container} style={{ fontFamily: fontFam }}>
      <div className={`${styles.textContainer} ${styles.userCont}`}>
        <p
          className={styles.user}
          style={{
            color: userTextColor,
            backgroundColor: userBg,
            fontSize: fontSize,
          }}
        >
          Hello Jinn
        </p>
      </div>
      <div className={styles.mainBotCon}>
        <img src={Bot} alt="bot icon" />
        <div className={`${styles.textContainer} ${styles.botCont}`}>
          <p
            className={styles.bot}
            style={{
              color: botTextColor,
              backgroundColor: botBg,
              fontSize: fontSize,
            }}
          >
            Hello Anurag! How can I help you today?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
