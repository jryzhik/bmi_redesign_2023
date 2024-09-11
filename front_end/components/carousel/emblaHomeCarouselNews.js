import React from 'react';
import Styles from '../../styles/Carousel/CarouselNews.module.css';
import H2NComponent from '../texts/h2NComponent';
import P from '../fonts/P';
import RoundedPhoto from '../images/roundedPhoto'; // Импорт файла стилей
import theme from '../../styles/theme';

const EmblaHomeCarouselNews = (props) => {
  const {slides} = props;
  return slides.map(({_id, imageUrl, title, url, description}) => (
    <a className={Styles.slideEmblaNews} key={_id} href={url}>
      <article>
        <RoundedPhoto
          imageUrl={imageUrl}
          containerStyle={{marginBottom: '2rem'}}
        />
        <H2NComponent
          primaryHeaderText={title}
          primaryStyle={{textAlign: 'center'}}
          SecondaryComponent={
            <P style={{color: theme.colors.CHARCOAL}} text={description} />
          }
          secondaryAllign="center"
        />
      </article>
    </a>
  ));
};

export default EmblaHomeCarouselNews;
