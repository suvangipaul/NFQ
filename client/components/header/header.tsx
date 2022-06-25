import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const Header = () => {
  const { user, isLoading } = useUser();
  return (
    <div className={styles.header}>
      <div className="logo">
        <Link href="/">
          <h1>NFQ 🏳️‍🌈</h1>
        </Link>
      </div>
      <div>
        <ul className="nav-option">
          { user && (
            <li>
              <Link href="/explore">Find your Match</Link>
            </li>
          )}
          {!user && !isLoading && (
            <li>
              <Link href="/api/auth/login">Sign Up | Log In</Link>
            </li>
          )}
          {user && (
            <li>
              <Link href="/api/auth/logout">Log Out</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
