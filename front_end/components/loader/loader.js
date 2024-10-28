import styles from './loader.module.css';

export const Loader = () => {
   return (
      <div className={styles.preloader}>
         <div className={styles.loader}>
            <span className={styles.loader__item}></span>
         </div>
      </div>
   );
};

export default Loader;
