import React from 'react'
import {Roboto_Slab} from "next/font/google"

const Roboto = Roboto_Slab(
    {
        subsets: ['latin'],
        weight: ["300", "600"],
        style: ['normal']
    }
)

export default function NH(props) {
    return (
        <div id='nh' style={{color: props.color, whiteSpace: "nowrap"}} className={Roboto.className}>{props.text}</div>
        <div
            id='nh'
            style={{
                color: props.color,
                display: "inline-block",
                width: "100%",
                height: "100%",
                fontWeight: props.fontweight || "600",
                textDecoration: props.decoration || "none",
                borderBottom: props.decoration === "underline" ? "1px solid transparent" : "none",
            }}
            className={Roboto.className}
        >
            {props.text}
        </div>
    )
}
