import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </section>
);

export default Section;
