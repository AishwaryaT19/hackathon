import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Xam Drill</h2>
        <div className={styles.navigator}>
          <ul className={styles.ul}>
            <li className={styles.li} onClick={() => router.push("/Home")}>
              Home
            </li>
            <li className={styles.li} onClick={() => router.push("Schedule")}>
              Exam Schedule
            </li>
            <li className={styles.li} onClick={() => router.push("seating")}>
              Seating Plan{" "}
            </li>
            <li className={styles.li} onClick={() => router.push("Results")}>
              Results Dates
            </li>
            <li className={styles.li} onClick={() => router.push("Contact")}>
              Contact Us
            </li>
          </ul>
          <button className={styles.button}> Your Profile </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
