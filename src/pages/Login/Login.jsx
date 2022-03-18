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
  const [errorUserName,setErrorUserName] = useState(null);
  const loginName = useRef();
  const loginPassword = useRef();

  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  useEffect(()=>{
    const input = validateEmail(userloginname) ? {email:userloginname,password: loginpass,} :{id:userloginname,password: loginpass,};
    axios.request(login,login.data = input)
    .then(res => {
      console.log(res);
      switch(res.data.status){
        case "success":
          console.log('login success');
          console.log(res.data)
          localStorage.setItem('status',res.data.status);
          localStorage.setItem('jToken',res.data.data['j_token']);
          localStorage.setItem('lToken',res.data.data['l_token']);
          localStorage.setItem('type',res.data.data['type']);
          refreshPage();
        break;
        case "error":
          setErrorMsg(res.data.message);
        break;
        default:
      }
    })
    .catch(err => setErrorUserName( "The selected email is invalid."))
  },[userloginname,loginpass])


  useEffect(() => {
    loginName.current.focus();
    
  }, []);
  const loginNameHandler = () => {
    setErrorMsg(null)
    setErrorUserName(null)
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
            <h2>Xzonebet</h2>
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
                <span className="errorMessage">{errorUserName}</span>
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
                  onChange={loginNameHandler}
                />
                <span className="errorMessage">{errorMsg}</span>
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
