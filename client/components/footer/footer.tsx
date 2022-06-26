import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div>
      <div className="footer-container">
        <h4>NFQ - NO FEAR QUEER</h4>
        <div className="black-portion"></div>
        <div className="black-portion"></div>
        <div className="black-portion"></div>
        <div className="footer-content">
          <div className="footer-icon">
            <Image
              src="/bLack-twit.png"
              alt="Twitter"
              width={22}
              height={22}
            />
            <Image
              src="/bLack-git.png"
              alt="GitHub"
              width={22}
              height={22}
            />
            <Image
              src="/black-link.png"
              alt="LinkedIn"
              width={22}
              height={22}
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer