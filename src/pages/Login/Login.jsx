import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { login } from "../../services/api-services";
import "./Login.css";
import ForgetPasswordModal from "../../components/ForgetPasswordModal/ForgetPasswordModal";


function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 1);
}
const Login = () => {
  const [showPh,setshowPh] = useState(false);
  const [userloginname, setuserloginname] = useState();
  const [phone,setPhone] = useState();
  const [loginpass, setLoginpass] = useState();
  const [errorMsg,setErrorMsg] = useState(null);
  const [errorUserName,setErrorUserName] = useState(null);
  const loginName = useRef();
  const loginPhone = useRef();
  const loginPassword = useRef();

  // 
  const [open,setOpen] = useState(false);
  
  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  useEffect(()=>{
    let input = '';
    if(userloginname){
       input = validateEmail(userloginname) ? {email:userloginname,password: loginpass,} :{id:userloginname,password: loginpass,};
    }
    if(phone){
      input = {phone,password:loginPassword};
    }
    axios.request(login,login.data = input)
    .then(res => {
      console.log("login",res);
      switch(res.data.status){
        case "success":
          // console.log('login success');
          // console.log(res.data)
          localStorage.setItem('status',res.data.status);
          localStorage.setItem('jToken',res.data.data['j_token']);
          localStorage.setItem('lToken',res.data.data['l_token']);
          localStorage.setItem('type',res.data.data['type']);
          refreshPage();
          window.location.assign("/")
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
     setPhone(loginPhone.current.value)
     loginName.current.value = "";
     loginPassword.current.value = "";
     loginPhone.current.value ="";
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
      {/* ---------------------------Phone Login------------------------------------ */}
              {
                showPh ?(
                  <p>
                  <label>
                    Phone<span>*</span>
                  </label>
                  <input
                    type="text"
                    ref={loginPhone}
                    placeholder="Phone"
                    required
                    autoComplete="off"
                    onChange={loginNameHandler}
                  />
                <span className="errorMessage">{errorUserName}</span>
                </p>
                ) :
              // ----------------------------Email Login-------------------
                 (<p>
                <label>
                  Email address or id<span>*</span>
                </label>
                <input
                  type="text"
                  ref={loginName}
                  placeholder="email address or Id"
                  required
                  autoComplete="off"
                  onChange={loginNameHandler}
                />
                <span className="errorMessage">{errorUserName}</span>
              </p>)
               }
             
              {/*-----------------------------------Password------------------------- */}
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
                <p onClick={handleOpen}>Forget Password?</p>
              </p>
            </form>
            <div>
              {showPh?
              ( <p onClick={()=>setshowPh(false)}>
                login with e-mail</p>):(<p onClick={()=>setshowPh(true)}>login with phone? Click here</p>)
              }
            </div>
          </div>
        </div>
        <ForgetPasswordModal open={open} handleClose={handleClose}/>
      </div>
    </div>
  );
};

export default Login;
