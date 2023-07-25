import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'next/image';
import NH from '../fonts/NH';
import NAVTEXT from '../fonts/NAVTEXT';
import Stack from '@mui/material/Stack';
import { Spacer } from '@nextui-org/react';
import styles from '../../styles/Footers/Foot.module.css';
import Social from './social';

var currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <>
      <Stack spacing={2} className='generalCenter'>
        <Grid container margin={3} justify='center' alignItems='start' spacing={0}>
          <Grid xs={12} sm={4} md={10} >
            <Image src="img/logos/logo_stack.svg" alt='BMI' width={187} height={91.8} />
          </Grid>
          <Grid container margin={3} spacing={4}>
            <Grid xs={6} sm={6} md={2}>
              <Stack spacing={2}>
                <NH text='Who We Are' />
                <NAVTEXT text='Our Vision' />
                <NAVTEXT text='Faith Statement' />
                <NAVTEXT text='Annual Report' />
              </Stack>
            </Grid>
            <Grid xs={6} sm={6} md={2}>
              <Stack spacing={2}>
                <NH text='Team' />
                <NAVTEXT text='Advisory Board' />
                <NAVTEXT text='Board Members' />
                <NAVTEXT text='Our Partners' />
                <NAVTEXT text='Founders' />
              </Stack>
            </Grid>
            <Grid xs={6} sm={6} md={2}>
              <Stack spacing={2}>
                <NH text='Missionaries' />
                <NAVTEXT text='Vlad & Polina' />
                <NAVTEXT text='Cassandra' />
                <NAVTEXT text='Vadim & Natasha' />
                <NAVTEXT text='Dmitry & Natasha' />
              </Stack>
            </Grid>
            <Grid xs={6} sm={6} md={2}>
              <Stack spacing={2}>
                <NH text='Ministries' />
                <NAVTEXT text='Brest Bible Church' />
                <NAVTEXT text='DayCare Centers' />
                <NAVTEXT text='Evangelism' />
                <NAVTEXT text='Orphan Adoption' />
                <NAVTEXT text='Youth Outreach' />
                <NAVTEXT text='Books Printing' />
              </Stack>
            </Grid>
            <Grid xs={6} sm={6} md={2}>
              <Stack spacing={2}>
                <NH text='Events' />
                <NAVTEXT text='Calendar' />
                <NAVTEXT text='Trip Registration' />
              </Stack>
            </Grid>
            <Grid xs={6} sm={6} md={2}>
              <Stack spacing={2}>
                <NH text='Resources' />
                <NAVTEXT text='Gallery' />
                <NAVTEXT text='Videos' />
                <NAVTEXT text='News' />
                <NAVTEXT text='Things to Know' />
                <NAVTEXT text='Fundraising Letter' />
              </Stack>
            </Grid>
            <Grid xs={6} sm={6} md={2}>
              <Stack spacing={2}>
                <NH text='Contact Us' />
              </Stack>
            </Grid>
            <Grid xs={6} sm={6} md={2}>
              <Stack spacing={2}>
                <NH text='Donate' />
                <NAVTEXT text='General' />
                <NAVTEXT text='Urgent Matching Fund' />
                <NAVTEXT text='Love in Action Initiative' />
                <NAVTEXT text='Good & Evil Bible' />
                <NAVTEXT text='Legacy Giving' />
              </Stack>
            </Grid>
            <Grid xs={6} sm={6} md={2}>
              <Stack spacing={2}>
                <NH text='Store' />
                <NAVTEXT text='Books' />
                <NAVTEXT text='Apparel' />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Social/>
        <NAVTEXT text={'© Copyright 2000 - ' + currentYear +' | All Rights Reserved'}/>
        <Spacer y={1.2}/>
      </Stack>
    </>
  )
}
