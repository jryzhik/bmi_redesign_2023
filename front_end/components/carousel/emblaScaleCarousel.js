import React from 'react';
import Styles from '../../styles/Carousel/CarouselScale.module.css';
import H2NComponent from '../texts/h2NComponent';
import P from '../fonts/P';
import RoundedPhoto from '../images/roundedPhoto';
import theme from '../../styles/theme';

const EmblaScaleCarousel = (props) => {
  const {slides} = props;
  return slides.map(({_id, imageUrl, title, url, description}) => (
    <a className={Styles.slideEmblaScale} key={_id ? _id : imageUrl} href={url}>
      <article>
        <RoundedPhoto
          imageUrl={imageUrl}
          containerStyle={{
            marginBottom: '2rem',
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
        {title ? (
          <H2NComponent
            primaryHeaderText={title}
            primaryStyle={{textAlign: 'center'}}
            SecondaryComponent={
              description ? (
                <P style={{color: theme.colors.CHARCOAL}} text={description} />
              ) : null
            }
            secondaryAllign="center"
          />
        ) : null}
      </article>
    </a>
  ));
};

export default EmblaScaleCarousel;
