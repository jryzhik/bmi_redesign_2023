import H2 from '../fonts/H2';
import styles from '../../styles/Texts/Texts.module.css';

export default function H2NComponent({ primaryHeaderText, SecondaryComponent, primaryStyle, secondaryAllign, color }) {
   const subComponentStyle = {
      textAlign: secondaryAllign,
   };

   return (
      <div className={styles.containerH2NComp}>
         <div className={styles.primaryHeader2}>
            <H2 style={primaryStyle} text={primaryHeaderText} color={color} />
         </div>

         <div className={styles.subComponent} style={subComponentStyle}>
            {SecondaryComponent}
         </div>
      </div>
   );
}
