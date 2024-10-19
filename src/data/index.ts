import homeIcon from "../../public/home-icon.png";
import usersIcon from "../../public/users-icon.png";
import learnToSwimIcon from "../../public/learn-to-swim-icon.png";
import productsIcon from "../../public/product-icon.png";
import classIcon from "../../public/class-icon.png";
import albumIcon from "../../public/album-icon.png";
import settingsIcon from "../../public/settings-icon.png";

import activeHomeIcon from "../../public/active-home-icon.png";
import activeUsersIcon from "../../public/active-users-icon.png";
import activeLearnToSwimIcon from "../../public/active-learn-to-swim-icon.png";
import activeProductsIcon from "../../public/active-product-icon.png";
import activeClassIcon from "../../public/active-class-icon.png";
import activeAlbumIcon from "../../public/active-album-icon.png";
import activeSettingsIcon from "../../public/active-settings-icon.png";

export const navLinks = [
  {
    title: "Home",
    path: "/",
    icon: homeIcon,
    activeIcon: activeHomeIcon,
  },
  {
    title: "Users",
    path: "/users",
    icon: usersIcon,
    activeIcon: activeUsersIcon,
  },
  {
    title: "Learn To Swim",
    path: "/learn-to-swim",
    icon: learnToSwimIcon,
    activeIcon: activeLearnToSwimIcon,
  },
  {
    title: "Product Management",
    path: "/products",
    icon: productsIcon,
    activeIcon: activeProductsIcon,
  },
  {
    title: "Class Management",
    path: "/class",
    icon: classIcon,
    activeIcon: activeClassIcon,
  },
  {
    title: "Album Management",
    path: "/albums",
    icon: albumIcon,
    activeIcon: activeAlbumIcon,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: settingsIcon,
    activeIcon: activeSettingsIcon,
  },
];

export const userHeaders = [
  { label: "User Name", data: (row) => row.name },
  { label: "Email Address", data: (row) => row.email },
];
export const orderHeaders = [
  { label: "Product", data: (row) => row.name },
  { label: "Quantity", data: (row) => row.quantity },
  { label: "Name", data: (row) => row.userName },
];
export const callsHeaders = [
  { label: "Name", data: (row) => row.name },
  { label: "Phone Number", data: (row) => row.phone },
  { label: "Date", data: (row) => row.date },
  { label: "Time", data: (row) => row.time },
];

export const emailHeaders = [
  { label: "Subject", data: (row) => row.subject },
  { label: "Email Address", data: (row) => row.email },
];

export const userData = [
  {
    name: "Omar Antar",
    email: "omar.antar@gmail.com",
  },
  {
    name: "Ahmad Antar",
    email: "ahmad.antar@gmail.com",
  },
  {
    name: "Youssof Antar",
    email: "youssof.antar@gmail.com",
  },
  {
    name: "Hiba Antar",
    email: "hiba.antar@gmail.com",
  },
  {
    name: "Mohammad Antar",
    email: "Mohammad.antar@gmail.com",
  },
];
export const orderData = [
  {
    name: "Swimming Goggles",
    quantity: "3",
    userName: "Omar Antar",
  },
];
export const callsData = [
  {
    name: "Lindsey Stroud",
    phone: "71 344 727",
    date: "Jun, 12 2024",
    time: "12 PM",
  },
  {
    name: "Lindsey Stroud",
    phone: "71 344 727",
    date: "Jun, 12 2024",
    time: "12 PM",
  },
  {
    name: "Lindsey Stroud",
    phone: "71 344 727",
    date: "Jun, 12 2024",
    time: "12 PM",
  },
];

export const emailData = [
  {
    subject: "Website Feedback",
    email: "omar.antar@gmail.com",
  },
  {
    subject: "Website Feedback",
    email: "omar.antar@gmail.com",
  },
  {
    subject: "Website Feedback",
    email: "omar.antar@gmail.com",
  },
  {
    subject: "Website Feedback",
    email: "omar.antar@gmail.com",
  },
];
