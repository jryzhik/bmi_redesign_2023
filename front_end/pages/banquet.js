import styles from '../styles/Banquet/Banquet.module.css';
import ImageNtext from '../components/hero/imageNtext';
import ColorheroDonate from '../components/donations/colorheroDonate';
import P from '../components/fonts/P'
const banquet = () => {
  return (
    <>
      <ImageNtext
        imageUrl="/img/hero_images/donate.jpg"
        textParent="Events"
        textChild="Banquet Fundraisers"
        headerText="Fearless for the Gospel"
        subText="“For God has not given us a spirit of fear, but of power and of love and of a sound mind”"
      />
      <div className={styles.container}>
        <section className="welcome">
          <div className={styles.welcomeWrapper}>
            <P text='After a 4-year pause, the Annual Fundraiser Banquet is back!' />
            <P text='After a 4-year pause, the Annual Fundraiser Banquet is back!' />
            <P text='After a 4-year pause, the Annual Fundraiser Banquet is back!' />
            <P text='After a 4-year pause, the Annual Fundraiser Banquet is back!' />
          </div>
        </section>
      </div>
    </>
  );
};

export default banquet;
