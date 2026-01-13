import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Quiz Builder</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/create" className={styles.navItem}>
          Create Quiz
        </Link>
        <Link href="/quizzes" className={styles.navItem}>
          Quizzes
        </Link>
      </nav>
    </header>
  );
};

export default Header;
