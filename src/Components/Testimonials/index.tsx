import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"

const Testimonials = () => {
  const t = useTranslations("Testimonials")

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.testimonialsItems}>
          <p className={`${styles.sectionText} ${styles.textCenter}`}>{t("sectionText")}</p>
          <h4 className={`${styles.sectionTitle} ${styles.textCenter} ${styles.colorBlack}`}>{t("sectionTitle")}</h4>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardLeft}>
            <div className={styles.leftCard}>
              <p className={`${styles.cardText} ${styles.colorBlack}`}>{t("cardText")}</p>
            </div>
            <Image src="/assets/img/leftCardImage.png" alt="Card Image" width={582} height={125} />
          </div>
          <div className={styles.cardRight}>
            <div className={styles.leftCard}>
              <p className={`${styles.cardText} ${styles.colorBlack}`}>{t("cardText")}</p>
            </div>
            <Image src="/assets/img/rightCardImage.png" alt="Card Image" width={582} height={125} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials