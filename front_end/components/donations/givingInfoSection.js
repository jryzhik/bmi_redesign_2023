import React, { useState, useEffect } from 'react';
import styles from '../../styles/Donate/Donate.module.css';
import theme from '../../styles/theme';
import TITLE from '../fonts/TITLE';
import H2 from '../fonts/H2';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import OutlineButton from '../inputs/outlineButton';
import RoundedButton from '../buttons/roundedButton';
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import CustomDollar from '../inputs/customDollar';

export default function GivingInfoSection({
  handleCustomDollarChange,
  customDollarValue,
  setFirstName,
  setLastName,
  handleEmailChange,
  firstNameValid,
  lastNameValid,
  emailValid,
  customDollarValueValid,
}) {
  const [customDollarLabel, setcustomDollarLabel] = useState('giving total');
  const [customDollarLabelColor, setcustomDollarLabelColor] = useState(theme.colors.BLACK);
  const [nameLabel, setNameLabel] = useState('first name');
  const [nameLabelColor, setNameLabelColor] = useState(theme.colors.BLACK);
  const [lastNameLabel, setlastNameLabel] = useState('last name');
  const [lastNameLabelColor, setlastNameLabelColor] = useState(theme.colors.BLACK);
  const [emailLabel, setEmailLabel] = useState('email');
  const [emailLabelColor, setEmailLabelColor] = useState(theme.colors.BLACK);

  useEffect(() => {
    if (!firstNameValid) {
      setNameLabel('please enter your first name');
      setNameLabelColor(theme.colors.RED);
    } else {
      setNameLabel('first name');
      setNameLabelColor(theme.colors.BLACK);
    }
  }, [firstNameValid]);

  useEffect(() => {
    if (!lastNameValid) {
      setlastNameLabel('please enter your last name');
      setlastNameLabelColor(theme.colors.RED);
    } else {
      setlastNameLabel('last name');
      setlastNameLabelColor(theme.colors.BLACK);
    }
  }, [lastNameValid]);

  useEffect(() => {
    if (!emailValid) {
      setEmailLabel('please enter a valid email @');
      setEmailLabelColor(theme.colors.RED);
    } else {
      setEmailLabel('email');
      setEmailLabelColor(theme.colors.BLACK);
    }
  }, [emailValid]);

  useEffect(() => {
    if (!customDollarValueValid) {
      setcustomDollarLabel('Please enter $ amount');
      setcustomDollarLabelColor(theme.colors.RED);
    } else {
      setcustomDollarLabel('giving total');
      setcustomDollarLabelColor(theme.colors.BLACK);
    }
  }, [customDollarValueValid]);

  function nextPageNValidate() {
    if (firstNameValid && lastNameValid && emailValid && customDollarValueValid) {
      console.log('Clicked next page');
    }
  }

  return (
    <div className={styles.givingInfoSection}>
      <H2 color={theme.colors.BLACK} text="Enter your giving amount and contact info." />
      <Grid container>
        <Grid xs={12} md={12} display="flex" justifyContent="left" alignItems="center" paddingTop={4} paddingLeft={1} paddingBottom={1}>
          <TITLE color={customDollarLabelColor} text={customDollarLabel} />
        </Grid>
        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingBottom={4}>
          <CustomDollar
            onChange={handleCustomDollarChange}
            value={customDollarValue} // Pass the controlled value to the CustomDollar component
            placeholder="Enter Giving Amount"
            borderColor={theme.colors.GREY}
            textColor={theme.colors.BLACK}
            type="number"
          />
        </Grid>
        <Grid xs={6} md={6} display="flex" justifyContent="left" alignItems="center" paddingLeft={1} paddingBottom={1}>
          <TITLE color={nameLabelColor} text={nameLabel} />
        </Grid>
        <Grid xs={6} md={6} display="flex" justifyContent="left" alignItems="center" paddingLeft={2} paddingBottom={1}>
          <TITLE color={lastNameLabelColor} text={lastNameLabel} />
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center" paddingRight={0.5}>
          <OutlineButton
            placeholder="Enter your first name"
            borderColor={theme.colors.GREY}
            textColor={theme.colors.BLACK}
            type="text"
            callBack={setFirstName}
          />
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center" paddingLeft={0.5}>
          <OutlineButton
            placeholder="Enter your last name"
            borderColor={theme.colors.GREY}
            textColor={theme.colors.BLACK}
            type="text"
            callBack={setLastName}
          />
        </Grid>
        <Grid xs={12} md={12} display="flex" justifyContent="left" alignItems="center" paddingTop={4} paddingLeft={1} paddingBottom={1}>
          <TITLE color={emailLabelColor} text={emailLabel} />
        </Grid>
        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
          <OutlineButton
            placeholder="Enter your email name"
            borderColor={theme.colors.GREY}
            textColor={theme.colors.BLACK}
            type="email"
            onChange={handleEmailChange}
            callBack={handleEmailChange}
          />
        </Grid>
        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingTop={4}>
          <RoundedButton text="continue to payment" passedStyle={passedStyle.dollarButtonBlack} callBackFunction={nextPageNValidate} />
        </Grid>
      </Grid>
    </div>
  );
}
