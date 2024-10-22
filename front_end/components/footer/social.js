import Image from 'next/image';
import { socials } from './socialsArray';

export default function Social() {
   return (
      <div className="social_buttons">
         {socials.map(({ link, icon, alt, width }) => (
            <div className="social_box" key={link}>
               <a href={link}>
                  <Image style={{ maxWidth: width, height: 'auto' }} src={icon} alt={alt} width={0} height={0} />
               </a>
            </div>
         ))}
      </div>
   );
}
