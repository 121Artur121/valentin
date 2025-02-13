'use client'

import { useState } from "react";
import styles from "./page.module.css";
import Valentinks from "./valentinks";

export default function Home() {
  const [isValet, setIsValet] = useState(false);

  return (
    <div className={styles.block}>
      <div onClick={() => setIsValet(!isValet)} className={styles.text2}>Нажми на мене<div className={styles.heart1}></div></div>

      {isValet ? (<Valentinks />) : null}

    </div >

  );
}
