import React from "react";
import Link from "next/link";
import Image from "next/image";
import NH from "../fonts/NH";
import NAVTEXT from "../fonts/NAVTEXT";
import Stack from "@mui/material/Stack";
import {Spacer} from "@nextui-org/react";
import Social from "./social";
import styles from '../../styles/Footers/Foot.module.css'

var currentYear = new Date().getFullYear();

const footerNavData = [
  {
    section: "Who We Are",
    links: [
      { text: "Our Vision", link: "/vision" },
      { text: "Faith Statement", link: "/faith" },
      { text: "Annual Report", link: "/report" },
    ],
  },
  {
    section: "Team",
    links: [
      { text: "Advisory Board", link: "/advisory" },
      { text: "Board Members", link: "/board" },
      { text: "Our Partners", link: "/partners" },
      { text: "Founders", link: "/founders" },
    ],
  },
  {
    section: "Missionaries",
    links: [{ text: "Cassandra", link: "/grist" }],
  },
  {
    section: "Ministries",
    links: [
      { text: "Brest Bible Church", link: "/brest" },
      { text: "DayCare Centers", link: "/daycare" },
      { text: "Evangelism", link: "/plant" },
      { text: "Orphan Adoption", link: "/gospel" },
      { text: "Youth Outreach", link: "/orphans" },
      { text: "Books Printing", link: "/youth" },
    ],
  },
  {
    section: "Events",
    links: [
      { text: "Calendar", link: "/calendar" },
      { text: "Trip Registration", link: "/trip" },
    ],
  },
  {
    section: "Resources",
    links: [
      { text: "Gallery", link: "/gallery" },
      { text: "Videos", link: "/videos" },
      { text: "News", link: "/news" },
      { text: "Things to Know", link: "/brief" },
      { text: "Fundraising Letter", link: "/letter" },
    ],
  },
  {
    section: "Contact Us",
    links: [{ text: "Contact", link: "/contact" }],
  },
  {
    section: "Donate",
    links: [
      { text: "General", link: "/donate" },
      { text: "Urgent Matching Fund", link: "/matching" },
      { text: "Love in Action Initiative", link: "/love" },
      { text: "Good & Evil Bible", link: "/literature" },
      { text: "Legacy Giving", link: "/legacy" },
      { text: "Trip Donations", link: "/pay" },
    ],
  },
  {
    section: "Store",
    links: [
      { text: "Store", link: "https://shop.belarusmission.org/" },
      {
        text: "All products",
        link: "https://shop.belarusmission.org/collections/all",
      },
    ],
  },
];

export default function Footer() {
  return (
      <Stack
          spacing={5}
          alignItems="center"
          sx={{
            paddingTop: "60px",
          }}
      >
        <div
            className={styles.footer__container}
      >
        {/* Логотип выровнен по левому краю без дополнительного отступа */}
          <span
              className={styles.footer__logo}
        >
          <Image
              src="img/logos/logo_stack.svg"
              alt="BMI"
              width={187}
              height={91.8}
          />
        </span>
          <ul
              className={styles.footer__nav}
        >
          {footerNavData.map((section, index) => (
              <li
                  className={styles.footer__item}
                  key={index}
              >
                  <NH text={section.section}/>
                  {section.links.map((link, idx) => (
                      <Link className={styles.footer__link} key={idx} href={link.link} passHref>
                        <NAVTEXT text={link.text}/>
                      </Link>
                  ))}
              </li>
          ))}
          </ul>
        </div>
        <Stack spacing={2}>
      <Social />
      <NAVTEXT
        text={`© Copyright 2000 - ${currentYear} | All Rights Reserved`}
        link="#"
      />
        </Stack>
      <Spacer y={1.2} />
    </Stack>
  );
}
