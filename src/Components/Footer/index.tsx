import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.footerItems} ${styles.justify} ${styles.alignCenter}`}>
          <div className={`${styles.footerLogoItems} ${styles.alignCenter}`}>
            <Link className={`${styles.footerLogoTitle} ${styles.colorWhite} ${styles.alignCenter}`} href="/" ><Image className={styles.footerSiteLogoImg} src="/assets/icons/siteLogo.svg" alt="site logo" width={65} height={65} />Beautyness</Link>
          </div>
          <div className={styles.footerSocIcons}>
            <Link className={styles.footerSocLinks} target="_blank" href="https://www.facebook.com/" ><Image src="/assets/icons/facebookFooter.svg" alt="Facebook Icon" width={55} height={55} /></Link>
            <Link className={styles.footerSocLinks} target="_blank" href="https://twitter.com/" ><Image src="/assets/icons/twitterFooter.svg" alt="Twiiter Icon" width={55} height={55} /></Link>
            <Link className={styles.footerSocLinks} target="_blank" href="https://www.linkedin.com/" ><Image src="/assets/icons/linkedinFooter.svg" alt="Linkedin Icon" width={55} height={55} /></Link>
            <Link className={styles.footerSocLinks} target="_blank" href="https://www.instagram.com/" ><Image src="/assets/icons/instagramFooter.svg" alt="Instagram Icon" width={55} height={55} /></Link>
          </div>
        </div>
        <div className={styles.footerPages}>
          <div className={styles.footerPagesItems}>
            <h3 className={`${styles.pagesTitle} ${styles.colorWhite}`}>Explore</h3>
            <Link className={`${styles.pageLinks} ${styles.colorWhite} ${styles.block}`} href="/">Home</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite} ${styles.block}`} href="/">About Us</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite} ${styles.block}`} href="/">Services</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite} ${styles.block}`} href="/">Appointments</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite} ${styles.block}`} href="/">Blog</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite} ${styles.block}`} href="/">Contact Us</Link>
          </div>
          <div className={styles.footerPagesItems}>
            <h3 className={`${styles.pagesTitle} ${styles.colorWhite}`}>Keep in Touch</h3>
            <div className={`${styles.addressMain} ${styles.flex} ${styles.alignCenter}`}>
              <div className={`${styles.adress} ${styles.colorWhite}`}>
                <h4 className={styles.adressTitle}>Address:</h4>
                <h5 className={styles.mailTitle}>Mail:</h5>
                <h6 className={styles.phoneTitle}>Phone:</h6>
              </div>
              <div className={`${styles.adress} ${styles.colorWhite}`}>
                <p className={styles.addressText}>24A Kingston St, Los Vegas NC 28202, USA.</p>
                <Link className={`${styles.mailLink} ${styles.colorWhite}`} href="mailto:support@doctors.com">support@doctors.com</Link>
                <Link className={`${styles.phoneLink} ${styles.colorWhite} ${styles.block}`} href="tel:(+22) 123 - 4567 - 900">(+22) 123 - 4567 - 900</Link>
              </div>
            </div>
          </div>
          <div className={styles.hours}>
            <h2 className={`${styles.pagesTitle} ${styles.colorWhite}`}>Working Hours</h2>
            <p className={`${styles.hoursText} ${styles.adress} ${styles.colorWhite}`}>Mon to Fri: 7am - 6pm</p>
            <p className={`${styles.hoursText} ${styles.adress} ${styles.colorWhite}`}>Sat: 9am - 7pm</p>
            <p className={`${styles.hoursText} ${styles.adress} ${styles.colorWhite}`}>Sun: 9am - 6pm</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={`${styles.destiny} ${styles.colorWhite}`}>&copy; Copyright 2024. Created by <span className={styles.destinyText}>Destiny</span></p>
      </div>
    </footer>
  )
}

export default Footer