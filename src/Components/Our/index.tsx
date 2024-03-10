import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import { useTranslations } from "next-intl"

const ServiceSection = () => {
  const t = useTranslations("ourSection")

  return (
    <section className={styles.ourServices}>
      <div className="container">
        <div className={styles.sectionItems}>
          <p className={`${styles.sectionText} ${styles.colorLightGreen}`}>{t("textOne")}</p>
          <h3 className={`${styles.sectionTitle} ${styles.colorBlack}`}>{t("titleOne")}</h3>
          <div className={`${styles.ourUpContent} ${styles.flex}`}>
            <Image className={styles.ourImage} src="/assets/img/ourImage.png" alt="Services Image" width={600} height={640} />
            <div className={styles.ourUpRight}>
              <h4 className={`${styles.ourRightTitle} ${styles.colorBlack}`}>{t("Services.titleOne")}</h4>
              <p className={styles.ourRightText}>{t("Services.textOne")}</p>
              <h4 className={`${styles.ourRightTitle} ${styles.colorBlack}`}>{t("Services.titleTwo")}</h4>
              <p className={styles.ourRightText}>{t("Services.textOne")}</p>
              <h4 className={`${styles.ourRightTitle} ${styles.colorBlack}`}>{t("Services.titleThird")}</h4>
              <p className={styles.ourRightText}>{t("Services.textOne")}</p>
              <h4 className={`${styles.ourRightTitle} ${styles.colorBlack}`}>{t("Services.titleFour")}</h4>
              <p className={styles.ourRightText}>{t("Services.textOne")}</p>
              <Link className={`${styles.ourLink} ${styles.colorBlack}`} href="/">{t("Services.link")}</Link>
            </div>
          </div>

          <div className={`${styles.ourUpContent} ${styles.flex}`}>
            <div className={styles.ourUpRight}>
              <h4 className={`${styles.ourRightTitle} ${styles.colorBlack}`}>{t("Services.titleOne")}</h4>
              <p className={styles.ourRightText}>{t("Services.textOne")}</p>
              <h4 className={`${styles.ourRightTitle} ${styles.colorBlack}`}>{t("Services.titleTwo")}</h4>
              <p className={styles.ourRightText}>{t("Services.textOne")}</p>
              <h4 className={`${styles.ourRightTitle} ${styles.colorBlack}`}>{t("Services.titleThird")}</h4>
              <p className={styles.ourRightText}>{t("Services.textOne")}</p>
              <h4 className={`${styles.ourRightTitle} ${styles.colorBlack}`}>{t("Services.titleFour")}</h4>
              <p className={styles.ourRightText}>{t("Services.textOne")}</p>
              <Link className={`${styles.ourLink} ${styles.colorBlack}`} href="/">{t("Services.link")}</Link>
            </div>
            <Image className={`${styles.ourImage} ${styles.ourImageSecond}`} src="/assets/img/ourImage2.png" alt="Services Image" width={600} height={640} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServiceSection