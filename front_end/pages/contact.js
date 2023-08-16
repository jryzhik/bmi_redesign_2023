import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import ExpandingText from '../components/texts/expandingText'
import styles from '../styles/Texts/Texts.module.css';
import P from '../components/fonts/P';

import theme from '../styles/theme';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import ContactForm from '../components/inputs/contactForm';

export default function Contact() {
  return (
    <>
      <ImageNtext
        color1="#1F2010"
        color2="#786E33"
        imageUrl="/img/hero_images/contact.jpg"
        textParent='contact us'
        textChild=''
        headerText='We’d love to hear any questions you have'
        subText='The purpose of the corporation is to provide support services for orphan children and help construct church buildings in the countries of Belarus and Ukraine.'
        imageFocus={'center 40%'}
      />
      <div className='flexContainerTopItems'>
        <HeaderNComponent
          primaryHeaderText='Message us'
          SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Byelorussian Mission, INC. — is a non-profit corporation organized exclusively for charitable, religious, and educational purposes as specified in Section 501 (c) (3) of the Internal Revenue Code. The purpose of the corporation is to provide support services for orphan children and help construct church buildings in the countries of Belarus and Ukraine. We’d love to hear from you and will be happy to answer any questions you have. Fill out the form below and our staff will be in touch with you shortly.' />}
          secondaryAllign='center'
        />
        <div className={styles.itemsExpandingContainer}>
          <ExpandingText
            title='Our address'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="3395 Chamblee Gap Road Cumming, GA 30040" />
              </div>
            }
          />
          <ExpandingText
            title='Our email'
            secondaryComponent={
              <div className={styles.bioText}>
                <a href='mailto:andrew@byelorussianmission.org'><P color={theme.colors.BLUE} text="info@byelorussianmission.org" /></a>
              </div>
            }
          />
          <ExpandingText
            title='Phone number'
            secondaryComponent={
              <div className={styles.bioText}>
                <a href='tel:17703563592'><P color={theme.colors.BLUE} text="(770) 356-3592" /></a>
              </div>
            }
          />
          <div className={styles.verticalSpacer}></div>
          <HeaderNComponent
            primaryHeaderText='Contact'
            SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Fill out the form to send us a message.' />}
            secondaryAllign='center'
          />
          <ContactForm
            color={theme.colors.BLACK}
            primaryText='Contact'
            secondaryText='Fill out the form to send us a message.'
          />
        </div>
      </div>
    </>
  )
}