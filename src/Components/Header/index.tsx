import Link from "next/link"
import styles from "./style.module.css"
import { useTranslations } from "next-intl";
import LocalSwitcher from "@/Components/local-switcher"
import Image from "next/image";
import Menu from "../Sidevar/Menu";

const Header = () => {
  const t = useTranslations("Header")

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={`${styles.headerItems} ${styles.flex}`}>
          <div className={`${styles.siteItems} ${styles.flex}`}>
            <Link className={`${styles.siteLogoText} ${styles.flex} ${styles.colorBlack}`} href="/"><Image className={`${styles.siteLogoImage} ${styles.gap}`} src="/assets/icons/siteLogo.svg" alt="Site Logo" width={33} height={33} />Beautyness</Link>
            <Link className={`${styles.sitePhoneText} ${styles.flex} ${styles.colorBlack}`} href="tel:(+22) 123 456 7890"><Image className={`${styles.sitePhoneImage} ${styles.gap}`} src="/assets/icons/phoneIcon.svg" alt="Phone Icon" width={33} height={33} />{t("phone")}</Link>
          </div>
          <LocalSwitcher />
          <Menu />
          <nav className={styles.nav}>
            <ul className={`${styles.navList} ${styles.flex}`}>
              <li className={styles.navItems}><Link className={styles.navLinks} href="/">{t("home")}</Link></li>
              <li className={styles.navItems}><Link className={styles.navLinks} href="/">{t("about")}</Link></li>
              <li className={styles.navItems}><Link className={styles.navLinks} href="/">{t("services")}</Link></li>
              <li className={styles.navItems}><Link className={styles.navLinks} href="/">{t("contact")}</Link></li>
              <li className={styles.navSocItems}><Link className={styles.navSocLinks} target="_blank" href="https://www.facebook.com/"><Image className={`${styles.siteSocialIcons} ${styles.gap}`} src="/assets/icons/facebookIcon.svg" alt="Facebook Icon" width={15} height={15} /></Link></li>
              <li className={styles.navSocItems}><Link className={styles.navSocLinks} target="_blank" href="https://twitter.com/?lang=en"><Image className={`${styles.siteSocialIcons} ${styles.gap}`} src="/assets/icons/twitterIcon.svg" alt="Twitter Icon" width={15} height={15} /></Link></li>
              <li className={styles.navSocItems}><Link className={styles.navSocLinks} target="_blank" href="https://www.linkedin.com/"><Image className={`${styles.siteSocialIcons} ${styles.gap}`} src="/assets/icons/linkedinIcon.svg" alt="Linkedin Icon" width={15} height={15} /></Link></li>
              <div className={`${styles.reservContainer} ${styles.flex}`}>
                <Link className={`${styles.reservationLink} ${styles.flex}`} href="/"><Image className={styles.reservationIcon} src="/assets/icons/reservIcon.svg" alt="Reservation Icon" width={13.5} height={15} />{t("reservation")}</Link>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header