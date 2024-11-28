import styles from "./BotFooter.module.css";
import Send from "../../assets/send.svg";

const BotFooter = () => {
  return (
    <div className={styles.container}>
      <input type="text" name="" id="" placeholder="Ask us anything..." />
      <div className={styles.btn}>
        <img src={Send} alt="send" />
      </div>
    </div>
  );
};

export default BotFooter;
