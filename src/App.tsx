import styles from "./App.module.css";
import ChatBot from "./components/ChatBot/ChatBot";

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.appContainer}>
        <div></div>
        <ChatBot />
      </div>
    </div>
  );
};

export default App;
