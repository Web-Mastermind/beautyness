import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"

const Discount = () => {
  return (
    <section className={styles.discount}>
      <div className="container">
        <div className={`${styles.discountMainItems} ${styles.flex} ${styles.alignCenter}`}>
          <div className={styles.discountLeftItems}>
            <div className={styles.leftItemsMain}>
              <p className={styles.discountText}>Flat Discount</p>
              <h2 className={`${styles.discountTitle} ${styles.colorBlack}`}>Claim upto 50% offer on the most popular services...</h2>
              <p className={`${styles.disountSecondText} ${styles.colorGray}`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words.</p>
              <div className={`${styles.discountMain} ${styles.flex}`}>
                <div className={`${styles.discountContainer} ${styles.flex} ${styles.alignCenter}`}>
                  <div className={styles.discountcontainerItems}>
                    <div className={`${styles.discountUp} ${styles.flex} ${styles.alignCenter}`}>
                      <Image className={styles.upItemsImage} src="/assets/icons/dotIcon.svg" alt="Dot Icon" width={30} height={6} />
                      <p className={`${styles.upItems} ${styles.colorBlack}`}>MAIL US:</p>
                    </div>
                    <Link className={`${styles.discountLink} ${styles.colorBlack}`} href="mailto:info@beautyness.com">info@beautyness.com</Link>
                    <div className={`${styles.discountUp} ${styles.flex} ${styles.alignCenter} ${styles.second}`}>
                      <Image className={styles.upItemsImage} src="/assets/icons/dotIcon.svg" alt="Dot Icon" width={30} height={6} />
                      <p className={`${styles.upItems} ${styles.colorBlack}`}>CALL US:</p>
                    </div>
                    <Link className={`${styles.discountLink} ${styles.colorBlack}`} href="tel:(+22) 123 4568 009">(+22) 123 4568 009</Link>
                  </div>
                </div>
                <div className={styles.discountImageItem}>
                  <p className={`${styles.discountTextItem} ${styles.colorWhite}`}>- Get Flat - 50% Discount</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.discountRightItems}>
            <input className={`${styles.inputItem1} ${styles.fonts} ${styles.border} ${styles.outline} ${styles.width} ${styles.padding} ${styles.block}`} type="text" placeholder="Name" />
            <input className={`${styles.inputItem2} ${styles.fonts} ${styles.border} ${styles.outline} ${styles.width} ${styles.padding} ${styles.block}`} type="text" placeholder="Email" />
            <input className={`${styles.inputItem3} ${styles.fonts} ${styles.border} ${styles.outline} ${styles.width} ${styles.padding} ${styles.block}`} type="text" placeholder="Phone" />
            <input className={`${styles.inputItem4} ${styles.fonts} ${styles.border} ${styles.outline} ${styles.width} ${styles.padding} ${styles.block}`} type="text" placeholder="Service You Need" />
            <textarea className={`${styles.discountArea} ${styles.fonts} ${styles.border} ${styles.outline} ${styles.width} ${styles.padding}`} name="text" id="" cols={30} rows={10} placeholder="Any Note For Us"></textarea>
            <Link className={`${styles.req} ${styles.block} ${styles.colorWhite}`} href="/">GET AN APPOINTMENT</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discount