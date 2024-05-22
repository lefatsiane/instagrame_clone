import React from "react";
import "./sidenav.css";
import { FaBars } from "react-icons/fa6"; //menu
import { FaClapperboard } from "react-icons/fa6"; // reels
import { FaComments } from "react-icons/fa6"; //messages
import { FaCompass } from "react-icons/fa6"; // explore
import { FaHouse } from "react-icons/fa6"; //home
import { FaMagnifyingGlass } from "react-icons/fa6"; //search
import { FaPlus } from "react-icons/fa6"; //add
import { FaRegHeart } from "react-icons/fa6"; //notificatioons

export default function Sidenav() {
  return ( 
    <div className="sideNav">
      <img
        className="navLogo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
        alt="Instagram Png Logo"
      ></img>

      <div className="navButtons">
        <button className="navButton">
          <FaHouse />

          <span>Home </span>
        </button>

        <button className="navButton">
          <FaMagnifyingGlass />
          <span>Search </span>
        </button>

        <button className="navButton">
          <FaCompass />
          <span>Explore </span>
        </button>

        <button className="navButton">
          <FaClapperboard />
          <span>Reels </span>
        </button>

        <button className="navButton">
          <FaComments />
          <span>Messages </span>
        </button>

        <button className="navButton">
          <FaRegHeart />
          <span>Notifications </span>
        </button>

        <button className="navButton">
          <FaPlus />
          <span> Create </span>
        </button>
      </div>
      <div className="moreButton">
        <button className="navButton">
          <FaBars />
          More
        </button>
      </div>
    </div>
  );
}

// used "npm install react-icons --save" in terminal to install react icons, the got icons from https://react-icons.github.io/react-icons/icons/fa6/
