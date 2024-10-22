import React, { useState } from 'react';
import styles from '../../styles/Events/Events.module.css';
import P from '../fonts/P';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import OutlineButton from '../inputs/outlineButton';
import OutlineTextArea from '../inputs/outlineTextArea';
import RoundedButton from '../buttons/roundedButton';
import DropDownThin from '../buttons/dropDownThin';
import emailjs from '@emailjs/browser';

// const tripDB = [
//     {
//         name: 'Belarus Construction', key: 'Belarus Construction'
//     },
//     {
//         name: 'Pastors Conference Fall', key: 'Pastors Conference Fall'
//     },
//     {
//         name: 'Summer VBS', key: 'Summer VBS'
//     }
// ]

export default function RegisterTrip({ color, primaryText, secondaryText, tripDB }) {
   const [tripSelection, setTripSelection] = useState();
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [stateMessage, setStateMessage] = useState(null);

   const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID,
            process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID_TRIP,
            e.target,
            process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY
         )
         .then(
            (result) => {
               setStateMessage(
                  "We are so glad you want to Join to so the Lord's work! Please give us up to 48 hours to get in touch with you!"
               );
               setIsSubmitting(false);
               setTimeout(() => {
                  setStateMessage(null);
               }, 5000); // hide message after 5 seconds
            },
            (error) => {
               console.log(error);
               setStateMessage('Something went wrong, please try again later');
               setIsSubmitting(false);
               setTimeout(() => {
                  setStateMessage(null);
               }, 5000); // hide message after 5 seconds
            }
         );

      // Clears the form after sending the email
      e.target.reset();
   };

   return (
      <form onSubmit={sendEmail}>
         <div id="formSection" className={styles.together}>
            <div className={styles.rectangleRounded}></div>
            <div
               style={{
                  backgroundColor: color,
               }}
               className={styles.containerRegisterForm}
            >
               {stateMessage ? (
                  <div className={styles.headerNdescription}>
                     <H1 text={'Hooray! ✈️'} color={theme.colors.WHITE} />
                     <P color={theme.colors.WHITE} text={stateMessage} />
                  </div>
               ) : (
                  <>
                     <div className={styles.headerNdescription}>
                        <H1 text={primaryText} color={theme.colors.WHITE} />
                        <P color={theme.colors.WHITE} text={secondaryText} />
                     </div>

                     <div className={styles.boxConstraint}>
                        <Grid container gap={2}>
                           <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                              <OutlineButton
                                 placeholder="Full Name"
                                 borderColor={theme.colors.SNOW}
                                 textColor={theme.colors.WHITE}
                                 type="text"
                                 name={'user_name'}
                                 callBack={setFullName}
                              />
                           </Grid>
                           <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                              <OutlineButton
                                 placeholder="Email Address"
                                 borderColor={theme.colors.SNOW}
                                 textColor={theme.colors.WHITE}
                                 type="email"
                                 name="user_email"
                                 callBack={setEmail}
                              />
                           </Grid>
                           <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                              <DropDownThin
                                 defaultKey={'BelarusConstruction'}
                                 dropDownItemArray={tripDB}
                                 titleFont="number"
                                 placeholder="Select Mission Trip"
                                 borderColor={theme.colors.SNOW}
                                 textColor={theme.colors.WHITE}
                                 callBack={setTripSelection}
                              />
                              <input
                                 type="text"
                                 name="trip_selection"
                                 value={tripSelection}
                                 style={{
                                    display: 'none',
                                 }}
                              />
                           </Grid>
                           <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                              <OutlineTextArea
                                 placeholder="Please write a short message on who you are and why you are interested in going!"
                                 borderColor={theme.colors.SNOW}
                                 textColor={theme.colors.WHITE}
                                 type="text"
                                 name="message"
                                 callBack={setMessage}
                              />
                           </Grid>
                           <Grid
                              xs={12}
                              md={12}
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              flexDirection={'column'}
                           >
                              <input className={passedStyle.submitButtonWhite} type="submit" value="SEND" disabled={isSubmitting} />
                           </Grid>
                        </Grid>
                     </div>
                  </>
               )}
            </div>
         </div>
      </form>
   );
}
