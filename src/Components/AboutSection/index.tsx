import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"

const AboutSection = () => {
  const t = useTranslations("Article")

  return (
    <article className={styles.article}>
      <div className="container">
        <div className={`${styles.articleItems} ${styles.flex}`}>
          <div className={styles.articleTextItems}>
            <p className={styles.articleText}>{t("articleText")}</p>
            <h3 className={styles.articleTitle}>{t("articleTitle")}</h3>
            <p className={styles.articleSeconText}>{t("articleSeconText")}</p>
            <div className={`${styles.articleIcons} ${styles.flex}`}>
              <div className={`${styles.articleIconsItems} ${styles.flex}`}>
                <Image className={styles.sectionImages} src="/assets/icons/articleIcon1.svg" alt="Article Icon" width={48.47} height={72} />
                <p className={`${styles.iconsText} ${styles.firstText}`}>{t("iconsFirstText")}</p>
              </div>
              <div className={`${styles.articleIconsItems} ${styles.flex}`}>
                <Image className={styles.sectionImages} src="/assets/icons/articleIcon2.svg" alt="Article Icon" width={73} height={72} />
                <p className={`${styles.iconsText} ${styles.secondText}`}>{t("iconsSecondText")}</p>
              </div>
              <div className={`${styles.articleIconsItems} ${styles.flex}`}>
                <Image className={styles.sectionImages} src="/assets/icons/articleIcon3.svg" alt="Article Icon" width={65.34} height={72} />
                <p className={`${styles.iconsText} ${styles.thirdText}`}>{t("iconsThirdText")}</p>
              </div>
            </div>
          </div>
          <Image className={styles.sectionMainImage} src="/assets/img/sectionImg4.png" alt="Section Image" width={546} height={614} />
        </div>
      </div>
    </article>
  )
}

export default AboutSection