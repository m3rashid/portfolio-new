import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} MD Rashid Hussain. All Rights Reserved.`,
  author: {
    name: "MD Rashid Hussain",
    accounts: [
      {
        url: "https://github.com/m3rashid",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "https://twitter.com/m3_rashid",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />,
      },
      {
        url: "https://dev.to/m3rashid",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />,
      },
      {
        url: "https://www.linkedin.com/in/m3rashid/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "mailto:m3rashid.hussain@gmail.com",
        label: "Mail Rashid",
        type: "gray",
        icon: <FiMail />,
      },
      {
        url: "https://www.instagram.com/m3_rashid/",
        label: "Instagram",
        type: "pink",
        icon: <FaInstagram />,
      },
      {
        url: "https://www.youtube.com/channel/UCeNqGjDNF0JJdWbd8jrgJdw",
        label: "Youtube",
        type: "red",
        icon: <FaYoutube />,
      },
    ],
  },
};

export default siteConfig;
