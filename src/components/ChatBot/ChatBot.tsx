import BotFooter from "../BotFooter/BotFooter";
import BotHeader from "../BotHeader/BotHeader";
import ChatArea from "../ChatArea/ChatArea";
import styles from "./ChatBox.module.css";

const ChatBot = () => {
  return (
    <div className={styles.chatContainer}>
      <BotHeader />
      <ChatArea />
      <BotFooter />
    </div>
  );
};

export default ChatBot;
