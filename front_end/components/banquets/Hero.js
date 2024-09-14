import React from 'react';
import styles from '../../styles/Banquet/Hero.module.css';
import P from '../fonts/P';
import H1 from '../fonts/H1';
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <span>EVents</span>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_262_2971" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="14">
              <rect x="0.5" width="14" height="14" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_262_2971)">
              <path
                d="M7.70003 11.0101C7.58668 11.1235 7.40341 11.1251 7.28808 11.0137C7.16987 10.8996 7.16821 10.7107 7.28441 10.5945L10.5875 7.29141H3.57292C3.41183 7.29141 3.28125 7.16082 3.28125 6.99974C3.28125 6.83866 3.41183 6.70807 3.57292 6.70807H10.5875L7.28441 3.40498C7.16821 3.28878 7.16987 3.09988 7.28808 2.98574C7.40341 2.8744 7.58668 2.876 7.70003 2.98935L11.7104 6.99974L7.70003 11.0101Z"
                fill="white"
              />
            </g>
          </svg>

          <P text="Banquet Fundraisers" />
        </div>
        <div className={styles.content}>
          <H1 text="Fearless for the Gospel" />
          <P text="“For God has not given us a spirit of fear, but of power and of love and of a sound mind”" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
