import React from 'react'
import ImageNGradient from '../components/hero/imageNGradient'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import styles from '../styles/Hero/Hero.module.css';
import stylesEvents from '../styles/Events/Events.module.css';
import theme from '../styles/theme'
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import H5 from '../components/fonts/H5';
import H1 from '../components/fonts/H1';
import Link from 'next/link';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import RoundedButton from '../components/buttons/roundedButton';


const style_containerTop = styles.imageContainerGradientLegacy;
const style_imgTop = styles.mainImageLegacy;
const style_containerBottom = styles.wrapperBottomContainerLegacy;
const style_imgBottom = styles.bottomImgContainerLegacy;




export default function legacy() {
  return (
    <ImageNGradient
      color1="#A48D54"
      color2="#63787D"
      imageUrlTop="/img/hero_images/legacy_primary.jpg"
      imageUrlBottom="/img/hero_images/legacy_secondary.jpg"
      style_containerTop={style_containerTop}
      style_imgTop={style_imgTop}
      style_imgBottom={style_imgBottom}
      style_containerBottom={style_containerBottom}
      content={
        <div className={styles.paddingContent}>
          <HeaderNComponent
            primaryHeaderText='IRA Charitable Rollover'
            SecondaryComponent={
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3125em' }}>
                <P color={theme.colors.WHITE} text='In late 2015, Congress passed the PATH Act to make the IRA Charitable Rollover a permanent provision of the law. Under the Rollover provision, distributions from both traditional and Roth IRA’s could be made directly to the donor’s selected charitable organization(s) without being included as taxable income to the donor.' />
                <div>
                  <H5 color={theme.colors.WHITE} text='Basic Facts about the IRA Charitable Rollover' />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '.3125em', paddingLeft: '.5em' }}>
                    <P color={theme.colors.WHITE} text='• &nbsp;Donor must be at least 70 1/2 years of age.' />
                    <P color={theme.colors.WHITE} text='•  &nbsp;Donations of up to $100,000 made directly to charitable organizations are not included in gross taxable income.' />
                    <P color={theme.colors.WHITE} text='•  &nbsp;Traditional IRA’s and Roth IRA’s only; Simple IRA’s, SEPP IRA’s, 401k, 403b plans not eligible.' />
                    <P color={theme.colors.WHITE} text='•  &nbsp;Donations count toward Donor’s annual Minimum Required Distribution.' />
                    <P color={theme.colors.WHITE} text='•  &nbsp;Donations from IRA’s are not used to calculate gift limits on Adjusted Gross Income (AGI).' />
                    <P color={theme.colors.WHITE} text='•  &nbsp;Donor must instruct IRA Custodian/manager to transfer funds directly to qualified charitable organization.' />
                    <P color={theme.colors.WHITE} text='•  &nbsp;Donation must be outright gift (rollovers to gift annuities, donor advised funds, or charitable trusts are not eligible).' />

                  </div>
                </div>
              </div>
            }
            secondaryAllign='left'
            color={theme.colors.WHITE}
          />
          <div className={styles.containerContact}>
            <div className={stylesEvents.headerNdescription}>
              <H1 text={'Contact Us'} color={theme.colors.WHITE} />
              <P color={theme.colors.WHITE} text={'Contact Wayne Taylor to discuss options of an IRA Rollover.'} />
            </div>
            <div className={stylesEvents.boxConstraint}>
              <Link href="mailto:wayne@placeholder.com?cc=andrew@byelorussianmission.org&subject=IRA Charitable Rollover | Byelorussian Mission Inc.">
                <Grid container>
                  <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                    <RoundedButton text='contact' passedStyle={buttonStyles.dollarButton} />
                  </Grid>
                </Grid>
              </Link>
            </div>
          </div>
        </div>
      }
    />
  )
}
