// src/components/Feedbacks/Feedbacks.jsx
import React from 'react';
import styles from './Feedbacks.module.css';
import feedbackImg from './img/fedback.png';

export default function Feedbacks() {
    return (
        <section id="feedbacks" className={styles.feedbackSection}>
            <h2 className={styles.titulo}>Feedback</h2>
            <p className={styles.subtitulo}>O que dizem sobre o meu trabalho</p>
            
            <div className={styles.singleFeedbackContainer}>
                <div className={styles.feedbackCard}>
                    <div className={styles.imageContainer}>
                        <img src={feedbackImg} alt="Feedback de projeto" className={styles.feedbackImg} />
                    </div>
                </div>
            </div>
        </section>
    );
}