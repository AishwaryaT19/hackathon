import './LoginUi.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
function LoginUi() {
  return (
    <div className={style.main}>
     <div className={style.sub-main}>
       <div>
         <div className={style.imgs}>
           <div className={style.container-image}>
             <img src={profile} alt="profile" className={style.profile}/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className={style.email}/>
             <input type="text" placeholder="user name" className={style.name}/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="user name" className={style.name}/>
           </div>
          <div className={style.login-button}>
          <button>Login</button>
          </div>
           
            <p className={stylink}>
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;