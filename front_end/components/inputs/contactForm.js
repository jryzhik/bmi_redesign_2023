import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/Events/Events.module.css';
import P from '../fonts/P';
import theme from '../../styles/theme';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import OutlineButton from './outlineButton';
import OutlineTextArea from './outlineTextArea';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID,
                process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                },
                (error) => {
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
        //   <form onSubmit={sendEmail}>
        //     <input type="text" name="user_name" />
        //     <input type="email" name="user_email" />
        //     <textarea name="message" />
        //     <input type="submit" value="Send" disabled={isSubmitting} />
        //     {stateMessage && <P text={stateMessage}/>}
        //   </form>

        <div className={styles.boxConstraint}>
            <form onSubmit={sendEmail}>
                <Grid container gap={2}>
                    <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                        <OutlineButton
                            placeholder='Full Name'
                            borderColor={theme.colors.CHARCOAL}
                            textColor={theme.colors.BLACK}
                            type='text'
                            name="user_name"
                            callBack={setFullName}
                        />
                    </Grid>
                    <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                        <OutlineButton
                            placeholder='Email Address'
                            borderColor={theme.colors.CHARCOAL}
                            textColor={theme.colors.BLACK}
                            type='email'
                            name="user_email"
                            callBack={setEmail}
                        />
                    </Grid>
                    <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                        <OutlineTextArea
                            placeholder='Enter your message'
                            borderColor={theme.colors.CHARCOAL}
                            textColor={theme.colors.BLACK}
                            type='text'
                            name="message"
                            callBack={setMessage}
                        />
                    </Grid>
                    <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" flexDirection={'column'}>
                        {/* <RoundedButton disabled={true} type='submit' text='send' passedStyle={passedStyle.dollarButtonBlack} /> */}
                        <input
                            className={passedStyle.submitButtonBlack}
                            type="submit"
                            value="SEND"
                            disabled={isSubmitting}
                        />
                        {stateMessage && <P text={stateMessage} />}
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};
export default ContactForm;