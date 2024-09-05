import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Images/Images.module.css';

export default function RoundedPhoto({imageUrl, passedStyles, containerStyle}) {
  return (
    <div style={containerStyle} className={styles.centerContent}>
      <div className={passedStyles}>
        <Image
          src={imageUrl}
          alt="Background"
          width={1440}
          height={1081}
          quality={75}
          style={{
            objectFit: 'fill',
            // Adjust the position to focus on the desired part of the image
            width: '100%',
            height: '100%',
            borderRadius: '0.438em',
          }}
        />
      </div>
    </div>
  );
}
