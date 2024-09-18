import React from 'react';
import styles from '../../styles/Donate/ColorDonate.module.css';
import RoundedButtonMoney from '../buttons/roundedButtonMoney';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function FiveButtonsDonate({buttonStyle, masterCallBackFunction}) {
  function callBackClick(value) {
    masterCallBackFunction(value);
  }
  return (
    <div className={styles.boxConstraint}>
      <Grid container spacing={1.5} minHeight={160}>
        <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
          <RoundedButtonMoney text="$50" passedStyle={buttonStyle} amount={50} callBackFunction={callBackClick} />
        </Grid>
        <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
          <RoundedButtonMoney text="$100" passedStyle={buttonStyle} amount={100} callBackFunction={callBackClick} />
        </Grid>
        <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
          <RoundedButtonMoney text="$250" passedStyle={buttonStyle} amount={250} callBackFunction={callBackClick} />
        </Grid>
        <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
          <RoundedButtonMoney text="$500" passedStyle={buttonStyle} amount={500} callBackFunction={callBackClick} />
        </Grid>
        <Grid xs={12} md={2.4} display="flex" justifyContent="center" alignItems="center">
          <RoundedButtonMoney text="custom" passedStyle={buttonStyle} amount={''} callBackFunction={callBackClick} />
        </Grid>
      </Grid>
    </div>
  );
}
