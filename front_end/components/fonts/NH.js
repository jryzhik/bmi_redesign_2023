import React from 'react'
import {
    Roboto_Slab
} from '@next/font/google'

const Roboto = Roboto_Slab(
    {
        subsets: ['latin'],
        weight: ['600'],
        style: ['normal']

    }
)

export default function NH(props) {
    return (
        <div id='nh' style={{ color: props.color }} className={Roboto.className}>{props.text}</div>
    )
}
