import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Web Dev Evolution</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/html">HTML</Link>
        <Link href="/css">CSS</Link>
        <Link href="/javascript">JavaScript</Link>
      </nav>
    </header>
  );
};
