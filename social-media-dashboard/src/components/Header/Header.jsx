import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Social Media Dashboard</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : ""
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? `${styles.activeLink}` : ""
          }
        >
          Notifications
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
