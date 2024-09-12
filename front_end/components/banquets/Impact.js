import styles from '../../styles/Banquet/Impact.module.css';
import P from '../../components/fonts/P';
const buttons = ['$25', '$50', '$100', '$250', 'custom'];

const Impact = () => {
  return (
    <section id="impact" className={styles.impact}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Can't make it this time, yet want to have an impact?</h2>
        <P text="Join us in embracing orphaned children with the Father's love and guiding them towards a brighter future." />
        <div className={styles.buttons}>
          {buttons.map((button) => (
            <a className={styles.button} href="#">{button}</a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
