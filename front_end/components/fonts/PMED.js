import React from 'react'
import { Roboto_Slab
} from "next/font/google"

const Roboto = Roboto_Slab(
    {
        subsets: ['latin'],
        weight: ['500'],
        style: ['normal']
        
    }
)

export default function PMED(props) {
    return (
            <p style={{color:props.color}} className={Roboto.className}>{props.text}</p>
    )
}
