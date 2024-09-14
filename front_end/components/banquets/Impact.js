import styles from '../../styles/Banquet/Impact.module.css';
import P from '../../components/fonts/P';
const buttons = ['$25', '$50', '$100', '$250', 'custom'];
import DonationMasterForm from '../donations/donationMasterForm';
import theme from '../../styles/theme';
import buttonStyles from '../../styles/Donate/ColorDonate.module.css';
const Impact = () => {
  return (
    <section id="impact" className={styles.impact}>
      <div className={styles.wrapper}>
      <DonationMasterForm
        headerText="Can't make it this time, yet want to have an impact?"
        secondaryText="Join us in embracing orphaned children with the Father's love and guiding them towards a brighter future."
        secondaryAllign="center"
        color={theme.colors.WHITE}
        buttonStyle={styles.button}
        fund="general"
      />
      </div>
    </section>
  );
};

export default Impact;
