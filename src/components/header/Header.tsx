"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  // const menuRef = useRef<HTMLDivElement>(null);

  function setMenuOpen(updater: (open: boolean) => boolean): void {
    setIsOpen(updater);
  }

  const handleClickOutside = (event: Event) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Web Dev Evolution
      </Link>
      <nav
        ref={navRef}
        className={`${styles.nav} ${isOpen ? styles.open : ""}`}
      >
        <Link
          href="/"
          className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
          onClick={() => setMenuOpen(() => false)}
        >
          Home
        </Link>
        <Link
          href="/html"
          className={`${styles.navLink} ${pathname === "/html" ? styles.active : ""}`}
          onClick={() => setMenuOpen(() => false)}
        >
          HTML
        </Link>
        <Link
          href="/css"
          className={`${styles.navLink} ${pathname === "/css" ? styles.active : ""}`}
          onClick={() => setMenuOpen(() => false)}
        >
          CSS
        </Link>
        <Link
          href="/javascript"
          className={`${styles.navLink} ${pathname === "/javascript" ? styles.active : ""}`}
          onClick={() => setMenuOpen(() => false)}
        >
          JavaScript
        </Link>
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
