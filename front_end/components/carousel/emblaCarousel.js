import React, { useCallback, useEffect, useRef } from 'react';
import { NextButton, PrevButton, usePrevNextButtons } from './emblaCarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Styles from '../../styles/Carousel/Carousel.module.css';
import buttonStyles from '../../styles/Carousel/CarouselButtons.module.css';
import { DotButton, useDotButton } from './emblaCarouselDot';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import ClassNames from 'embla-carousel-class-names';

const EmblaCarousel = (props) => {
   const { children, options, buttons, dots, style, autoplay, fade, classNames, scale } = props;
   const plugins = [];
   autoplay ? plugins.push(Autoplay(autoplay)) : null;
   fade ? plugins.push(Fade()) : null;
   classNames ? plugins.push(ClassNames(classNames)) : null;
   const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
   if (scale) {
      const TWEEN_FACTOR_BASE = scale;
      const tweenFactor = useRef(0);
      const tweenNodes = useRef([]);

      const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max);

      const setTweenNodes = useCallback((emblaApi) => {
         tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('article');
         });
      }, []);

      const setTweenFactor = useCallback((emblaApi) => {
         tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
      }, []);

      const tweenScale = useCallback((emblaApi, eventName) => {
         const engine = emblaApi.internalEngine();
         const scrollProgress = emblaApi.scrollProgress();
         const slidesInView = emblaApi.slidesInView();
         const isScrollEvent = eventName === 'scroll';

         emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
               if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

               if (engine.options.loop) {
                  engine.slideLooper.loopPoints.forEach((loopItem) => {
                     const target = loopItem.target();

                     if (slideIndex === loopItem.index && target !== 0) {
                        const sign = Math.sign(target);

                        if (sign === -1) {
                           diffToTarget = scrollSnap - (1 + scrollProgress);
                        }
                        if (sign === 1) {
                           diffToTarget = scrollSnap + (1 - scrollProgress);
                        }
                     }
                  });
               }

               const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
               const scale = numberWithinRange(tweenValue, 0, 1).toString();
               const tweenNode = tweenNodes.current[slideIndex];
               tweenNode.style.transform = `scale(${scale})`;
            });
         });
      }, []);

      useEffect(() => {
         if (!emblaApi) return;

         setTweenNodes(emblaApi);
         setTweenFactor(emblaApi);
         tweenScale(emblaApi);

         emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenScale)
            .on('scroll', tweenScale)
            .on('slideFocus', tweenScale);
      }, [emblaApi, tweenScale]);
   }

   const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

   return (
      <section className={Styles.embla} style={style}>
         <div className={Styles.embla__viewport} ref={emblaRef}>
            <div className={Styles.embla__container}>{children}</div>
         </div>

         {buttons ? (
            <div className={Styles.embla__buttons}>
               <PrevButton
                  additionalClass={buttons.isDark ? ` ${buttonStyles.isDark}` : null}
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
               />

               <NextButton
                  additionalClass={buttons.isDark ? ` ${buttonStyles.isDark}` : null}
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
               />
            </div>
         ) : null}

         {dots ? (
            <div className={Styles.embla__dots}>
               {scrollSnaps.map((_, index) => (
                  <DotButton
                     key={index}
                     onClick={() => onDotButtonClick(index)}
                     className={Styles.embla__dot.concat(index === selectedIndex ? ` ${Styles._active}` : '')}
                  />
               ))}
            </div>
         ) : null}
      </section>
   );
};

export default EmblaCarousel;
