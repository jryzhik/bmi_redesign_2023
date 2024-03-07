import React from 'react'
import { Progress } from '@nextui-org/react';
import theme from '../../styles/theme';
import styles from '../../styles/Texts/Texts.module.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ProgressCUSTOM from './ProgressCUSTOM';

function TwoProgressOfHundred({ percentRaised, color1, color2 }) {
    return (
        <div className={styles.twoProgressOfHundredContainer}>
            <ProgressCUSTOM percent={`${percentRaised}%`} color={color1} />
            <ProgressCUSTOM percent={`${100 - percentRaised}%`} color={color2} opacity={.4}/>
        </div>
    )
}

export default TwoProgressOfHundred