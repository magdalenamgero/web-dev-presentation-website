"use client";

import { motion } from "framer-motion";
import styles from "./TimelineItem.module.scss";

export const TimelineItem = ({
  year,
  title,
  onOpen,
}: {
  year: string;
  title: string;
  onOpen?: () => void;
}) => {
  return (
    <motion.div className={styles.timelineItem}>
      <div className={styles.year}>{year}</div>
      <div className={styles.label}>{title}</div>
    </motion.div>
  );
};
