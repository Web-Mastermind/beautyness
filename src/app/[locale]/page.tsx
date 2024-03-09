import Image from "next/image";
import styles from "./style.module.css"
import Link from "next/link";
import { useTranslations } from "next-intl";
import MainSection from "@/Components/MainSection";
import AboutSection from "@/Components/AboutSection";
import ServiceSection from "@/Components/Our";

export default function Home() {
  const t = useTranslations("Main")

  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <div className={`${styles.mainItems} ${styles.flex}`}>
            <div className={styles.mainLeft}>
              <div className={`${styles.mainText} ${styles.flex}`}>
                <Image className={styles.textIcon} src="/assets/icons/textIcon.svg" alt="Text Icon" width={22} height={21} />
                <p className={styles.mainText}>{t("text")}</p>
              </div>
              <h1 className={styles.mainTitle}>{t("title")}</h1>
              <p className={styles.mainSeconText}>{t("secontext")}</p>
              <Link className={styles.mainButton} href="/">{t("button")}</Link>
            </div>
            <div className={styles.mainRight}>
              <Image className={styles.mainImage} src="/assets/img/mainImage.png" alt="Main Image" width={550} height={545} />
            </div>
          </div>
        </div>
      </main>
      <MainSection />
      <AboutSection />
      <ServiceSection />
    </>
  );
}
