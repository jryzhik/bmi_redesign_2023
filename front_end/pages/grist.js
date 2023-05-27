import React from 'react'
import PortraitNPageParent from '../components/hero/portraitNPageParent'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Missionaries/Missionaries.module.css';
import ColorheroDonate from '../components/donations/colorheroDonate'

export default function Grist() {
  return (
    <>
      <PortraitNPageParent
        textParent='Missionary'
        textChild='Cassandra Lynn Grist'
        imgUrl="/../public/img/missionaries/grist.jpg"
      />
      <div className={styles.container}>
        <HeaderNComponent
          primaryHeaderText='Cassandra Lynn Grist'
          SecondaryComponent={
            <div className={styles.bioText}>
              <P color={theme.colors.CHARCOAL} text='Cassandra Lynn Grist is a missionary with Byelorussian Mission, Inc and is a third generation believer in Jesus. Her family’s lineage traces back to Polish, German, Dutch and even Spanish roots. She was born and raised in Columbus, Ohio, where she attended Ohio State University and is degreed in Fashion Merchandising. She also is certified in Christian Counseling. She has been a believer for over 25 years.' />
              <P color={theme.colors.CHARCOAL} text='In the mid 1990’s the Lord began to pull her out of the secular work force and placed a missionary call on her life. She received her training in evangelism with a large mission sending ministry from San Francisco and has been a co-laborer with them since 2001. She went on to minister for over ten years with a missions agency in Atlanta before joining Byelorussian Mission, Inc. in January, of 2013.' />
              <P color={theme.colors.CHARCOAL} text='Cassandra Lynn has ministered all over the United States and overseas in Canada, Israel, Mexico, Poland and Belarus. She has a heart for working with immigrants from all nations, with a special emphasis in Atlanta with the Russian immigrant population. In Poland and in Belarus the plight of the orphans, began to burden her heart. After a journey in 2012 to the country of Belarus, she began to sense God calling her in a new direction. After months of fasting, praying and soul searching, the Lord led her to Byelorussian Mission, Inc to begin serving the Lord by bringing the gospel to those in need, in a country who had not heard the name of Jesus in over three generations. He has opened the door for her to minister on a local level to those Russian immigrants in Atlanta, as well as helping facilitate teams going on mission to take the gospel to Belarus. The Lord has blessed her ministry over the years, and many people have repented and come to faith in Jesus.' />
              <P color={theme.colors.CHARCOAL} text='She has been married to her husband, David since 1986 and has two children, Jordan, age 32 and Jessica, age 25.' />
            </div>
          }
          secondaryAllign='left'
        />
        <ColorheroDonate
          color='#2D69C3'
          primaryText='Help us reach immigrant families in Atlanta'
          secondaryText='We look to help newly immigrated families in Atlanta with their needs and introduce them to Jesus.'
        />
      </div>
    </>
  )
}
