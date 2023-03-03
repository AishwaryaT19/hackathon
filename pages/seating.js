import styles from "../styles/Seating.module.css";
import React from "react";
import Image from "next/image";
import chair from "../public/images/chair.png";

function Seating() {
  return (
    <section id={styles.main}>
      <div className={styles.open}>
        <div className={styles.imgContainer}>
          <Image src={chair} alt="main" width={100} height={100} />
        </div>
        <div className={styles.overlay}>
          <span>Seat NO.</span>
          <span>14</span>
        </div>
      </div>
    </section>
  );
}

export default Seating;
