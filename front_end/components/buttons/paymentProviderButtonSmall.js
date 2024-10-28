import Image from 'next/image';

export default function PaymentProviderButtonSmall({ imageUrl, width, handleClick, passedStyle }) {
   const imgHeight = 13;
   const imgQuality = 100;

   return (
      <div onClick={handleClick} className={passedStyle}>
         <Image src={imageUrl} alt="button" width={width} height={imgHeight} quality={imgQuality} />
      </div>
   );
}
