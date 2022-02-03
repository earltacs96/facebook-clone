/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from "react";
import IconButton from "../../components/CenterHeader/IconButton";
import ActiveIconButton from "../../components/CenterHeader/IconButton/active";
import CarretIcon from "../../components/Icons/CarretIcon";
import GamingIcon from "../../components/Icons/GamingIcon";
import HomeIcon from "../../components/Icons/HomeIcon";
import MarketIcon from "../../components/Icons/MarketIcon";
import MessagesIcon from "../../components/Icons/MessagesIcon";
import NotificationsIcon from "../../components/Icons/NotificationsIcon";
import UserGroupIcon from "../../components/Icons/UserGroupIcon";
import VideoIcon from "../../components/Icons/VideoIcon";
import SearchInput from "../../components/LeftHeader/SearchInput";
import IconButtons from "../../components/RightHeader/IconButton";
import "./index.css";

const Header: FC<{}> = ({ children, ...props }) => {
  return (
    <nav className="w-full bg-white border-gray-200 px-2 sm:px-4 dark:bg-gray-800 shadow-md">
      <div className="flex flex-wrap justify-between">
        <div className="flex text-white items-center py-2.5">
          <a href="/">
            <svg
              viewBox="0 0 36 36"
              className="block mr-3"
              fill="url(#jsc_c_2)"
              height="40"
              width="40"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  x2="50%"
                  y1="97.0782153%"
                  y2="0%"
                  id="jsc_c_2"
                >
                  <stop offset="0%" stopColor="#0062E0"></stop>
                  <stop offset="100%" stopColor="#19AFFF"></stop>
                </linearGradient>
              </defs>
              <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
              <path
                className="fill-white"
                d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
              ></path>
            </svg>
          </a>
          <SearchInput />
        </div>
        <div className="hidden w-full md:flex flex-row justify-evenly items-center md:w-auto">
          <ul className="flex flex-row h-full">
            <ActiveIconButton>
              <HomeIcon />
            </ActiveIconButton>
            <IconButton>
              <VideoIcon />
            </IconButton>
            <IconButton>
              <MarketIcon />
            </IconButton>
            <IconButton>
              <UserGroupIcon />
            </IconButton>
            <IconButton>
              <GamingIcon />
            </IconButton>
          </ul>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="hidden md:flex text-sm items-center rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-1/p100x100/240736495_3144071535827518_8579531101992411958_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=I9sqza0B53wAX-BpG0C&_nc_ht=scontent-nrt1-1.xx&oh=00_AT96QfKsAjAAGsN6o6Gdd0XiK8amaHWecx6_wkwlk9k29g&oe=62019AB1"
              alt="user photo"
            />
            <span className="font-medium">Earl</span>
          </button>
          <div className="hidden md:block bg-slate-200 p-2 rounded-full ml-2">
            <svg viewBox="0 0 44 44" width="1em" height="1em" className="">
              <circle cx="7" cy="7" r="6"></circle>
              <circle cx="22" cy="7" r="6"></circle>
              <circle cx="37" cy="7" r="6"></circle>
              <circle cx="7" cy="22" r="6"></circle>
              <circle cx="22" cy="22" r="6"></circle>
              <circle cx="37" cy="22" r="6"></circle>
              <circle cx="7" cy="37" r="6"></circle>
              <circle cx="22" cy="37" r="6"></circle>
              <circle cx="37" cy="37" r="6"></circle>
            </svg>
          </div>
          <IconButtons>
            <MessagesIcon />
          </IconButtons>
          <IconButtons>
            <NotificationsIcon />
          </IconButtons>
          <IconButtons>
            <CarretIcon />
          </IconButtons>
        </div>
      </div>
    </nav>
  );
};

export default Header;
