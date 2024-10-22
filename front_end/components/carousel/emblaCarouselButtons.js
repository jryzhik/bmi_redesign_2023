import { useCallback, useEffect, useState } from 'react';
import Styles from '../../styles/Carousel/CarouselButtons.module.css';

export const usePrevNextButtons = (emblaApi) => {
   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

   const tapAnimation = (element, ms = 300, tappedClass = Styles._tapped) => {
      element.classList.add(tappedClass);
      setTimeout(() => {
         element.classList.remove(tappedClass);
      }, ms);
   };

   const onPrevButtonClick = useCallback(
      (e) => {
         if (!emblaApi) return;
         emblaApi.scrollPrev();
         tapAnimation(e.currentTarget);
      },
      [emblaApi]
   );

   const onNextButtonClick = useCallback(
      (e) => {
         if (!emblaApi) return;
         emblaApi.scrollNext();
         tapAnimation(e.currentTarget);
      },
      [emblaApi]
   );

   const onSelect = useCallback((emblaApi) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
   }, []);

   useEffect(() => {
      if (!emblaApi) return;

      onSelect(emblaApi);
      emblaApi.on('reInit', onSelect).on('select', onSelect);
   }, [emblaApi, onSelect]);

   return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
   };
};

export const PrevButton = (props) => {
   const { additionalClass, ...restProps } = props;

   return (
      <button {...restProps} className={Styles.buttonsEmbla__button + ' ' + additionalClass}>
         <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="bg" cx="25" cy="25" r="25" stroke="none" />
            <path id="arrow" d="M27 19L21 25L27 31" />
         </svg>
      </button>
   );
};

export const NextButton = (props) => {
   const { additionalClass, ...restProps } = props;

   return (
      <button {...restProps} className={Styles.buttonsEmbla__button + ' ' + additionalClass}>
         <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" stroke="none" transform="rotate(-180 25 25)" />
            <path d="M23 31L29 25L23 19" />
         </svg>
      </button>
   );
};
