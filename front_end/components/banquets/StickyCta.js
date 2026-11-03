import React, {useEffect, useState} from 'react';
import styles from '../../styles/Banquet/StickyCta.module.css';
import {specialGothic, specialGothicExpanded} from './fonts';
import {scrollToReserve} from './scrollToReserve';

// Phones only (hidden in CSS above 768px). Keeps a Reserve button on screen
// except where another Reserve button, the tickets or the giving form already is.
const ownLinkSelector = '[data-sticky-cta] a';
const isOnScreen = (el) => {
  if (!el) return false;
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0;
};

const StickyCta = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const impact = document.getElementById('impact');
      const otherButtons = [...document.querySelectorAll('a[href="#reserve"]')].filter(
        (a) => !a.matches(ownLinkSelector),
      );
      const hide =
        otherButtons.some(isOnScreen) ||
        isOnScreen(document.getElementById('reserve')) ||
        (impact && impact.getBoundingClientRect().top < window.innerHeight);
      setShow(!hide);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      data-sticky-cta
      className={`${styles.sticky} ${show ? styles.visible : ''} ${specialGothic.className}`}
      aria-hidden={!show}
    >
      <div className={styles.details}>
        <strong>Nov 17 · 7:00 PM</strong>
        <span>Cumming, GA</span>
      </div>
      <a
        className={`${styles.button} ${specialGothicExpanded.className}`}
        href="#reserve"
        onClick={scrollToReserve}
        tabIndex={show ? 0 : -1}
      >
        Reserve Your Seat
      </a>
    </div>
  );
};

export default StickyCta;
