import React from 'react';
import styles from './waves.module.css'; // Import CSS module
import WaveSVG from './waveSVG'; // Import the SVG component

export default function Waves() {
  return (
    <div className={styles.waveContainer}> {/* Use styles from the module */}
      <WaveSVG className={styles.wave} /> {/* Use the imported WaveSVG component */}
    </div>
  );
}
