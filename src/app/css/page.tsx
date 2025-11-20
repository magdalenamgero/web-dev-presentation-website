import TimelineItem from "@/components/timelineitem/TimelineItem";
import styles from "../page.module.scss";
import { TECH_DESCRIPTIONS, TIMELINE_DATA } from "@/data/content";

export default function CssPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.subtitle}>CSS – Styling the Web</h1>

      <div className={styles.timeline}>
        {TIMELINE_DATA.css.map((item) => (
          <TimelineItem key={item.year} year={item.year} title={item.title} />
        ))}
      </div>

      <section className={styles.descriptionSection}>
        <h2>About CSS</h2>
        <p>{TECH_DESCRIPTIONS.css}</p>
      </section>
    </main>
  );
}
