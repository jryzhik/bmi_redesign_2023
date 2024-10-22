import Image from 'next/image';
import TITLE from '../fonts/TITLE';
import ST from '../fonts/ST';
import theme from '../../styles/theme';
import styles from '../../styles/Hero/Hero.module.css';
import rightArrow_black from '../../assets/icons/arrows/rightArrow_black.svg';
import rightArrow_white from '../../assets/icons/arrows/rightArrow_white.svg';

const arrowSize = 14;

export default function PageParentText(props) {
   return (
      <>
         <div className={styles.hBox}>
            <TITLE text={props.textParent} color={props.color} />

            <Image
               src={props.color === theme.colors.WHITE ? rightArrow_white : rightArrow_black}
               width={arrowSize}
               height={arrowSize}
               alt="arrow"
            />

            <ST text={props.textChild} color={props.color} />
         </div>
      </>
   );
}
