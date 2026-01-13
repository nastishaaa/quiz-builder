import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.badge}>Beta v1.0 is live</div>
          <h1 className={styles.title}>
            Create Quizzes <br /> 
            <span className={styles.gradientText}>in seconds,</span> not hours.
          </h1>
          <p className={styles.description}>
            The most intuitive way to build interactive quizzes for your students, 
            team, or friends. Simple, fast, and beautiful.
          </p>
          
          <div className={styles.ctas}>
            <Link href="/create" className={styles.primaryBtn}>
              Start Building Free
            </Link>
            <Link href="/quizzes" className={styles.secondaryBtn}>
              View Examples
            </Link>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.icon}>⚡</div>
            <h3>Fast Creation</h3>
            <p>Simple interface designed for speed.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>🎨</div>
            <h3>Modern Design</h3>
            <p>Your quizzes will look great on any device.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>📊</div>
            <h3>Analytics</h3>
            <p>Track results and performance in real-time.</p>
          </div>
        </div>
      </main>
    </div>
  );
}