import styles from "./App.module.css";
import ChatBot from "./components/ChatBot/ChatBot";
import CustomizeArea from "./components/CustomizeArea/CustomizeArea";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <CustomizeArea />
        <ChatBot />
      </div>
    </div>
  );
};

export default App;
