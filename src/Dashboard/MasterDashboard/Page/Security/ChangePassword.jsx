import React,{useState} from 'react'
import "./MasterSecurity.css"
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from "@mui/material/Typography";

import { ToastContainer, toast } from 'react-toastify';

const ChangePassword = () => {

 const [formError, setFormError] = useState({});
  
    const [values, setValues] =useState({      
        old_password: "",
        password: "",
        password_confirmation: "",
      showPassword: false,
    });
    
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
const PasswordChangeHandler=(e)=>{
  
e.preventDefault();
 }
  return (
    <div>
    
           <div class="rev_body_container " >
             <form onSubmit={PasswordChangeHandler}  >
               <div class="rev_body">
                   <div>                     
                        <FormControl  sx={{ m: 1 ,width: 300}} variant="outlined">
                          <InputLabel    htmlFor="outlined-adornment-password">Old Password</InputLabel>
                          <OutlinedInput 
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.old_password}
                            onChange={handleChange('old_password')}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                  
                                >
                                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="old password"
                          />
                         { formError?.old_password && <Typography variant="subtitle2" sx={{ textAlign: "start" }} gutterBottom component="div">
                         {formError.old_password[0]}
                          </Typography>}
                        </FormControl>
                   
                        <FormControl sx={{ m: 1,width: 300 }} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                  onC
                                >
                                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="new password"
                          />
                           { formError?.password && (
                               formError.password.map((el)=>{
                               return ( <Typography variant="subtitle2" sx={{ textAlign: "start" }} gutterBottom component="div">
                                       {el}
                               </Typography> )
                             }))}   
                        </FormControl>
                        <FormControl sx={{ m: 1 ,width: 300 }} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-password">Comfirm Password</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password_confirmation}
                            onChange={handleChange('password_confirmation')}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                  onC
                                >
                                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="comfirm password"
                          />
                           { formError?.password_confirmation && <Typography variant="subtitle2" sx={{ textAlign: "start" }} gutterBottom component="div">
                          {formError.password_confirmation[0]}
                          </Typography>}
                        </FormControl>
                         {/* <div class="rev_form">
                           <input type="text" placeholder="Enter your email" />
                           <i class="fas fa-envelope"></i>
                         </div>
                         <div class="rev_form">
                       <input type="text" placeholder="Enter your email" />
                       <i class="fas fa-envelope"></i>
                     </div>
                     <div class="rev_form">
                       <input type="text" placeholder="Enter your email" />
                       <i class="fas fa-envelope"></i>
                     </div> */}
                       
                          
                     <Typography variant="subtitle2" sx={{ textAlign: "start",marginLeft: "20px",color: "var(--main-color)"}} gutterBottom component="div">
                       
                     &#9733; password should contain  at least 8 characters ,one uppercase and one lowercase letter and one symbol.

                    </Typography>
                   </div>
                        
                 <div class="rev_warning">
                 <i className='fas fa-user-lock'></i>
                 </div>
               </div>
               <button class="rev_submit" type="submit">Create New Password</button>
             </form>
                  
           </div>)
           <ToastContainer/>
    </div>
  )
                    }

export default ChangePassword;