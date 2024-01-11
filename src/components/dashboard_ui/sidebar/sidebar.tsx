"use client";
import React from "react";
import { motion } from "framer-motion";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import "./_sidebar.scss";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const menuItems: Com.TmenuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const { data: session, status } = useSession();
  // if (status !== "authenticated") {
  //   return <div></div>;
  // } else
  return (
    <motion.div
      className="sidebar-container"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.01,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
      }}
    >
      <div className="user">
        <Image
          src="/astronaut.png"
          alt="user image"
          height={50}
          width={50}
          className="userImg"
        />
        <div className="userDetails">
          <span className="userName">Vivek Nepal</span>
          <span className="userRole">Administrator</span>
        </div>
      </div>
      <ul className="category">
        {menuItems.map((category, catIndex) => (
          <li key={category.title}>
            <span>{category.title}</span>
            {category.list.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3 * index * catIndex,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                }}
              >
                <MenuLink item={item} />
              </motion.div>
            ))}
          </li>
        ))}
      </ul>
      <button
        className="signout-btn"
        onClick={async () => {
          await signOut();
        }}
      >
        <span>
          <MdLogout />
        </span>
        <span>SignOut</span>
      </button>
    </motion.div>
  );
};

export default Sidebar;
