import styles from "./PageHeader.module.css";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className={styles.header}>
      <div className="grain" />
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
      <span className={styles.rule} aria-hidden="true" />
    </section>
  );
}
