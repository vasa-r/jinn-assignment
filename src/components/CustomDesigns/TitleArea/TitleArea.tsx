import styles from "./TitleArea.module.css";
import Card from "../../Card/Card";
import { buttonColors } from "../../../util/constants";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";

const TitleArea = () => {
  const { updateTitleBg, titleBg } = useAppContext();
  const [backgroundColor, setBackgroundColor] = useState<string>(titleBg);
  useEffect(() => {
    updateTitleBg(backgroundColor);
  }, [backgroundColor]);

  return (
    <Card>
      <h2>Change your title area</h2>
      <div className={styles.type}>
        <h3>Title area color</h3>
        <div className={styles.spread}>
          {buttonColors.map(({ id, name, backgroundColor }) => (
            <div
              key={id}
              className={styles.imgDiv}
              title={name}
              style={{ backgroundColor: backgroundColor }}
              onClick={() => updateTitleBg(backgroundColor)}
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

export default TitleArea;
