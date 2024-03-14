"use client"
import React, { useState } from 'react'
import { useOutsideClick } from '../ref';
import styles from "./style.module.css"
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Menu = () => {


  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setBurgerMenuOpen(false);
  })
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);

  };
  return (
    <aside ref={ref}>
      <div >
        <input type="checkbox" role="button" aria-label="Display the menu" className={burgerMenuOpen ? styles.menu : styles.hideMenu} onClick={() => toggleBurgerMenu()} />
      </div>
      <nav className={`${styles.navMenu} ${burgerMenuOpen ? styles.showMenu : ''}`}>
        <li className={styles.navMenuItems}><Link className={styles.navLinks} onClick={() => setBurgerMenuOpen(false)} href="/">Home</Link></li>
        <li className={styles.navMenuItems}><Link className={styles.navLinks} onClick={() => setBurgerMenuOpen(false)} href="/">About</Link></li>
        <li className={styles.navMenuItems}><Link className={styles.navLinks} onClick={() => setBurgerMenuOpen(false)} href="/">Services</Link></li>
        <li className={styles.navMenuItems}><Link className={styles.navLinks} onClick={() => setBurgerMenuOpen(false)} href="/">Contact</Link></li>
        <ul className={styles.ulList}>
          <li className={styles.navMenuSocItems}><Link className={styles.navSocLinks} onClick={() => setBurgerMenuOpen(false)} target="_blank" href="https://www.facebook.com/"><Image className={`${styles.siteSocialIconss} ${styles.gap}`} src="/assets/icons/facebookIcon.svg" alt="Facebook Icon" width={15} height={15} /></Link></li>
          <li className={styles.navMenuSocItems}><Link className={styles.navSocLinks} onClick={() => setBurgerMenuOpen(false)} target="_blank" href="https://twitter.com/?lang=en"><Image className={`${styles.siteSocialIcons} ${styles.gap}`} src="/assets/icons/twitterIcon.svg" alt="Twitter Icon" width={15} height={15} /></Link></li>
          <li className={styles.navMenuSocItems}><Link className={styles.navSocLinks} onClick={() => setBurgerMenuOpen(false)} target="_blank" href="https://www.linkedin.com/"><Image className={`${styles.siteSocialIcons} ${styles.gap}`} src="/assets/icons/linkedinIcon.svg" alt="Linkedin Icon" width={15} height={15} /></Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Menu