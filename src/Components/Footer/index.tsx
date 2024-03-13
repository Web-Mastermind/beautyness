import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.footerItems} ${styles.justify}`}>
          <div className={styles.footerLogoItems}>
            <Link className={`${styles.footerLogoTitle} ${styles.colorWhite}`} href="/" ><Image src="/assets/icons/siteLogo.svg" alt="site logo" width={65} height={65} />Beautyness</Link>
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
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">Home</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">About Us</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">Services</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">Appointments</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">Blog</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">Contact Us</Link>
          </div>
          <div className={styles.footerPagesItems}>
            <h3 className={`${styles.pagesTitle} ${styles.colorWhite}`}>Utility Pages</h3>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">Start Here</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">Style guide</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">404 not found</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">Password protected</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">Licenses</Link>
            <Link className={`${styles.pageLinks} ${styles.colorWhite}`} href="/">Changelog</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer