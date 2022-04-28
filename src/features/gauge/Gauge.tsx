import React, { useState } from "react";
import IGauge from "./IGauge";
import styles from "./Gauge.module.css";

const Gauge = ({ sysInfo }: IGauge) => {
  const [usage, setUsage] = useState<number>(0);

  return (
    <div className={styles.row}>
      <div
        className={
          usage <= 50
            ? styles.gaugeBackgroundGreen
            : usage >= 51 && usage <= 70
            ? styles.gaugeBackgroundYellow
            : usage >= 71 && usage <= 80
            ? styles.gaugeBackgroundOrange
            : styles.gaugeBackgroundRed
        }
      >
        <div className={styles.circle}>
          <h2>{usage}%</h2>
          <h3>{sysInfo}</h3>
        </div>
      </div>
      <input
        type="range"
        id="points"
        name="points"
        min="0"
        max="100"
        value={usage}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsage(parseInt(e.target.value))
        }
      />
    </div>
  );
};

export default Gauge;
