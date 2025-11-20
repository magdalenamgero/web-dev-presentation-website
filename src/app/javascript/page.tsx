import { TimelineItem } from "@/components/timelineitem/TimelineItem";
import styles from "./page.module.scss";
import { TECH_DESCRIPTIONS, TIMELINE_DATA } from "@/data/content";

export default function JavascriptPage() {
  return (
    <main className={styles.main}>
      <h1>JavaScript – Making the Web Interactive</h1>

      <div className={styles.timeline}>
        {TIMELINE_DATA.html.map((item) => (
          <TimelineItem key={item.year} year={item.year} title={item.title} />
        ))}
      </div>

      <section className={styles.descriptionSection}>
        <h2>About JavaScript</h2>
        <p>{TECH_DESCRIPTIONS.javascript}</p>
      </section>
    </main>
  );
}
