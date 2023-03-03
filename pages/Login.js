import style from '../styles/Login.module.css';
import { ethers } from "ethers";

function LoginUi() {
  // const connectWallet = async () => {
  //   try {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);  
  //     const accounts = await provider.send("eth_requestAccounts", []);
  //     setIsLoggedIn(true)
  //     setCurrentAccount(accounts[0])
  //     console.log(accounts[0])
  //   }
  //   catch (error) {
  //     console.log(error)
  //     // console.log("Please Install Metamsk")
  //   }
  // }

  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }
  return (
    <div className={style.main}>
     <div className={style.sub_main}>
       <div className={style.profile}>
         <div className={style.imgContainer}>
             
           </div>


         <div>
           <h1>Login Page</h1>
           <div>
           <div className={style.imgContainer}>
             

           </div>
             <input type="text" placeholder="user name" className={style.name}/>
           </div>
           <div className="second-input">
           <div className={style.imgContainer}>
             

           </div>
             <input type="password" placeholder="password" className={style.name}/>
           </div>
          <div className={style.login_button}>
          <button onClick={connectWallet}>Login</button>
          </div>
           
            <p className={style.link}>
              <a className={style.link} href="#">Forgot password ?</a> 
              <br/> 
              <a className={style.link}href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;