import H1 from '../fonts/H1';
import styles from '../../styles/Texts/Texts.module.css';

export default function HeaderNComponent({ primaryHeaderText, SecondaryComponent, secondaryAllign, color }) {
   const subComponentStyle = {
      textAlign: secondaryAllign,
   };

   return (
      <div className={styles.container}>
         <div className={styles.primaryHeader}>
            <H1 text={primaryHeaderText} color={color} />
         </div>

         <div className={styles.subComponent} style={subComponentStyle}>
            {SecondaryComponent}
         </div>
      </div>
   );
}
