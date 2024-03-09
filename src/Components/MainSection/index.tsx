import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import { useTranslations } from "next-intl"

const MainSection = () => {

  const t = useTranslations("MainSection")

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionRead}>
            <Image className={styles.sectionImage} src="/assets/img/sectionImg1.png" alt="Section Image" width={330} height={250} />
            <h2 className={styles.sectionTitle}>{t("SectionFirstTexts.sectionTitle")}</h2>
            <p className={styles.sectionText}>{t("SectionFirstTexts.sectionText")}</p>
            <Link className={styles.sectionLink} href="/">{t("SectionFirstTexts.sectionLink")}</Link>
          </div>
          <div className={styles.sectionRead}>
            <Image className={styles.sectionImage} src="/assets/img/sectionImg2.png" alt="Section Image" width={330} height={250} />
            <h2 className={styles.sectionTitle}>{t("SectionSecondTexts.sectionTitle")}</h2>
            <p className={styles.sectionText}>{t("SectionSecondTexts.sectionText")}</p>
            <Link className={styles.sectionLink} href="/">{t("SectionSecondTexts.sectionLink")}</Link>
          </div>
          <div className={styles.sectionRead}>
            <Image className={styles.sectionImage} src="/assets/img/sectionImg3.png" alt="Section Image" width={330} height={250} />
            <h2 className={styles.sectionTitle}>{t("SectionThirdTexts.sectionTitle")}</h2>
            <p className={styles.sectionText}>{t("SectionThirdTexts.sectionText")}</p>
            <Link className={styles.sectionLink} href="/">{t("SectionThirdTexts.sectionLink")}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection