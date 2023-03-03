import styles from "../styles/Seating.module.css";
import React from "react";
import Image from "next/image";
import chair from "../public/images/chair.png";

function seating() {
  return (
    <section className={styles.main}>
      <div className={styles.imgContainer}>
        <Image src={chair} alt="main" width={100} height={100} />
      </div>
    </section>
  );
}

export default seating;
