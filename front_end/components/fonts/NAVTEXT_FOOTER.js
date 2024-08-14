import Link from "next/link";
import { Roboto_Slab } from "next/font/google";

const Roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal"],
});

export default function NAVTEXT({ text, link }) {
  if (!link) {
    console.error("Link is undefined for text:", text);
    return null; // Не рендерить, если link undefined
  }

  return (
    <Link
      href={link}
      className={Roboto.className}
      style={{ color: "inherit", textDecoration: "none" }}
    >
      {text}
    </Link>
  );
}
