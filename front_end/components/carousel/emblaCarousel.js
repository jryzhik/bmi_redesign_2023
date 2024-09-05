import React from 'react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './emblaCarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Styles from '../../styles/Carousel/Carousel.module.css';
import {DotButton, useDotButton} from './emblaCarouselDot';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

const EmblaCarousel = (props) => {
  const {children, options, buttons, dots, style, autoplay, fade} = props;
  const plugins = [];
  autoplay ? plugins.push(Autoplay(autoplay)) : null;
  fade ? plugins.push(Fade()) : null;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi);

  return (
    <section className={Styles.embla} style={style}>
      <div className={Styles.embla__viewport} ref={emblaRef}>
        <div className={Styles.embla__container}>{children}</div>
      </div>
      {buttons ? (
        <div className={Styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      ) : null}
      {dots ? (
        <div className={Styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={Styles.embla__dot.concat(
                index === selectedIndex ? ` ${Styles._active}` : '',
              )}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default EmblaCarousel;
