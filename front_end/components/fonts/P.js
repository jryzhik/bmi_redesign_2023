import React from 'react'
import {Roboto_Slab} from "next/font/google"

const Roboto = Roboto_Slab(
    {
        subsets: ['latin'],
        weight: ['300'],
        style: ['normal']

    }
)

export default function P(props) {
    return (
        <>
            {
                props.inline === "true" ? (
                    <p
                        style={{
                            color: props.color,
                            display: 'inline',
                            textDecoration: props.textDecoration,
                        }}
                        className={Roboto.className}
                    >
                        {props.text}
                    </p>

                ) : (
                    <p
                        style={{
                            color: props.color,
                            textDecoration: props.textDecoration,
                        }}
                        className={Roboto.className}
                    >
                        {props.text}
                    </p>

                )
            }
        </>
    )
}
