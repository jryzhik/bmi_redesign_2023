import React from 'react'
import AppNCalendar from './appNCalendar'
import H2NComponent from '../texts/h2NComponent copy'
import P from '../fonts/P'
import { theme } from '@nextui-org/react'
import styles from '../../styles/Events/Events.module.css';

export default function EventIconText({ start, end, imgSource, title, description }) {
  return (
    <div className={styles.generalContainer}>
      <div className={styles.iconNTextContainer}>
        <AppNCalendar
          start={start}
          end={end}
          imgSource={imgSource}
        />
        <H2NComponent
          primaryHeaderText={title}
          SecondaryComponent={
            <P color={theme.colors.CHARCOAL} text={description} />
          }
          secondaryAllign='left'
        />
      </div>
    </div>
  )
}
