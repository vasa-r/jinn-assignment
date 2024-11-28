/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Button.module.css";
import Card from "../../Card/Card";
import { borderRadius, buttonColors, imageData } from "../../../util/constants";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";

const Button = () => {
  const { buttonData, updateBotButton } = useAppContext();
  const [backgroundColor, setBackgroundColor] = useState<string>(
    buttonData.background
  );
  const [radius, setRadius] = useState<string>(buttonData.borderRadius);
  const [icon, setIcon] = useState<string>(buttonData.icon);

  useEffect(() => {
    updateBotButton(icon, backgroundColor, radius);
  }, [icon, backgroundColor, radius]);

  const handleIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const selectedIcon = e.currentTarget.getAttribute("data-icon") || "";
    if (selectedIcon) {
      setIcon(selectedIcon);
    } else {
      console.warn("No icon selected!");
    }
  };

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const selectedBg = e.currentTarget.getAttribute("data-bg") || "";
    if (selectedBg) {
      setBackgroundColor(selectedBg);
    } else {
      console.warn("No background selected!");
    }
  };

  const handleRadiusClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const selectedRadius = e.currentTarget.getAttribute("data-radius") || "";
    if (selectedRadius) {
      setRadius(selectedRadius);
    } else {
      console.warn("No border radius selected!");
    }
  };

  return (
    <Card>
      <h2>Change your button look</h2>
      <div className={styles.type}>
        <h3>1. Icon</h3>
        <div className={styles.spread}>
          {imageData.map(({ id, name, image }) => (
            <div
              key={id}
              className={styles.imgDiv}
              data-icon={image}
              onClick={handleIconClick}
            >
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
              data-bg={backgroundColor}
              onClick={handleBgClick}
            >
              <img src={icon} alt={name} className={styles.img} />
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
              style={{
                borderRadius: `${borderRadius}px`,
                backgroundColor: backgroundColor,
              }}
              data-radius={borderRadius}
              onClick={handleRadiusClick}
            >
              <img src={icon} alt={name} className={styles.radImg} />
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
