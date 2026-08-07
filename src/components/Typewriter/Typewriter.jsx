import React, { useState, useEffect } from "react";
import styles from "./Typewriter.module.css";

export default function Typewriter({ words, speed = 100, pauseTime = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = words[currentWordIndex];
    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, speed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, speed / 2);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, pauseTime]);

  return (
    <span className={styles.container}>
      {currentText}
      <span className={styles.cursor}>|</span>
    </span>
  );
}