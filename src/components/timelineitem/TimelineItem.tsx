"use client";

import { motion } from "framer-motion";
import styles from "./TimelineItem.module.scss";

export default function TimelineItem({
  year,
  title,
  onOpen,
}: {
  year: string;
  title: string;
  onOpen?: () => void;
}) {
  return (
    <motion.div
      className={styles.timelineItem}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onOpen}
    >
      <div className={styles.year}>{year}</div>
      <div className={styles.label}>{title}</div>
    </motion.div>
  );
}
