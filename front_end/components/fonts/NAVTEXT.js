import React from "react";
import { Roboto_Slab } from "next/font/google";

const Roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal"],
});

export default function NAVTEXT({ text, link }) {
  return (
    <a
      id="navtxt"
      className={Roboto.className}
      style={{ color: "inherit", textDecoration: "none" }}
    >
      {text}
    </a>
  );
}
