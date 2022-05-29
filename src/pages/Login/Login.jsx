import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { login } from "../../services/api-services";
import classes from "./Login.module.css";
import ForgetPassword from "../../components/ForgetPassword/ForgetPassword";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
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
  const [showPassword,setShowPassword] = useState(false);
  const showPwhandler = ()=>setShowPassword(!showPassword);
  const [open,setOpen] = useState(false);
  const handleOpen = (state)=>setOpen(state);
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
          window.location.assign("/")
          refreshPage();
         
        break;
        case "error":
          setErrorMsg(res.data.message);
        break;
        default:
      }
    })
    .catch(err => setErrorUserName(err.response.data.message))
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
    //  window.location.assign("/")
     setuserloginname(loginName.current.value);
     setLoginpass(loginPassword.current.value);
     setPhone(loginPhone.current.value)
     loginName.current.value = "";
     loginPassword.current.value = "";
     loginPhone.current.value ="";
  }

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["container"]}>
        <div className={classes["col-left"]}>
          <div className={classes["login-text"]}>
            <h2>Welcome Back</h2>
            <h2>Xzonebet</h2>
          </div>
        </div>
        <div className={classes["col-right"]}>
          <div className={classes["login-form"]}>
            <h2>Login</h2>
            <form onSubmit={loginFormSubmitHandler}>
      {/* ---------------------------Phone Login------------------------------------ */}
              {
                showPh ?(
                  <div>
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
                <span className={classes["errorMessage"]}>{errorUserName}</span>
                </div>
                ) :
              // ----------------------------Email Login-------------------
                 (<div>
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
                <span className={classes["errorMessage"]}>{errorUserName}</span>
              </div>)
               }
             
              {/*-----------------------------------Password------------------------- */}
              <div className={classes["Input-field"]}>
                
                <label>
                  Password<span>*</span>
                </label>
                {
                  showPassword ?<AiOutlineEye onClick={showPwhandler}  className={classes["icon"]} /> : <AiOutlineEyeInvisible className={classes["icon"]} onClick={showPwhandler}  />
                }
                
                <input
                  ref={loginPassword}
                  placeholder="Password"
                  type={showPassword ? "password" :"type"}
                  required
                  autoComplete="off"
                  onChange={loginNameHandler}
                />
                <span className={classes["errorMessage"]}>{errorMsg}</span>
              </div>
              <div>
                <input type="submit" value="Sing In" />
              </div>
              <div className={classes["ForgetPass"]}>
                <p onClick={()=>{handleOpen(true)}}>Forget Password?</p>
              
              </div>
            </form>
            <div>
              {showPh?
              ( <div onClick={()=>setshowPh(false)}>
                login with e-mail</div>):(<p onClick={()=>setshowPh(true)}>login with phone? Click here</p>)
              }
            </div>
          </div>
        </div>
      </div>
      {open && <ForgetPassword modal={handleOpen} />}
    </div>
  );
};
export default Login;
