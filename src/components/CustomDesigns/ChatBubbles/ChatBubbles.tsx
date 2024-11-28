import { useState } from "react";
import { buttonColors } from "../../../util/constants";
import Card from "../../Card/Card";
import styles from "./ChatBubbles.module.css";

const ChatBubbles = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
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
            ></div>
          ))}
          <div className={styles.colorPick}>
            <label htmlFor="color">Pick Color</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
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
            ></div>
          ))}
          <div className={styles.colorPick}>
            <label htmlFor="color">Pick Color</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
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
            ></div>
          ))}
          <div className={styles.colorPick}>
            <label htmlFor="color">Pick Color</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
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
            ></div>
          ))}
          <div className={styles.colorPick}>
            <label htmlFor="color">Pick Color</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
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
