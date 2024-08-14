import React from "react";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import NH from "../fonts/NH";
import NAVTEXT from "../fonts/NAVTEXT";
import Stack from "@mui/material/Stack";
import { Spacer } from "@nextui-org/react";
import styles from "../../styles/Footers/Foot.module.css";
import Social from "./social";

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
      { text: "Books", link: "/store" },
      { text: "Apparel", link: "/store" },
    ],
  },
];

export default function Footer() {
  return (
    <Stack spacing={2} className="generalCenter">
      <Grid container spacing={3} alignItems="start">
        {/* Логотип выровнен по левому краю без дополнительного отступа */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          display="flex"
          justifyContent="flex-start"
        >
          <Image
            src="img/logos/logo_stack.svg"
            alt="BMI"
            width={187}
            height={91.8}
          />
        </Grid>
        <Grid item container xs={12} spacing={4} justifyContent="flex-start">
          {footerNavData.map((section, index) => (
            <Grid key={index} item xs={6} sm={4} md={2}>
              <Stack spacing={2}>
                <NH text={section.section} />
                {section.links.map((link, idx) => (
                  <Link key={idx} href={link.link} passHref>
                    <NAVTEXT text={link.text} />
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Social />
      <NAVTEXT
        text={`© Copyright 2000 - ${currentYear} | All Rights Reserved`}
        link="#"
      />
      <Spacer y={1.2} />
    </Stack>
  );
}
