"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  function setMenuOpen(updater: (open: boolean) => boolean): void {
    setIsOpen(updater);
  }
  return (
    <header className={styles.header}>
      <h2>Web Dev Evolution</h2>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/html">HTML</Link>
        <Link href="/css">CSS</Link>
        <Link href="/javascript">JavaScript</Link>
      </nav>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};
