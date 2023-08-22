import React, { useState } from 'react'
import ImageNtext from '../components/hero/imageNtext'
import SearchBar from '../components/inputs/searchBar'
import styles from '../styles/Events/Events.module.css';
import DropdownDate from '../components/texts/dropdownDate';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import EventIconText from '../components/events/eventIconText';
import Link from 'next/link';
import clientPromise from '../lib/mongo/connect'


const currentYear = new Date().getFullYear()
const monthsDropDown = [
    {
        name: 'January', key: 'jan'
    },
    {
        name: 'February', key: 'feb'
    },
    {
        name: 'March', key: 'mar'
    },
    {
        name: 'April', key: 'apr'
    },
    {
        name: 'May', key: 'may'
    },
    {
        name: 'June', key: 'jun'
    },
    {
        name: 'July', key: 'jul'
    },
    {
        name: 'August', key: 'aug'
    },
    {
        name: 'September', key: 'jan'
    },
    {
        name: 'October', key: 'oct'
    },
    {
        name: 'November', key: 'nov'
    },
    {
        name: 'December', key: 'dec'
    },
    {
        name: 'All', key: 'all'
    }
]
const yearDropDown = [
    {
        name: currentYear, key: currentYear
    },
    {
        name: currentYear + 1, key: currentYear + 1
    },
    {
        name: currentYear + 2, key: currentYear + 2
    }
]

export default function Calendar( { events }) {
    const [selected, setSelected] = useState('')
    function elementOpactity(key) {
        if (selected == '') {
            return 1
        } else if (key != selected) {
            return .6
        } else {
            return 1
        }
    }
    function hoverHandle(key) {
        setSelected(key)
    }
    function leaveHandle() {
        setSelected('')
    }
    return (
        <>
            <ImageNtext
                color1="#040504"
                color2="#050502"
                imageUrl="/img/hero_images/events.jpg"
                textParent='Events'
                textChild='Calendar'
                headerText='Upcoming Events'
                subText='Discover important dates for events happening soon and in the future.'
                imageFocus={'center 40%'}
            />
            <div className={styles.container}>
                <Grid container width={'56.25em'} >
                    <Grid xs={12} sm={8} md={8} display="flex" justifyContent="center" alignItems="center">
                        <SearchBar />
                    </Grid>
                    <Grid xs={6} sm={2} md={2} display="flex" justifyContent="center" alignItems="center">
                        <div className={styles.leftPadding}>
                            <DropdownDate
                                title='Month'
                                defaultKey="all"
                                dropDownItemArray={monthsDropDown}
                                titleFont='text'
                            />
                        </div>
                    </Grid>
                    <Grid xs={6} sm={2} md={2} display="flex" justifyContent="center" alignItems="center">
                        <DropdownDate
                            title='Year'
                            defaultKey={currentYear.toString()}
                            dropDownItemArray={yearDropDown}
                            titleFont='number'
                        />
                    </Grid>
                </Grid>
            </div>
            <div className={styles.allevents}>
                {events.map((event) =>
                    <Link
                        href={{
                            pathname: '/event',
                            query: {
                                key: event._id,
                                start: JSON.stringify(event.start),
                                end: JSON.stringify(event.end),
                                imgSource: event.imgSource,
                                title: event.title,
                                description: event.description,
                                additionalDescription: event.additionalDescription
                              },
                        }}
                    >
                        <div onMouseEnter={() => hoverHandle(event.key)} style={{opacity: elementOpactity(event.key), transition: 'all .2s ease-out'}} onMouseLeave={leaveHandle}>
                            <EventIconText
                                key={event.key}
                                start={event.start}
                                end={event.end}
                                imgSource={event.imgSource}
                                title={event.title}
                                description={event.description}
                            />
                        </div>
                    </Link>
                )}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("masterdb");

        const events = await db
            .collection("events")
            .find({})
            .sort({ name_of_date_field : 1})
            .limit(20)
            .toArray();

        return {
            props: { events: JSON.parse(JSON.stringify(events)) },
        };
    } catch (e) {
        console.error(e);
    }
}
