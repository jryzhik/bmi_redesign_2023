import React from 'react'
import ImageNPercentage from './imageNPercentage'
import theme from '../../styles/theme'
import styles from '../../styles/Texts/Texts.module.css';
import TwoProgressOfHundred from './twoProgressOfHundred';
import H1 from '../fonts/H1';

function formatDollarAmount(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0, // Do not show any decimal places
    maximumFractionDigits: 0, // Do not show any decimal places
  }).format(amount);
}

function PercentBarNIcons({
  color1,
  color2,
  passedImage1,
  passedImage2,
  amountRaised,
  goal
}) {
  var percentRaised = Number((100 * (amountRaised / goal)).toFixed(2)); // Convert to string and round to 2 decimal places, then convert back to number
  return (
    <div className={styles.mainContainerPercBarNIcon}>
        <H1 color={"#FFFFFF"} text={`${formatDollarAmount(goal)} Goal`} />
      <TwoProgressOfHundred percentRaised={percentRaised} color1={color1} color2={color2} />
      <div className={styles.percentBarContainer}>
        <ImageNPercentage
          passedImage={passedImage1}
          percentText={percentRaised} description={`${formatDollarAmount(amountRaised)} Raised`}
          color={color1}
          colorText={theme.colors.WHITE}
        />
        <ImageNPercentage
          passedImage={passedImage2}
          percentText={Number(100 - percentRaised).toFixed(2)} description={`${formatDollarAmount(goal - amountRaised)} Needed`}
          color={color2}
          opacity={.4}
          colorText={theme.colors.WHITE}
        />
      </div>
    </div>
  )
}

export default PercentBarNIcons