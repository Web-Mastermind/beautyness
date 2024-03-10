import Image from "next/image"
import styles from "./style.module.css"

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.benefitsItems}>
          <p className={`${styles.sectionText} ${styles.textCenter}`}>Our Awesome Benefits</p>
          <h5 className={`${styles.sectionTitle} ${styles.textCenter}`}>Actually what you’ll get from</h5>
        </div>
        <div className={styles.gridMain}>
          <div className={styles.gridItems}>
            <Image src="/assets/icons/gridIcon.svg" alt="Icon" width={90} height={90} />
            <h6 className={styles.gridTitle}>Optimised Energy Efficiency</h6>
            <p className={styles.gridText}>The point of using Lorem Ipsum is that  using making it look like readable.</p>
          </div>
          <div className={styles.gridItems}>
            <Image src="/assets/icons/gridIcon.svg" alt="Icon" width={90} height={90} />
            <h6 className={styles.gridTitle}>Multi-faceted Water Filtration</h6>
            <p className={styles.gridText}>The point of using Lorem Ipsum is that  using making it look like readable.</p>
          </div>
          <div className={styles.gridItems}>
            <Image src="/assets/icons/gridIcon.svg" alt="Icon" width={90} height={90} />
            <h6 className={styles.gridTitle}>Uncompromising Quality and Durability</h6>
            <p className={styles.gridText}>The point of using Lorem Ipsum is that  using making it look like readable.</p>
          </div>
          <div className={styles.gridItems}>
            <Image src="/assets/icons/gridIcon.svg" alt="Icon" width={90} height={90} />
            <h6 className={styles.gridTitle}>An Ultra-Pampering Spa Experience</h6>
            <p className={styles.gridText}>The point of using Lorem Ipsum is that  using making it look like readable.</p>
          </div>
          <div className={styles.gridItems}>
            <Image src="/assets/icons/gridIcon.svg" alt="Icon" width={90} height={90} />
            <h6 className={styles.gridTitle}>Easy Care for Unparalleled Enjoyment</h6>
            <p className={styles.gridText}>The point of using Lorem Ipsum is that  using making it look like readable.</p>
          </div>
          <div className={styles.gridItems}>
            <Image src="/assets/icons/gridIcon.svg" alt="Icon" width={90} height={90} />
            <h6 className={styles.gridTitle}>Optimised Energy Efficiency</h6>
            <p className={styles.gridText}>The point of using Lorem Ipsum is that  using making it look like readable.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits