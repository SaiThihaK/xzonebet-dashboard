import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { login } from "../../services/api-services";
import "./Login.css";
function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 1);
}
const Login = () => {
  const [userloginname, setuserloginname] = useState();
  const [loginpass, setLoginpass] = useState();
  const [errorMsg,setErrorMsg] = useState(null);
  const loginName = useRef();
  const loginPassword = useRef();
  

  useEffect(()=>{
    axios.request(login,login.data = {
      email: userloginname,
      password: loginpass,
    })
    .then(res => {
      switch(res.data.status){
        case "success":
          console.log('login success');
          localStorage.setItem('status',res.data.status);
          localStorage.setItem('jToken',res.data.data['j-token']);
          localStorage.setItem('lToken',res.data.data['l-token']);
          refreshPage();
        break;
        case "error":
          setErrorMsg(res.data.message);
        break;
        default:
        
      }
    })
    .catch(err => console.log(err))
  },[userloginname,loginpass])


  useEffect(() => {
    loginName.current.focus();
    
  }, []);
  const loginNameHandler = () => {
    setErrorMsg(null)
  }


   const loginFormSubmitHandler = (e) => {
     e.preventDefault();
     setuserloginname(loginName.current.value);
     setLoginpass(loginPassword.current.value);

     loginName.current.value = "";
     loginPassword.current.value = "";
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="col-left">
          <div className="login-text">
            <h2>Welcome Back</h2>
            <p>
              Create your account.
              <br />
              It's totally free.
            </p>
            <a className="btn" href="">
              Sign Up
            </a>
          </div>
        </div>
        <div className="col-right">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={loginFormSubmitHandler}>
              <p>
                <label>
                  Username or email address<span>*</span>
                </label>
                <input
                  type="text"
                  ref={loginName}
                  placeholder="Username or Email"
                  required
                  autoComplete="off"
                  onChange={loginNameHandler}
                />
                <span className="errorMessage">{errorMsg}</span>
              </p>
              <p>
                <label>
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  ref={loginPassword}
                  placeholder="Password"
                  required
                  autoComplete="off"
                />
              </p>
              <p>
                <input type="submit" value="Sing In" />
              </p>
              <p>
                <a href="">Forget Password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
