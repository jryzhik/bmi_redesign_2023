import Image from 'next/image';
import H4 from '../fonts/H4';
import P from '../fonts/P';
import theme from '../../styles/theme';

export default function ProfileNTexts({ passedImage, textName, textJobTitle, borderRadius, passedStyle, color }) {
   const imageSize = 240;
   const imageQquality = 100;

   return (
      <>
         <div className={passedStyle}>
            <Image
               src={passedImage}
               width={imageSize}
               height={imageSize}
               quality={imageQquality}
               loading="lazy"
               style={{
                  objectFit: 'cover',
                  // Adjust the position to focus on the desired part of the image
                  borderRadius: borderRadius,
                  marginBottom: '1.5em',
               }}
            />
            {textName === undefined ? <></> : <H4 text={textName} color={color} />}

            {textJobTitle === undefined ? (
               <></>
            ) : color === undefined ? (
               <P text={textJobTitle} color={color} />
            ) : (
               <P text={textJobTitle} color={theme.colors.CHARCOAL} />
            )}
         </div>
      </>
   );
}
