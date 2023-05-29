import React from 'react'
import {
    Roboto_Slab
} from '@next/font/google'

const Roboto = Roboto_Slab(
    {
        subsets: ['latin'],
        weight: ['300'],
        style: ['normal']

    }
)

export default function FIELDTEXT(props) {
    return (
        <>
            <div id='fieldtxt' style={{ color: props.color, opacity: props.opacity }} className={Roboto.className}>{props.text}</div>
            
        </>
    )
}
