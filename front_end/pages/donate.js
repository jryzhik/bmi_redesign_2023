import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Donate/Donate.module.css';
import FiveButtonsDonate from '../components/donations/FiveButtonsDonate'
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import SpecificDonationGallery from '../components/images/specificDonationGallery'

const fund_array = [
  {
    imageUrl: '/img/donation/designated_cover/love_in_action.jpg',
    title: 'Love in Action',
    description: 'Bring relief to Ukrainian Refugees',
    url: 'ukraine'
  },
  {
    imageUrl: '/img/donation/designated_cover/orphan_adoption.jpg',
    title: 'Orphan Adoption Program',
    description: 'Stop the destructive cycle of orphanages',
    url: 'orphans'
  },
  {
    imageUrl: '/img/donation/designated_cover/church_construction.jpg',
    title: 'Building Projects',
    description: 'Church, Camp, and other Construction',
    url: 'plant'
  },
  {
    imageUrl: '/img/donation/designated_cover/good_and_evil.jpg',
    title: 'Good & Evil',
    description: 'Highly effective evangelism tool',
    url: 'literature'
  },
  {
    imageUrl: '/img/donation/designated_cover/urgent_matching.jpg',
    title: 'Urgent Matching Fund',
    description: 'Help us print 50K copies of Bibles and discipleship materials',
    url: 'matching'
  },
]

export default function Donate() {
  return (
    <>
      <ImageNtext
        color1="#383B39"
        color2="#383B39"
        imageUrl="/../public/img/hero_images/donate.jpg"
        textParent='Donate'
        textChild='General Donation'
        headerText='Support us in changing the world for Christ'
        subText='"Go into all the world and proclaim the gospel to the whole creation"'
        imageFocus={'center 45%'}
      />
      <div className={styles.container}>
        <HeaderNComponent
          primaryHeaderText='Provide a donation'
          SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Your donation enables us to reach out with the good news of Jesus Christ, serve the orphan children, equip believers for effective ministry, and inspire the next generations to impact their world. We appreciate very much your partnership!' />}
          secondaryAllign='center'
        />
        <FiveButtonsDonate
          buttonStyle={buttonStyles.dollarButtonBlack}
        />
        <div className={styles.verticalSpacer}></div>
        <HeaderNComponent
          primaryHeaderText='Specific donations'
          SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Discover specific initiatives we are raising money for to assist in these efforts.' />}
          secondaryAllign='center'
        />
        <SpecificDonationGallery
          fundArray={fund_array}
        />
      </div>
    </>
  )
}
