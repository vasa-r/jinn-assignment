/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { buttonColors } from "../../../util/constants";
import Card from "../../Card/Card";
import styles from "./ChatBubbles.module.css";
import { useAppContext } from "../../../context/AppContext";

const ChatBubbles = () => {
  const { bubblesData, updateBubblesData } = useAppContext();
  const [botbg, setBotBg] = useState(bubblesData.botBg);
  const [botTxt, setBotTxt] = useState(bubblesData.botTextColor);
  const [userBg, setUserBg] = useState(bubblesData.userBg);
  const [userTxt, setUserTxt] = useState(bubblesData.userTextColor);

  useEffect(() => {
    updateBubblesData(botbg, botTxt, userBg, userTxt);
  }, [botbg, botTxt, userBg, userTxt]);

  const handleBotBg = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const selected = e.currentTarget.getAttribute("bot-bg") || "";
    if (selected) {
      setBotBg(selected);
    } else {
      console.warn("No Bg selected!");
    }
  };

  const handleBotTxt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const selected = e.currentTarget.getAttribute("bot-txt") || "";
    if (selected) {
      setBotTxt(selected);
    } else {
      console.warn("No color selected!");
    }
  };

  const handleUserBg = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const selected = e.currentTarget.getAttribute("user-bg") || "";
    if (selected) {
      setUserBg(selected);
    } else {
      console.warn("No Bg selected!");
    }
  };

  const handleUserTxt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const selected = e.currentTarget.getAttribute("user-txt") || "";
    if (selected) {
      setUserTxt(selected);
    } else {
      console.warn("No Bg selected!");
    }
  };

  return (
    <Card>
      <h2>Change your chat bubble</h2>
      <div className={styles.type}>
        <h3>1. Bot chat bubble background</h3>
        <div className={styles.spread}>
          {buttonColors.map(({ id, name, backgroundColor }) => (
            <div
              key={id}
              className={styles.imgDiv}
              title={name}
              style={{ backgroundColor: backgroundColor }}
              onClick={handleBotBg}
              bot-bg={backgroundColor}
            ></div>
          ))}
          <div className={styles.colorPick}>
            <label htmlFor="color">Pick Color</label>
            <input
              type="color"
              value={botbg}
              onChange={(e) => setBotBg(e.target.value)}
              id="color"
              name="color"
              className={styles.colorPicker}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.type}>
        <h3>2. Bot chat text color</h3>
        <div className={styles.spread}>
          {buttonColors.map(({ id, name, backgroundColor }) => (
            <div
              key={id}
              className={styles.imgDiv}
              title={name}
              style={{ backgroundColor: backgroundColor }}
              onClick={handleBotTxt}
              bot-txt={backgroundColor}
            ></div>
          ))}
          <div className={styles.colorPick}>
            <label htmlFor="color">Pick Color</label>
            <input
              type="color"
              value={botTxt}
              onChange={(e) => setBotTxt(e.target.value)}
              id="color"
              name="color"
              className={styles.colorPicker}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.type}>
        <h3>2. User chat bubble background</h3>
        <div className={styles.spread}>
          {buttonColors.map(({ id, name, backgroundColor }) => (
            <div
              key={id}
              className={styles.imgDiv}
              title={name}
              style={{ backgroundColor: backgroundColor }}
              onClick={handleUserBg}
              user-bg={backgroundColor}
            ></div>
          ))}
          <div className={styles.colorPick}>
            <label htmlFor="color">Pick Color</label>
            <input
              type="color"
              value={userBg}
              onChange={(e) => setUserBg(e.target.value)}
              id="color"
              name="color"
              className={styles.colorPicker}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.type}>
        <h3>2. User chat text color</h3>
        <div className={styles.spread}>
          {buttonColors.map(({ id, name, backgroundColor }) => (
            <div
              key={id}
              className={styles.imgDiv}
              title={name}
              style={{ backgroundColor: backgroundColor }}
              onClick={handleUserTxt}
              user-txt={backgroundColor}
            ></div>
          ))}
          <div className={styles.colorPick}>
            <label htmlFor="color">Pick Color</label>
            <input
              type="color"
              value={userTxt}
              onChange={(e) => setUserTxt(e.target.value)}
              id="color"
              name="color"
              className={styles.colorPicker}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbles;
