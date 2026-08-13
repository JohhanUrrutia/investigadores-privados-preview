import styles from "./ServiceCard.module.css";

export default function ServiceCard({ number, icon: Icon, title, text }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.number}>{number}</span>
        <Icon width={30} height={30} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </article>
  );
}
