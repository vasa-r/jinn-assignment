import styles from "./App.module.css";
import ChatBot from "./components/ChatBot/ChatBot";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div></div>
        <ChatBot />
      </div>
    </div>
  );
};

export default App;
