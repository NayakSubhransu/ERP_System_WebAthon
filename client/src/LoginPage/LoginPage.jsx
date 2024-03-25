import React, { useState } from 'react';
import "./LoginPage.css"
// import logo from "../Assets/logo.png"

const AuthForm = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <div id="container" className={`container ${toggle ? 'sign-in' : 'sign-up'}`}>
    {/* {toggle ? <h1 style={{marginLeft:"63rem"}}>IIT BHUBANESWAR</h1>: <h1 style={{marginLeft:"15rem"}}>IIT BHUBANESWAR</h1>}
     */}
      <div className="row">
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
              <div>{toggle ? <h1 style={{marginBottom:"2rem"}}>Logo</h1>: <h1 style={{marginLeft:"0rem",marginBottom:"2rem"}}>Logo</h1>}</div>
         
                <i className='bx bxs-user'></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className='bx bx-mail-send'></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Confirm password" />
              </div>
              <button>
                Sign up
              </button>
              <p>
                <span>
                  Already have an account?
                </span>
                <b onClick={() => setToggle(!toggle)} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
              <div>{toggle ? <h1 style={{marginBottom:"2rem"}}>Logo</h1>:<h1 style={{marginLeft:"0rem",marginBottom:"2rem"}}>Logo</h1>}</div>
         
                <i className='bx bxs-user'></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Password" />
              </div>
              <button>
                Sign in
              </button>
              <p>
                <b>
                  Forgot password?
                </b>
              </p>
              <p>
                <span>
                  Don't have an account?
                </span>
                <b onClick={() => setToggle(!toggle)} className="pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
          <div className="form-wrapper">
          </div>
        </div>
      </div>
    </div>
 </> 
 
 );
}

const LoginPage = () => {
  setTimeout(() => {
    document.getElementById('container').classList.add('sign-in');
  }, 200);

  return (
    <div className="App">
      <AuthForm />
    </div>
  );
}

export default LoginPage;