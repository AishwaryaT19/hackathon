import styles from "../styles/Header.module.css"
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentAccount, setCurrentAccount] = useState('')

    // check wallet
  const checkWallet = async () => {
    const { ethereum } = window
    if (ethereum) {
    }
    else {
      alert("Please Install Metamsk")
    }
  }

  // connecting wallet
  const connectWallet = async () => {
    checkWallet()
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);  //metamask gets connected
      const accounts = await provider.send("eth_requestAccounts", []);
      setIsLoggedIn(true)
      setCurrentAccount(accounts[0])
      console.log(accounts[0])
    }
    catch (error) {
      console.log("Please Install Metamsk")
    }
  }
  return (
    <header className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>Xam Drill</h2>
                <div className={styles.navigator}>
                    <ul className={styles.ul}>
                    <li className={styles.li} onClick={() => router.push("/Home")}>Home</li>
                        <li className={styles.li} onClick={() => router.push("Schedule")}>Exam Schedule</li>
                        <li className={styles.li} onClick={() => router.push("Seating")}>Seating Plan </li>
                        <li className={styles.li} onClick={() => router.push("Results")}>Results Dates</li>
                        <li className={styles.li} onClick={() => router.push("Contact")}>Contact Us</li>
                    </ul>
                    <button className={styles.button}> Your Profile </button>
                </div>
            </div>
        </header>
  )
}

export default Navbar