import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="logo">
        <Link href="/">
          <h1>NFQ 🏳️‍🌈</h1>
        </Link>
      </div>
      <div>
        <ul className="nav-option">
          <li>
            <Link href="/explore">
              Find your Match
            </Link>
          </li>
          <li>
            <Link href="/login">
              Sign Up | Log In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
