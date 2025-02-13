'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Valentinks() {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.valentines}>
        <div className={styles.envelope}></div>
        <div className={styles.front}></div>
        <div className={styles.card}
          style={{
            top: isHovered ? '-90px' : '0',
            transition: 'top 0.3s ease', // smooth transition for card movement
          }}>
          <div className={styles.text}>З днем святого Валентина!</div>
          <div className={styles.text1}>Моя nasti_a.a.a.a.a </div>
          <div className={styles.blockHeart}>
            <div className={styles.heart}></div>
            <div className={styles.heart}></div>
            <div className={styles.heart}></div>
            <div className={styles.heart}></div>
            <div className={styles.heart}></div>
          </div>

        </div>
        <div className={styles.hearts}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
          <div className={styles.four}></div>
          <div className={styles.five}></div>
          <div className={styles.six}></div>
          <div className={styles.eight}></div>
          <div className={styles.seven}></div>
        </div>
      </div>
      <div className={styles.shadow}></div>
    </div>

  );
}


