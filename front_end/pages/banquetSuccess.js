import React from 'react';
import Image from 'next/image';
import ScheduleIcon from '../public/img/icons/schedule_confirmed.png';
import H1 from '../components/fonts/H1';
import P from '../components/fonts/P';

export default function BanquetSuccess() {
    return (
        <>
            <div className="generalCenter">
                <Image
                    src={ScheduleIcon}
                    alt="confirmed"
                    style={{ maxWidth: '30%', height: 'auto' }}
                />
                <H1 text="You're on the list!" />
                <P text="Mark your calendar for an unforgettable evening" />
                <P text="November 22nd | 6PM | Forsyth Conference Center" />
            </div>
        </>
    );
}
