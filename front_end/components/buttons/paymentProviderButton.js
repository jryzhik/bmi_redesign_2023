import Image from 'next/image';
import styles from '../../styles/Donate/Donate.module.css';

export default function PaymentProviderButton({ imageUrl, width, handleClick }) {
   const imageHeight = 40;
   const imageQuality = 100;

   return (
      <div onClick={handleClick} className={styles.paymentButton}>
         <Image src={imageUrl} alt="button" width={width} height={imageHeight} quality={imageQuality} />
      </div>
   );
}
