import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import ExpandingText from '../components/texts/expandingText'
import styles from '../styles/Texts/Texts.module.css';
import P from '../components/fonts/P';

import theme from '../styles/theme';
import PMED from '../components/fonts/PMED';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import { Table } from "@nextui-org/react";
import H2NComponent from '../components/texts/h2NComponent';
import NAVTEXT from '../components/fonts/NAVTEXT';



export default function Brief() {
  function goTo(event, destinationLink) {
    window.location.href = destinationLink;
    event.preventDefault(); // this line prevents changing to the URL of the link href
    event.stopPropagation(); // this line prevents the link click from bubbling
  }
  
  function estTime() {
    const date = new Date();
    var offset = 0; //Timezone offset for EST in minutes.
    var estDate = new Date(date.getTime() + offset * 60 * 1000);
    if (estDate.getMinutes < 10) {
      return `${estDate.getHours()}:0${estDate.getMinutes()}`
    } else {
      return `${estDate.getHours()}:${estDate.getMinutes()}`
    }
  }
  function belTime() {
    const date = new Date();
    var offset = 420; //Timezone offset for Belarus in minutes.
    var estDate = new Date(date.getTime() + offset * 60 * 1000);
    console.log(estDate.getMinutes() )
    if (estDate.getMinutes < 10) {
      return `${estDate.getHours()}: 0${estDate.getMinutes()}`
    } else {
      return `${estDate.getHours()}:${estDate.getMinutes()}`
    }
  }
  return (
    <>
      <ImageNtext
        color1="#2C372F"
        color2="#2C372F"
        imageUrl="/../public/img/hero_images/brief.jpg"
        textParent='Resources'
        textChild='Things to Know'
        headerText='A helpful guide in all you should know before traveling '
        subText='Each country has their own specific rules and regulations. Know them before you visit the country!'
        imageFocus='center 40%'
      />
      <div className='flexContainerTopItems'>
        <HeaderNComponent
          primaryHeaderText='Belarus: Know before you go!'
          SecondaryComponent={<P color={theme.colors.CHARCOAL} text='You are about to begin a ministry that may well be one of the most gratifying experiences of your life! Begin praying, and expect amazing results! Belarusians are VERY open to the gospel! You will work hard, but your heart will be touched and you will return home rejoicing. Below are a few details that will give you some idea of what to expect and how you should be prepared. God bless you as you begin this wonderful journey to a charming little country called… Belarus.' />}
          secondaryAllign='center'
        />
        <div className={styles.itemsExpandingContainer}>
          <ExpandingText
            title='Passport'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text='You MUST have a valid passport to travel to Belarus and make sure you remember to sign it!' />
                <P text='If you do not already have one, get one right a way. Usually there is an office at your local city hall that can assist you in this process. You will need to include a photo with your application.' />
                <div>
                  <P inline='true' text='Requirements for “passport style” photos may be found' />
                  <div className={styles.oneLine} onClick={(event) => goTo(event, 'https://travel.state.gov/content/travel/en/passports/how-apply/photos.html')}><P inline='true' text=' here' color={theme.colors.BLUE} /> </div>
                  <P text='I’d recommend you go to Office Depot, Staples, CVS, or a local photographer. They can provide you with a “passport style” photo which meets all the requirements.' />
                </div>
                <P text='Make at least two photo copies of your passport. Leave one at home with your family and carry the other copy with you separate from your original passport. In a pinch, photo copies of passports have been known to allow a tourist to leave Europe and reenter the USA with minimal difficulty. You may also want to consider using a passport “neck pouch”. They look like a pocket with a string that goes around your neck and can be worn underneath the clothing making it nearly impossible for your passport to be stolen. They also sell a version that you wear like a “belt” under your clothing. These pouches often have a second and third pocket for cash and credit cards. They can be purchased at Staples and Wal-Mart.' />
                <div>
                  <PMED text='Please be advised, the US Government suggests you renew your passport approximately 9 months BEFORE its expiration date!' />
                  <P text='Failure to do so could result in your visa being denied and you being prohibited from entering certain countries.' />
                </div>
                <div className={styles.oneLine} onClick={(event) => goTo(event, 'https://travel.state.gov/content/travel/en/passports.html')}><P inline='true' text='More Information' color={theme.colors.BLUE} /> </div>
              </div>
            }
          />
          <ExpandingText
            title='Visa'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="Visa's is required to stay in the country of Belarus. Medical coverage administered by International Medical Group (IMG) is also required." />
                <PMED text='The mission office processes all visas through the embassy.' />

              </div>
            }
          />
          <ExpandingText
            title='Luggage'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="When traveling to Belarus (and most other areas of Europe) in “coach”, airlines typically allow you one “checked” item, one piece of carry on luggage, AND one “personal item”. Personal items can be purses, briefcases, camera cases, diaper bags, laptops and items of a similar or smaller size to those above. Checked luggage policies differ according to the specific airline and change without notice." />
                <PMED text='Byelorussian Mission travel agents typically book with 2 Checked Baggage allowance.' />

              </div>
            }
          />
          <ExpandingText
            title='Liquids & Gels'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="You may carry as much liquid or gels in your checked baggage as you like, however your carry on bag may only contain liquids or gels in travel size containers of 3oz or less, AND all of those carry on containers MUST fit in a single 1 quart plastic bag." />
              </div>
            }
          />
          <ExpandingText
            title='Customs & Registration'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="Part of the whole immigration process involves securing health insurance for each member of the team, and is required by the Belarusian government. Andrew will act as your “go between” to make sure the process goes smoothly. In addition to the customs and immigration process, you will also need to register in 5 days after you arrive.  If at any time an official asks you a question and you’re not sure how to answer, ask Andrew for assistance." />
                <P text="Whether entering Belarus or returning to the US, do NOT use your camera, cell phone, or open any luggage until you have passed completely through customs and immigrations." />
              </div>
            }
          />
          <ExpandingText
            title='Time Zone'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="Belarus is in a “year round time zone” (UTC/GMT +3 hours) which means they are 7 hours ahead of the US Eastern Time (ET) during the spring and summer, and 8 hours ahead of the US Eastern Time in the fall and winter." />
                <div className={styles.twoColumn}>
                  <H2NComponent
                    primaryHeaderText={estTime()}
                    SecondaryComponent={
                      <P color={theme.colors.CHARCOAL} text='Atlanta' />
                    }
                    secondaryAllign='center'
                  />
                  <H2NComponent
                    primaryHeaderText={belTime()}
                    SecondaryComponent={
                      <P color={theme.colors.CHARCOAL} text='Minsk' />
                    }
                    secondaryAllign='center'
                  />
                </div>
              </div>
            }
          />
        </div>
        <HeaderNComponent
          primaryHeaderText='Accommodations & contact info'
          SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Part of your stay in Belarus may include a few days at the mission house in the town of “Bobruisk”. The mission house is just that, a large house situated in residential neighborhood. There may be up to 2-3 persons sharing a room. As a result it is highly recommended you bring some ear plugs. Don’t forget to bring an alarm clock. You will want set an alarm for the morning, not only to be ready and on time for the day, but also so you can “stagger” your morning shower sequentially with your fellow roommates. Although it’s usually supplied, I have found I like to bring my own towel and bath soap.' />}
          secondaryAllign='center'
        />
        <HeaderNComponent
          primaryHeaderText='Contact Information in Belarus'
          SecondaryComponent={
            <>
              <P color={theme.colors.CHARCOAL} text='P2 Per. Slutsky 8A, Bobruisk, 213800 Belarus' />
              <div className={styles.oneLine} onClick={(event) => goTo(event, 'tel:011375339115805')}><P inline='false' text='Telephone: 011 375 33 911 5805 (from USA)' color={theme.colors.BLUE} /> </div>
              <div className={styles.oneLine} onClick={(event) => goTo(event, 'tel:375339115805')}><P inline='false' text='+375 33 911-5805 (within Belarus)' color={theme.colors.BLUE} /> </div>
            </>
          }
          secondaryAllign='center'
        />
        <div className={styles.itemsExpandingContainer}>
          <ExpandingText
            title='Host Homes'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="It is likely that some or all of your accommodations will be in a “host home”. These are usually the homes or apartments of the people from the local sponsoring church, but not always! Sometimes these people are unbelievers, so beware of your testimony! In all cases be as gracious as possible. Upon entering the house take off your shoes and leave them at the front door. Your host will may provide you with slippers to wear while in their home. Please bear in mind the average income in Belarus is only about $300 a month. Your hosts have likely made great sacrifices so that you could spend the night with them.  They probably spent extra money and prepared a special meal just for you. So… even it you don’t like it – EAT IT! (with a big smile of course). It is considered quite rude to not eat what you are served. Of course if you have a certain food allergy or are absolutely convinced you will not be able to hold down a certain food, then discretely and politely pass on that item. Additionally, if you know in advance that you will be staying in host homes, be sure to bring some small gifts for the husband, wife, and children. They will be GREATLY appreciated and will help to leave a positive impression. It’s simply a nice way of saying thank you." />
              </div>
            }
          />
          <ExpandingText
            title='Food'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="As you might expect, the menu is “Belarusian style” which most Americans find quite enjoyable. Common are such foods as: mashed potatoes, rice, pasta, chicken, beef, pork, vegetables, tea, coffee, cheese, eggs, beets soup, vegetable soup, meat ball soup, fruits, salads, several types of pancakes, deserts, milk, yogurt, cereal, jam, ravioli, and many others. Plan on hot tea with every meal! It seems to be main stay over there and is essential for any sort of social gathering where refreshments are served. Meals usually begin with some cheeses, small pieces of lunch meat, and bread. You may at first think, “Boy, this isn’t much to eat!” Shortly, however, other foods will be brought to the table, often followed by soup and then the main course. I assure you, you will have plenty to eat!" />
              </div>
            }
          />
          <ExpandingText
            title='Clothing'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="Other than dressing for comfort (see “Climate / Temperature”) a few considerations should be given to your choice of clothing. In general the Belarusians are a bit more conservative than us. When visiting orphanages, schools, hospitals, etc. during the week, it’s okay to wear a GOOD pair of jeans and a nice shirt or blouse. On Sundays it is best to dress up a little more. For the guys at least a button up shirt and tie, and for the ladies a dress is preferable. If you are a pastor, and / or teaching or preaching in the churches, it is best to wear a suit. When at the mission house, tee shirts, jeans, sweat pants, etc. are acceptable." />
              </div>
            }
          />
          <ExpandingText
            title='Laundry'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="If at all possible bring as many changes of clothing as you will need for the entire trip. There is a washer for your use at the mission house, however you may be staying at a hotel or in a host home on the day you need to do laundry. Additionally, trying to find the time in your busy schedule to do a load of wash at the mission house, with other people also wanting to wash, may be difficult. Also bear in mind, there are very few dryers in Belarus. Whatever you wash will need to be hung out to “air dry”." />
              </div>
            }
          />
          <ExpandingText
            title='Electricity'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="The Belarus electrical standard is 220/240 volts, and uses a two round pin plug that is common in much of Northern Europe. There are two types of these plugs, one uses a larger diameter pin, and the other uses a smaller diameter. The type used in Belarus is “usually” the larger diameter pin, (although you may occasionally find the smaller one) often called a “Schuko” plug, and technically known as the “CEE 7/4”. It should be noted however that the “smaller” style of these plugs will also fit and function just fine in the “larger” style socket." />
                <P text="The United States’ electrical standard is 110/120 volts. Many “wall wart” style chargers sold in the US (i.e. for cell phone chargers, iPod chargers, electric razor chargers, etc.) will also work in Belarus with just a simple (and inexpensive) “adapter plug”. Most other devices will require a “power converter”. One type of “power converter” is needed for heating devices (solid state) like hair dryers, curling irons, and a different type (transformer) is needed for electronic devices. Do not confuse the two! IT IS ESSENTIAL that you read the label on your device to determine if a “power converter” is needed (and which type; transformer or solid state) or if just a simple adapter plug will suffice. Now days you will even find a few power converters that are “switchable” and will work both for electronics and heating devices!" />
                <div className={styles.oneLine} onClick={(event) => goTo(event, 'https://www.amazon.com/s?k=110+to+220+voltage+converter&sprefix=110+to+220+voltage+co%2Caps%2C282&ref=nb_sb_ss_ts-doa-p_1_21')}><P inline='false' text='Amazon Power Converters' color={theme.colors.BLUE} /> </div>
                <div className={styles.oneLine} onClick={(event) => goTo(event, 'https://www.amazon.com/s?k=220V+to+110V+Step+Down+Power+Voltage+Converter&ref=nb_sb_noss')}><P inline='false' text='Amazon Power Transformers' color={theme.colors.BLUE} /> </div>
                <div>
                  <P inline='true' text="For additional information and solutions regarding foreign electrical standards" />
                  <div className={styles.oneLine} onClick={(event) => goTo(event, 'https://www.skyscanner.net/news/international-travel-plug-adapter-guide')}><P inline='true' text=' visit' color={theme.colors.BLUE} /> </div>
                </div>
              </div>
            }
          />
          <ExpandingText
            title='Phone'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="Most US phone carriers work great in Belarus. Please make sure to purchase a International Day pass or some sort of travel package to avoid large roaming fees." />
              </div>
            }
          />
          <ExpandingText
            title='Currency'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="Belarus uses the “Belarusian Ruble” (abbreviated “BYN”). It is NOT the same as the Russian Ruble. " />
                <div>
                <div className={styles.oneLine} onClick={(event) => goTo(event, 'https://myfin.by/currency/usd')}><P inline='false' text='Current Exchange Rates' color={theme.colors.BLUE} /> </div>
                </div>
                <NAVTEXT text="NOTE: All your meals will be provided. There is little need for you to spend money except for an occasional snack, or souvenirs for yourself, family, or friends. Typically $100 – $300 is all you will need or want! Andrew usually will make provisions to exchange your US dollars for Belarusian rubles once in Belarus. No one that I am aware of in the United States is able to supply Belarusian Rubles.  Alternatively, you might want to consider simply donating your remaining rubles to the ministry!" />
              </div>
            }
          />
        </div>
        <div className={styles.itemsExpandingContainer}>
          <ExpandingText
            title='Climate / Temperatures'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="Temperatures in Belarus vary greatly depending on the time of year. They are almost always considerably cooler than most places here in the United States. It is not uncommon however to have an occasional “swing” in temperature where the high for the day might be as much as 20 degrees cooler or warmer than the day before. Mornings and evenings can obviously be a little cooler as well. To be on the safe side, even during the summer months, you will want to carry a lightweight jacket, especially if your “mission travels” start early or run into the evening." />
                <Table
                  aria-label="Example table with static content"
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                >
                  <Table.Header>
                    <Table.Column>Month</Table.Column>
                    <Table.Column>Average Low (F)</Table.Column>
                    <Table.Column>Average High (F)</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row key="1">
                      <Table.Cell>January</Table.Cell>
                      <Table.Cell>12</Table.Cell>
                      <Table.Cell>25</Table.Cell>
                    </Table.Row>
                    <Table.Row key="2">
                      <Table.Cell>February</Table.Cell>
                      <Table.Cell>14</Table.Cell>
                      <Table.Cell>27</Table.Cell>
                    </Table.Row>
                    <Table.Row key="3">
                      <Table.Cell>March</Table.Cell>
                      <Table.Cell>21</Table.Cell>
                      <Table.Cell>36</Table.Cell>
                    </Table.Row>
                    <Table.Row key="4">
                      <Table.Cell>April</Table.Cell>
                      <Table.Cell>34</Table.Cell>
                      <Table.Cell>50</Table.Cell>
                    </Table.Row>
                    <Table.Row key="5">
                      <Table.Cell>May</Table.Cell>
                      <Table.Cell>45</Table.Cell>
                      <Table.Cell>64</Table.Cell>
                    </Table.Row>
                    <Table.Row key="6">
                      <Table.Cell>June</Table.Cell>
                      <Table.Cell>52</Table.Cell>
                      <Table.Cell>72</Table.Cell>
                    </Table.Row>
                    <Table.Row key="7">
                      <Table.Cell>July</Table.Cell>
                      <Table.Cell>55</Table.Cell>
                      <Table.Cell>73</Table.Cell>
                    </Table.Row>
                    <Table.Row key="8">
                      <Table.Cell>August</Table.Cell>
                      <Table.Cell>54</Table.Cell>
                      <Table.Cell>72</Table.Cell>
                    </Table.Row>
                    <Table.Row key="9">
                      <Table.Cell>September</Table.Cell>
                      <Table.Cell>46</Table.Cell>
                      <Table.Cell>63</Table.Cell>
                    </Table.Row>
                    <Table.Row key="10">
                      <Table.Cell>October</Table.Cell>
                      <Table.Cell>37</Table.Cell>
                      <Table.Cell>50</Table.Cell>
                    </Table.Row>
                    <Table.Row key="11">
                      <Table.Cell>November</Table.Cell>
                      <Table.Cell>28</Table.Cell>
                      <Table.Cell>36</Table.Cell>
                    </Table.Row>
                    <Table.Row key="12">
                      <Table.Cell>December</Table.Cell>
                      <Table.Cell>19</Table.Cell>
                      <Table.Cell>28</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            }
          />
          <ExpandingText
            title='Politics'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="We are going to preach Christ and Him crucified! Perhaps the two of the MOST important things in life are politics and religion; however Jesus Christ is FAR more important than either of these. Political discussions will only divide and detract from our real purpose. It is wise if asked your political opinion to just say something like, “Well, I don’t know much about that. We’re here to just enjoy your wonderful country”. Not only will this help keep the discussion “on track” but it will also prevent you from alienating someone who might otherwise be quite open to the gospel. Additionally, speaking poorly of the Belarusian government is EXTREAMLY unwise and dangerous. Doing so could not only close the doors for future mission teams to minister, but could also jeopardize the safety of YOUR mission trip." />
              </div>
            }
          />
          <ExpandingText
            title='Illness'
            secondaryComponent={
              <div className={styles.bioText}>
                <P text="Many people do experience some very mild stomach upset or diarrhea that lasts for perhaps a day or two. This of course is not unique to Belarus; it is quite common when traveling anywhere abroad. I want to emphasize, usually it is very mild however, being prepared with some “Imodium AD” or something similar is an excellent idea. Likewise, at other times, some people may experience some constipation. So being prepared for either extreme is wise." />
              </div>
            }
          />
        </div>
      </div>
    </>
  )
}
