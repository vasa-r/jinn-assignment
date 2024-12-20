/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Text.module.css";
import Card from "../../Card/Card";
import { fontFamilies, fontSizes } from "../../../util/constants";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
const Text = () => {
  const { textData, updateTextData } = useAppContext();
  const [font, setFont] = useState<string>(textData.fontSize);
  const [lineHeight, setLineHeight] = useState<string>(
    textData.lineHeight || "1.5rem"
  );
  const [fontFam, setFontFam] = useState<string>(textData.fontFam);

  useEffect(() => {
    updateTextData(font, fontFam, lineHeight);
  }, [font, fontFam, lineHeight]);

  const handleSize = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const selected = e.currentTarget.getAttribute("font-s") || "";
    const selectedLineHeight =
      e.currentTarget.getAttribute("line-height") || "";

    if (selected) {
      setFont(selected);
      setLineHeight(selectedLineHeight);
    } else {
      console.warn("No font selected!");
    }
  };
  const handleFontFam = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const selected = e.currentTarget.getAttribute("font-fam") || "";
    if (selected) {
      setFontFam(selected);
    } else {
      console.warn("No font fam selected!");
    }
  };
  return (
    <Card>
      <h2>Change your text</h2>
      <div className={styles.type}>
        <h3>1. Text font size (In rem)</h3>
        <div className={styles.spread}>
          {fontSizes.map(({ id, name, fontSize, lineHeight }) => (
            <div
              key={id}
              className={styles.div}
              onClick={handleSize}
              font-s={fontSize}
              line-height={lineHeight}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className={styles.type}>
        <h3>2. Text font style</h3>
        <div className={styles.spread}>
          {fontFamilies.map(({ id, name, fontFamily }) => (
            <div
              key={id}
              className={styles.fontDiv}
              onClick={handleFontFam}
              font-fam={fontFamily}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Text;
