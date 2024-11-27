import styles from "./BotFooter.module.css";
import Send from "../../assets/send.svg";

const BotFooter = () => {
  return (
    <div className={styles.container}>
      <input type="text" name="" id="" placeholder="Ask us anything..." />
      <img src={Send} alt="send" />
    </div>
  );
};

export default BotFooter;
