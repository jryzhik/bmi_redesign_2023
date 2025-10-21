import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
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
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const recaptchaRef = useRef(null);

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();

        // Check if reCAPTCHA is completed
        if (!recaptchaToken) {
            setStateMessage('Please complete the reCAPTCHA verification');
            setTimeout(() => {
                setStateMessage(null);
            }, 5000);
            return;
        }

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
                    setRecaptchaToken(null);
                    recaptchaRef.current?.reset();
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setRecaptchaToken(null);
                    recaptchaRef.current?.reset();
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                }
            );

        // Clears the form after sending the email
        e.target.reset();
        setFullName('');
        setEmail('');
        setMessage('');
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    return (
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

                    {/* reCAPTCHA v2 Checkbox */}
                    <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6Ld0SzMUAAAAAIii0M4uivMZoXoqA0Ew_moQxgO3"
                            onChange={handleRecaptchaChange}
                        />
                    </Grid>

                    <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" flexDirection={'column'}>
                        <input
                            className={passedStyle.submitButtonBlack}
                            type="submit"
                            value="SEND"
                            disabled={isSubmitting || !recaptchaToken}
                        />
                        {stateMessage && <P text={stateMessage} />}
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default ContactForm;
