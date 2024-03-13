import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"

const Updates = () => {
  return (
    <section className={styles.updatesSection}>
      <div className="container">
        <div className={styles.updatesItems}>
          <p className={`${styles.updatesText} ${styles.colorLightGreen}`}>OUR BLOG</p>
          <h2 className={`${styles.updatesTitle} ${styles.colorBlack}`}>Latest Updatest</h2>
        </div>
        <div className={styles.updatesMain}>
          <div className={styles.mainItems}>
            <Image src="/assets/img/updatesImage.png" alt="Image" width={370} height={325} />
            <div className={styles.mainTextItems}>
              <p className={`${styles.mainText} ${styles.colorLightGreen}`}>11TH AUGUST 2021 &#8213; BY PETER BERGSON</p>
              <h3 className={`${styles.mainTitle} ${styles.colorBlack}`}>The energy efficiency of the hydrotherapy or swim</h3>
              <p className={styles.mainSecondText}>The point of using Lorem Ipsum hiter that using making it look like others readable will get end.</p>
            </div>
          </div>
          <div className={styles.mainItems}>
            <Image src="/assets/img/updatesImage2.png" alt="Image" width={370} height={325} />
            <div className={styles.mainTextItems}>
              <p className={`${styles.mainText} ${styles.colorLightGreen}`}>11TH AUGUST 2021 &#8213; BY PETER BERGSON</p>
              <h3 className={`${styles.mainTitle} ${styles.colorBlack}`}>The energy efficiency of the hydrotherapy or swim</h3>
              <p className={styles.mainSecondText}>The point of using Lorem Ipsum hiter that using making it look like others readable will get end.</p>
            </div>
          </div>
          <div className={styles.mainItems}>
            <Image src="/assets/img/updatesImage3.png" alt="Image" width={370} height={325} />
            <div className={styles.mainTextItems}>
              <p className={`${styles.mainText} ${styles.colorLightGreen}`}>11TH AUGUST 2021 &#8213; BY PETER BERGSON</p>
              <h3 className={`${styles.mainTitle} ${styles.colorBlack}`}>The energy efficiency of the hydrotherapy or swim</h3>
              <p className={styles.mainSecondText}>The point of using Lorem Ipsum hiter that using making it look like others readable will get end.</p>
            </div>
          </div>
        </div>
        <div className={styles.linkItem}>
          <Link className={`${styles.updatesLink} ${styles.colorBlack}`} href="/">VIEW MORE STORIES</Link>
        </div>
      </div>
    </section>
  )
}

export default Updates