"use client";

import { motion } from "framer-motion";
import styles from "./Card.module.scss";

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
}
