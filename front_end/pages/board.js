import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import RoundedPhoto from '../components/images/roundedPhoto'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styles from '../styles/Texts/Profiles.module.css';
import ProfileNTexts from '../components/texts/profileNTexts'
import passedStyles from '../styles/Texts/Profiles.module.css';
import theme from '../styles/theme'
import imagePassedStyles from '../styles/Images/Images.module.css';


const board = [
    { name: 'Chairman – Andrew Ryzhkov', jobTitle: 'Founder/ CEO', imgSource: '/img/team/andrew.jpg' },
    { name: 'Director — Chuck Capell', jobTitle: 'Retired Pilot', imgSource: '/img/team/chuck.jpg' },
    { name: 'Director — Tom Boissseau', jobTitle: 'Live Sound, Film, Video & Installs', imgSource: '/img/team/tom.jpg' },
    { name: 'Director – Ken E. & Judy Brockman', jobTitle: 'MEM, LLC', imgSource: '/img/team/ken.jpg' },
    { name: 'Dr. Dennis Kozakoff', jobTitle: 'CEO/ USDigiComm Corporation', imgSource: '/img/team/dennis.jpg' },
    { name: 'Secretary — Inna Ryzhkov', jobTitle: 'Attorney', imgSource: '/img/team/ina.jpg' },
    { name: 'Director – David Thayer', jobTitle: 'Senior Software Developer for Microsoft', imgSource: '/img/team/david.jpg' },

]
export default function Board() {
    return (
        <>
            <ImageNtext
                color1="#B1BFBD"
                color2="#B6C2BE"
                imageUrl="/img/hero_images/board_members.jpg"
                textParent='Who We Are'
                textChild='Board Members'
                headerText='Discover our team leading the charge'
                subText='Board members are responsible in keeping the organization’s goals and activity in check.'
                imageFocus={'center -20%'}
            />
            <div className={styles.grid}>
                <HeaderNComponent
                    primaryHeaderText='Integrity'
                    SecondaryComponent={
                        <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.CHARCOAL} />
                    }
                    secondaryAllign='center'
                />
                {/* <RoundedPhoto
                    imageUrl={'/img/team/all_board.jpg'}
                    passedStyles={imagePassedStyles.roundedRectStandard}
                /> */}
                <Grid paddingLeft={4} paddingRight={4} container gap={3} justifyContent='center'>
                    {board.map((member) => (
                        <Grid className={styles.verticalSpacing} xs={12} sm={6} md={3} display="flex" justifyContent="center" alignItems="center" >
                            <ProfileNTexts
                                textName={member.name}
                                textJobTitle={member.jobTitle}
                                passedImage={member.imgSource}
                                borderRadius='50%'
                                passedStyle={passedStyles.profilePic}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}
