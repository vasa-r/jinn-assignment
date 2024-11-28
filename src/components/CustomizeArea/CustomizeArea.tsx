import Button from "../CustomDesigns/Button/Button";
import ChatBubbles from "../CustomDesigns/ChatBubbles/ChatBubbles";
import Text from "../CustomDesigns/Text/Text";
import TitleArea from "../CustomDesigns/TitleArea/TitleArea";
import styles from "./CustomizeArea.module.css";
const CustomizeArea = () => {
  return (
    <div className={styles.root}>
      <h1>Shape Your Bot’s Personality</h1>
      <div className={styles.area}>
        <Button />
        <TitleArea />
        <ChatBubbles />
        <Text />
      </div>
    </div>
  );
};

export default CustomizeArea;
