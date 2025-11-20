"use client";

import { TimelineItem } from "@/components/timelineitem/TimelineItem";
import styles from "./page.module.scss";
import { TECH_DESCRIPTIONS, TIMELINE_DATA } from "@/data/content";
import ModalBox from "@/components/modalBox/ModalBox";
import { useState } from "react";

export default function HtmlPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className={styles.main}>
      <h1>HTML – The Structure of the Web</h1>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <ModalBox
          title="Example Modal"
          text="This is a modal box."
          onClose={() => setShowModal(false)}
        />
      )}
      <div className={styles.timeline}>
        {TIMELINE_DATA.html.map((item) => (
          <TimelineItem key={item.year} year={item.year} title={item.title} />
        ))}
      </div>
      <section className={styles.descriptionSection}>
        <h2>About HTML</h2>
        <p>{TECH_DESCRIPTIONS.html}</p>
      </section>
    </main>
  );
}
