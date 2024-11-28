import styles from "./BotFooter.module.css";
import { useAppContext } from "../../context/AppContext";

const BotFooter = () => {
  const { buttonData } = useAppContext();
  const { icon, background, borderRadius } = buttonData;
  console.log(borderRadius);
  return (
    <div className={styles.container}>
      <input type="text" name="" id="" placeholder="Ask us anything..." />
      <div
        className={styles.btn}
        style={{
          backgroundColor: background,
          borderRadius: `${borderRadius}px`,
        }}
      >
        <img src={icon} alt="send" />
      </div>
    </div>
  );
};

export default BotFooter;
