import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Texts/Texts.module.css';

export default function Letter() {
    return (
        <>
            <ImageNtext
                color1="#404E26"
                color2="#404E26"
                imageUrl="/../public/img/hero_images/fundraising.jpg"
                textParent='Resources'
                textChild='Fundraising Letter'
                headerText='Assistance Writing A Fundraising Letter'
                subText='Join us on a Mission Trip to Belarus and Israel! Use our resources to help you raise the necessary funds to travel.'
                imageFocus='center 30%'
            />
            <div className='flexContainerTopItems'>
                <HeaderNComponent
                    primaryHeaderText='“How to” fundraising letter instructions'
                    SecondaryComponent={
                        <div className={styles.bioText}>
                            <P color={theme.colors.CHARCOAL} text='Mission Team Member,' />
                            <P color={theme.colors.CHARCOAL} text='You have been given the awesome opportunity to go to Belarus and serve. You will be serving through church planting, orphan ministry, high school and university programs, home visitation and reaching out and loving the people with the Gospel of Christ. Along with that opportunity comes an awesome responsibility, which is to fundraise to cover the cost of such a trip.' />
                            <P color={theme.colors.CHARCOAL} text='&nbsp; 1. &nbsp; Pray and brainstorm to think of all the people who are family, friends, co-workers and etc. Be sure to include friends of your parents. You want to consider whoever cares about you and about people.' />
                            <P color={theme.colors.CHARCOAL} text='&nbsp; 2. &nbsp; Print out enough letters, sign your name at the bottom and send them to the people you think of.' />
                            <P color={theme.colors.CHARCOAL} text='&nbsp; 3. &nbsp; In the envelopes you send your letters in, include a return envelope with Byelorussian Mission, Inc. or your address on it so it will be easy for those who give to you to send them back.' />
                            <P color={theme.colors.CHARCOAL} text='&nbsp; 4. &nbsp; Pray that God moves in the hearts of the people you send letters to, so they give generously and are blessed by their gift.' />
                            <P color={theme.colors.CHARCOAL} text='&nbsp; 5. &nbsp; Direct your supporter to www.byelorussianmission.org website to learn more about the ministry God called you to get involved.' />
                            <P color={theme.colors.CHARCOAL} text='Don’t forget the following:' />
                            <P color={theme.colors.CHARCOAL} text='&nbsp; 1. &nbsp; Cost should not keep you from going, God will provide if you make the effort. Be proud to ask for a gift to the work of service for God and for people that you are serving. Remember that God will bless those who help you for this important cause.' />
                            <P color={theme.colors.CHARCOAL} text='&nbsp; 2. &nbsp; If you send out these letters you will raise lots towards your trip cost, maybe even so much there is extra for spending on missions.' />
                            <P color={theme.colors.CHARCOAL} text='&nbsp; 3. &nbsp; Consider how you want those who are going to help you to respond. Do you want them to send funds directly to you, or to Byelorussian Mission, Inc? Have the checks made out to Byelorussian Mission, Inc, and have your donor attach a note that designates the funds in your name for your mission trip. The advantage of having checks made out to the ministry is that they are tax-deductible. Just make sure that your donors attach your name on a note with their check, not in the memo line, to track your funds so they’re not misplaced or lost.' />
                            <P color={theme.colors.CHARCOAL} text='&nbsp; 4. &nbsp; Be certain to write “Thank Yous upon returning home. Include a brief letter that shares what God did in you and through' />
                            <P color={theme.colors.CHARCOAL} text='God bless you in your efforts and I look forward to serving on the mission trip with you.' />
                        </div>}
                    secondaryAllign='left'
                />
                <HeaderNComponent
                    primaryHeaderText='Sample fundraising letter'
                    SecondaryComponent={
                        <div className={styles.bioText}>

                            <P color={theme.colors.CHARCOAL} text='Dear friends and family,' />
                            <P color={theme.colors.CHARCOAL} text='I’d like to share with you a trip that I am going to take that will hopefully be a life changing experience for the people I come in contact with, as well as myself.' />
                            <P color={theme.colors.CHARCOAL} text='Can you envision a land where poverty, hardship, hunger and a lack of resources both spiritually and physically keep many from hearing the Gospel of Jesus Christ? I want to share with you a challenging ministry opportunity God has presented to me. During (add your dates), I will be going to Belarus, in the former Soviet Union with a team from (add your church name or Byelorussian Mission, Inc). Our ten-day trip will focus on coming along side a needy Belarussian church plant to help them both spiritually and materially. We will also be sharing the gospel in local orphanages, nursing homes and public schools and universities. We will be involved in Bible distribution and home visitation. The country of Belarus was closed to the gospel for more than three generations. The door is open to share and the harvest is plentiful!' />
                            <P color={theme.colors.CHARCOAL} text='I’m excited about the opportunity and experiences that lie ahead. I hope you see the value in what we will accomplish. As you can imagine, a trip like this requires financial support from a number of people. In order to go on this mission trip I need to raise (add amount) by (add deadline date). If you can support me in a financial way, I would be very grateful. And, most importantly, I also need your prayer support. Prayer is the fuel that will allow us to be successful as we follow God’s leading in our ministry in Belarus. Without prayer, little, or nothing will happen.' />
                            <P color={theme.colors.CHARCOAL} text='If you would like to be part of this mission through your financial support, send a check to: Byelorussian Mission, 3395 Chamblee Gap Road, Cumming GA 30040 by (add deadline). Envelopes are enclosed for your convenience. Please make your check payable to Byelorussian Mission, Inc. All contributions are tax deductible.' />
                            <P color={theme.colors.CHARCOAL} text='Thank you so much for prayerfully considering if this is something you’d like to participate in. May God bless you for your time and support.' />
                            <div>
                                <P color={theme.colors.CHARCOAL} text='Sincerely,' />
                                <P color={theme.colors.CHARCOAL} text='(Signed)' />
                            </div>
                            <div class={styles.textDivider}>
                                <P color={theme.colors.CHARCOAL} text='Tear off and send along with donations' />
                            </div>
                            <P color={theme.colors.CHARCOAL} text='This gift of $____________is designated for ' />
                            <P color={theme.colors.CHARCOAL} text='________________________________________for their mission trip to' />
                            <P color={theme.colors.CHARCOAL} text='Belarus on the dates ______________________. I understand this gift is to support a short-term mission trip to Belarus. No goods or services have been provided for this donation.' />
                        </div>
                    }
                    secondaryAllign='left'
                />
            </div>
        </>
    )
}
