import React, { useState } from 'react'
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import ProfileNTexts from '../components/texts/profileNTexts'
import styles from '../styles/Images/Images.module.css';
import passedStyles from '../styles/Texts/Profiles.module.css';
import theme from '../styles/theme'



const founders = [
    {
        name: 'Andrew',
        imgSource: '/img/team/andrew.jpg'
    },
    {
        name: 'Inna',
        imgSource: '/img/team/ina.jpg'
    }
]
export default function Founders() {
    const d = new Date();
    let year = d.getFullYear();

    const [selectedFounder, setSelectedFounder] = useState(0)
    const handleClick = (e) => {
        if (selectedFounder === 0) {
            setSelectedFounder(1)
        } else {
            setSelectedFounder(0)

        }
    }
    return (
        <>
            <ImageNtext
                color1="#0A6C72"
                color2="#06545A"
                imageUrl="/img/hero_images/founders_hero.jpg"
                textParent='Who We Are'
                textChild='The Founders'
                headerText='Rev. Andrew & Inna Ryzhkov'
                subText='Learn more about Rev. Andrew & Inna Ryzhkov, the founding members of Byelorussian Mission.'
                imageFocus={'center 40%'}
            />

            <div className={styles.founders}>
                {selectedFounder === 0 ? (
                    <>
                        <div className={styles.selected}>
                            <ProfileNTexts
                                textName={founders[0].name + ' Ryzhkov'}
                                passedImage={founders[0].imgSource}
                                borderRadius='50%'
                                passedStyle={passedStyles.profilePicScaleSelected}
                            />
                        </div>
                        <div className={styles.unselected} onClick={handleClick}>
                            <ProfileNTexts
                                textName={founders[1].name}
                                passedImage={founders[1].imgSource}
                                borderRadius='50%'
                                passedStyle={passedStyles.profilePicScaleUnSelected}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.unselected} onClick={handleClick}>
                            <ProfileNTexts
                                textName={founders[0].name}
                                passedImage={founders[0].imgSource}
                                borderRadius='50%'
                                passedStyle={passedStyles.profilePicScaleUnSelected}
                            />
                        </div>
                        <div className={styles.selected}>
                            <ProfileNTexts
                                textName={founders[1].name + ' Ryzhkov'}
                                passedImage={founders[1].imgSource}
                                borderRadius='50%'
                                passedStyle={passedStyles.profilePicScaleSelected}
                            />
                        </div>
                    </>
                )}
            </div>

            <HeaderNComponent
                primaryHeaderText={founders[selectedFounder].name + '’s Story'}
                SecondaryComponent={
                    <div className={styles.paragraphSpacing}>
                        {selectedFounder == 0 ? (
                            <>
                                <P color={theme.colors.CHARCOAL} text='Andrew grew up in a Christian family. His parents, Peter and Valentina Ryzhkov, have been church planters for over forty years. The family faced many government persecutions during 70’s and 80’s. Andrew kept a strong witness in his High School and Professional School in spite of the great danger of “illegal” activity. In 1989, Music Conservatory did admit Andrew despite his religious affiliation. “You have to deny God and join the Communist Party; then, you will have a greater future”. Andrew’s response was short: “God will provide an education for me and give me a great future!' />
                                <P color={theme.colors.CHARCOAL} text=' In 1991, Andrew graduated from Art Professional School where he learned his skills in architecture and construction. God gave him a gift in piano tuning and rebuilding. Andrew donated three years of labor constructing First Independent BC in Bobruisk, Belarus. He developed a project and built a three-story Missionary House which Inna and Andrew donated to the ministry. For the last 14 years, the Missionary House has been used to accommodate short-term missionary groups.' />
                                <P color={theme.colors.CHARCOAL} text=' In 1995, Paul Alford, President of Toccoa Falls Bible College, personally invited Andrew to study in the United States. Andrew came to the U.S. in 1995 and earned two degrees. God gave Andrew and Inna seven beautiful children to raise and provide an education for them. By His grace, they are reaching the lost in the Atlanta area.' />
                                <P color={theme.colors.CHARCOAL} text=' In 2000-2003, Andrew and Inna planted a Russian-speaking church in Snellville, GA and currently are church planters in Alpharetta, GA. In 2000, they founded the Byelorussian Mission, Inc which has helped hundreds of orphans to find their homes and to start many new churches throughout Eastern Europe.' />
                            </>
                        ) : (
                            <>
                                <P color={theme.colors.CHARCOAL} text={`Someone said “Happy is that person, whose past has been taken in order, who is content with what he has in the present, and is looking forward to the future with hope”. I am a very happy person since my Lord removed my transgressions from me as far as the east is from the west and has given to me ${year - 1993} years of joy walking with Him!`} />
                                <P color={theme.colors.CHARCOAL} text='At the present time, life is wonderful and the reason for it is not the absence of troubles. They come every day, but the comfort is to know that they are not the result of conscious life against of the will of God and therefore, are only temporary. What’s more, as every child of God does, I live anticipating Heaven.' />
                                <P color={theme.colors.CHARCOAL} text='But, it has not always been this way. I was born in 1973 in a good family of teachers and doctors. We had a good library of world classics, but, unfortunately, there was not a Bible. Somehow, I tried to find fullness in life by sports’ achievements, playing in a college theater, and participating in public life (I used to be one of the leaders of the recently founded Scouts movement in Belarus). This search for something higher and better led me and my friend Irina Torbetskiy to astrology school where we attended sessions monthly in Minsk. Thousands of people of all ages paid quite a lot of money and recorded “revelations” of the master, which in the light of the Bible are just vanity and deception.' />
                                <P color={theme.colors.CHARCOAL} text='These folks definitely had been prepared to the receiving of an antichrist by getting the information that the age of “the fish” – Christianity – was coming to its end because it is not justified of itself. We also were told that a “real savior” had been born already and soon everybody would know about him. Without any knowledge of the Bible, where it is written that “His (Christ’s) kingdom will never end” (Luke. 1:33) and “Lord Jesus will overthrow the lawless one with the breath of his mouth” (2Thes. 2:8), we certainly believed that lie. Irina and I even presented some of the sessions in Gomel, teaching all the same blind, though older than us, folks.' />
                                <P color={theme.colors.CHARCOAL} text='The Lord in His mercy did not leave us to perish in this darkness and ignorance, but sent His faithful children to testify to us about the truth, that God is neither an idea nor an impersonal cosmic intellect, but the amazing personality, revealed in Jesus Christ, and that “there is no other name under heaven given to men by which we must be saved”. (Act. 4:12). One time during a visit to Minsk, we met wonderful but very “narrow minded” Baptists who pointed us into the Bible, that we should not want to rule or sway the destinies; the consequences of that would be quiet pitiful in this life as it would be in the coming one. We went to crusades with the participation of American short-term mission groups and they just surrounded us with love.' />
                                <P color={theme.colors.CHARCOAL} text='Irina instantly believed the Word of God and gave her life to the Lord. Now, she is a mother of three children and a missionary wife in the city of Sharkovstchina, who we, with your help, support monthly. It took me another year to read the only written revelation of God to men – the Bible – to see clearly my “spirituality”.' />
                                <P color={theme.colors.CHARCOAL} text='But, it is one thing to know the truth and another one to submit to it. The prospects of being a Baptist did not promise anything but rejection by everybody everywhere but there had been neither happiness nor rest in my previous beliefs. The Lord helped me to make that decision the only right commitment. I always remember the day of my repentance as the beginning of real full life.' />
                                <P color={theme.colors.CHARCOAL} text='Relatives and friends became anxious: grandfather threatened me with a possibility of future imprisonment, mother with loneliness, and friends just told me that they did not understand me. Later on, my grandfather came to the faith; my mother was baptized just recently. Two of my best friends, also from unchurched families, became full-time missionaries in Belarus and converted hundreds, if not thousands, of children to Christ.' />
                                <P color={theme.colors.CHARCOAL} text= {`I have been living in Atlanta for about ${year - 1999} years, being married to a wonderful man, Andrew Ryzhkov, the founding pastor of Calvary Russian Baptist Church. We have an amazing privilege from the Lord to participate in His building of His Church, which will outlive the world, and also to raise up for him five lively boys and two prissy girls.`} />
                                <P color={theme.colors.CHARCOAL} text='Our Creator takes the responsibility for the life that had being given to Him “… your life is now hidden with Christ in the Lord” (Col.3:3). I am so thankful to the Lord for that!' />
                            </>
                        )}
                    </div>
                }
                secondaryAllign='left'
            />
        </>
    )
}
