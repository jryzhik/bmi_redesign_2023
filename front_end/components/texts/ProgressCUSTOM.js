import React from 'react'
import styles from '../../styles/Texts/Texts.module.css';

function ProgressCUSTOM( { color, percent, opacity }) {
  return (
    <div className={styles.ProgressCUSTOM} style={{backgroundColor: color, width: percent, opacity: opacity}}>
    </div>
  )
}

export default ProgressCUSTOM