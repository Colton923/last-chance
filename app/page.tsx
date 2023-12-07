import styles from 'styles/App.module.scss'
import Image from 'next/image'
import beer from 'public/images/beer.jpg'
import beerGarden3 from 'public/images/beerGarden.jpg'
import sunday2 from 'public/images/sunday.jpg'
import taps from 'public/images/taps.jpg'

export default function Index() {
  return (
    <>
      <Image
        src={beer}
        alt="Beer"
        className={styles.backgroundPhotoOne}
        width={710}
        height={960}
        quality={100}
      />
      <div className={styles.wrapper}>
        <div className={styles.homeWrapper}>
          <div className={styles.lineSVGWrapper}>
            <div className={styles.lineLeft} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              className={styles.middleSVG}
            >
              <path d="M 6 5 A 1.0001 1.0001 0 0 0 5.0058594 6.1054688 L 8.8183594 42.314453 C 8.9779516 43.832817 10.273526 45 11.800781 45 L 38.199219 45 C 39.726474 45 41.024002 43.832817 41.183594 42.314453 L 44.994141 6.1054688 A 1.0001 1.0001 0 0 0 44 5 L 6 5 z M 7.1113281 7 L 42.888672 7 L 40.189453 32.654297 L 40.189453 32.589844 C 39.879453 35.579844 36.94 38 33 38 L 25 38 L 17 38 C 13.06 38 10.120547 35.579844 9.8105469 32.589844 L 9.8105469 32.640625 L 7.1113281 7 z M 28.978516 20.9375 A 1.0001 1.0001 0 0 0 28.054688 21.544922 L 26.144531 26 L 24 26 L 24 23 A 1.0001 1.0001 0 0 0 23 22 L 15 22 A 1.0001 1.0001 0 0 0 14 23 L 14 26 L 11.119141 26 L 11.800781 32.410156 C 12.010781 34.460156 14.25 36 17 36 L 33 36 C 35.75 36 37.989219 34.460156 38.199219 32.410156 L 38.880859 26 L 36.710938 26 L 36.980469 25.369141 A 1.0001 1.0001 0 0 0 36.455078 24.056641 L 29.367188 21.019531 A 1.0001 1.0001 0 0 0 28.978516 20.9375 z M 29.5 23.251953 L 34.748047 25.5 L 32.498047 30.75 L 27.25 28.5 L 29.5 23.251953 z M 16 24 L 22 24 L 22 30 L 16 30 L 16 24 z"></path>
            </svg>
            <div className={styles.lineRight} />
          </div>
          <h1 className={styles.aychOne}>
            Coldest beer in town, <br />
            Cheapest all around!
          </h1>
          <div className={styles.line} />
        </div>
        <div className={styles.content}>
          <div className={styles.hero}>
            <h2 className={styles.contentHeader}>
              Year Round <br />
              Beer Garden
            </h2>
            <div className={styles.imageWrapper}>
              <Image
                src={beerGarden3}
                alt="Beer Garden"
                className={styles.centerImage}
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.hero}>
            <h2 className={styles.contentHeader}>
              Sunday
              <br />
              Funday
            </h2>
            <div className={styles.imageWrapper}>
              <Image
                src={sunday2}
                alt="Sunday Funday"
                className={styles.centerImage}
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.hero}>
            <h2 className={styles.contentHeader}>
              Delectable
              <br />
              Drafts
            </h2>
            <div className={styles.imageWrapper}>
              <Image
                src={taps}
                alt="Delectable Drafts"
                className={styles.centerImage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
