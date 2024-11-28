import styles from "./Text.module.css";
import Card from "../../Card/Card";
import { fontFamilies, fontSizes } from "../../../util/constants";
import { useState } from "react";
const Text = () => {
  const [font, setFont] = useState<string>("0");
  return (
    <Card>
      <h2>Change your text</h2>
      <div className={styles.type}>
        <h3>1. Text font size (In rem)</h3>
        <div className={styles.spread}>
          {fontSizes.map(({ id, name }) => (
            <div key={id} className={styles.div}>
              {name}
            </div>
          ))}
          <div className={styles.colorPick}>
            <label htmlFor="font">Pick Size</label>
            <input
              type="font"
              value={font}
              onChange={(e) => setFont(e.target.value)}
              id="font"
              name="font"
              className={styles.radiusInput}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.type}>
        <h3>2. Text font style</h3>
        <div className={styles.spread}>
          {fontFamilies.map(({ id, name }) => (
            <div key={id} className={styles.fontDiv}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Text;
