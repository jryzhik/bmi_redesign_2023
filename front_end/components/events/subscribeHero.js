import React, { useEffect, useState } from 'react';
import styles from '../../styles/Events/Events.module.css';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import P from '../fonts/P';
import Grid from '@mui/material/Unstable_Grid2';
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
// Import your custom components
// Assuming OutlineButton and RoundedButton are adjusted for form usage
import OutlineButton from '../inputs/outlineButton';
import RoundedButton from '../buttons/roundedButton';

const SubscribeHero = ({ color, primaryText, secondaryText }) => {
    useEffect(() => {
        // Dynamically add the Mailchimp validation script
        const script = document.createElement('script');
        script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.fnames = new Array();
            window.ftypes = new Array();
            window.fnames[0] = 'EMAIL';
            window.ftypes[0] = 'email';
            // Add additional field names and types as necessary
        };

        return () => {
            // Remove the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    const [email, setEmail] = useState('');

    useEffect(() => {
        console.log(email)
    }, [email]);

    return (
        <div id='formSection' className={styles.together} style={{ backgroundColor: color }}>
            <div className={styles.rectangleRounded}></div>
            <div className={styles.containerSubscribe}>
                <div className={styles.headerNdescription}>
                    <H1 text={primaryText} color={theme.colors.WHITE} />
                    <P text={secondaryText} color={theme.colors.WHITE} />
                </div>
                <div className={styles.boxConstraint}>
                    <form action="https://byelorussianmission.us6.list-manage.com/subscribe/post?u=1e09f93cfd48188e8277f2119&amp;id=82fe9c3592&amp;f_id=00de29e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate">
                        <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                                <OutlineButton
                                    placeholder='Email Address'
                                    borderColor={theme.colors.SNOW}
                                    textColor={theme.colors.WHITE}
                                    type='email'
                                    value={email}
                                    callBack={setEmail}
                                    required
                                    name="EMAIL"
                                />
                                {/* <OutlineButton placeholder="Email Address" type="email" name="EMAIL" borderColor={theme.colors.SNOW} textColor={theme.colors.WHITE} callBack={handleEmailChange} /> */}
                            </div>
                            <div id="mce-responses" className="clear foot">
                                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                            </div>
                            {/* A hidden input to trick bots */}
                            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                <input type="text" name="b_1e09f93cfd48188e8277f2119_82fe9c3592" tabIndex="-1" />
                            </div>
                            <div className="optionalParent">

                                <div className="clear foot">
                                    <input
                                        type="submit"
                                        name="subscribe"
                                        id="mc-embedded-subscribe"
                                        class={passedStyle.dollarButton}
                                        value="SUBSCRIBE"
                                        style={{
                                            fontFamily: "'Inter', sans-serif", // Apply Inter font
                                            fontWeight: '900',
                                            fontSize: '1em',
                                            letterSpacing: '0.019em',
                                            marginTop: '2em'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default SubscribeHero;
