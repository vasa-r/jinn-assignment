import styles from "./Button.module.css";
import Card from "../../Card/Card";
import { borderRadius, buttonColors, imageData } from "../../../util/constants";
import Send from "../../../assets/send.svg";
import { useState } from "react";

const Button = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [radius, setRadius] = useState<string>("0");
  console.log(backgroundColor);
  return (
    <Card>
      <h2>Change your button look</h2>
      <div className={styles.type}>
        <h3>1. Icon</h3>
        <div className={styles.spread}>
          {imageData.map(({ id, name, image }) => (
            <div key={id} className={styles.imgDiv}>
              <img src={image} alt={name} className={styles.img} />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className={styles.type}>
        <h3>2. Background</h3>
        <div className={styles.spread}>
          {buttonColors.map(({ id, name, backgroundColor }) => (
            <div
              className={styles.btn}
              key={id}
              title={name}
              style={{ backgroundColor: backgroundColor }}
            >
              <img src={Send} alt={name} className={styles.img} />
            </div>
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
        <h3>3. Border Radius</h3>
        <div className={styles.spread}>
          {borderRadius.map(({ id, name, borderRadius }) => (
            <div
              className={styles.btn}
              key={id}
              title={name}
              style={{ borderRadius: borderRadius, backgroundColor: "#42f590" }}
            >
              <img src={Send} alt={name} className={styles.radImg} />
            </div>
          ))}
          <div className={styles.colorPick}>
            <label htmlFor="radius">Pick Size</label>
            <input
              type="number"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              id="radius"
              name="radius"
              className={styles.radiusInput}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Button;
