import { Button } from "@mui/material";
import axios from "axios";
import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../../../../components/UI/Card";
import { userInfo } from "../../../../../features/UserInfo";
import classes from "./ProfileDetail.module.css";
import { toast } from 'react-toastify';
import "./ProfileDetail.css";
import { PostProvider } from "../../../../../services/api-services";
const ProfileDetail = ({userData}) => {
  const navigate = useNavigate();
 
  const type = localStorage.getItem("type");
  const [values, setValues] =useState({     
    name : userData?.name,
    dob :  "20-12-1998",
     NRC: "12432144543",
     passport: "2343wsd3",
     phone: userData?.agent?.phone,
     email: userData?.agent?.email,
     nationality: "Myanmar",
      country: userData?.agent?.country,
      region: userData?.agent?.region,
      currencyType: "Crypto"
 });  

 const editSubmitHandler = async(e) => {
  e.preventDefault();
  console.log("hello");
  let fd = new FormData();
  fd.append("name", values.name);
  fd.append("country_name", values.country);
  fd.append("currency_code", values.currencyType);
  fd.append("nrc_card_no", values.NRC);
  // fd.append("currency_code", values.currency_code);
  // fd.append("country_name", values.country);
  // if (values.avatar != "") {
  //   fd.append("avatar", values.avatar);
  // } 
  if (values.dob != "") {
    values.dob = values.dob.replace("-", ".");
    fd.append("dob", values.dob);
  } 
  try{
  const response = await axios.request(PostProvider(`api/customers/update-profile/${userData.agent.id}`,fd));
  if(response.data.status==="success"){
    toast.success(response.data.message);


    return
  }
  if(response.data.status==="error"){  
    toast.error(response.data.message);
    return;
  }
   }catch(error){
    //  toast.error(error.response.data.message);
     console.log(error)
   }
 }



  useEffect(()=>{
    setValues({      
      name : userData?.name,
      dob :  "20/12/1998",
       NRC: "12432144543",
       passport: "2343wsd3",
       phone: userData?.agent?.phone,
       email: userData?.agent?.email,
      //  nationality: userData?.agent?.country,
        country: userData?.agent?.country,
        region: userData?.agent?.region,
        currencyType: "Crypto"
   });
 },[userData]);
 
const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};
  const [showForm,setShowForm]=useState("");
  const showInput=(el)=>{
    if(showForm === el) {  
      setShowForm("");
      return;
    }
    setShowForm(el);
    console.log("hhei");
    console.log(el);
    console.log(showForm);  
  }
  return (
    <div className="personal_info">
    <div className="p_flex">
      
       <div className="p_col person_mr">
         {
           type !== "super_master" && (<div className="p_group">
           <div className="p_info_header">
              SUPERMASTER INFO
           </div>
           <div className="p_field">
               <div className="p_item">
                 <div>
                   SurperMaster ID
                 </div>
                 <div className="p_ncolor">
                   <div >1003 </div>
                </div>
                
               </div>
               <div className="p_item">
                 <div>
                   SurperMaster Name
                 </div>
                 <div className="p_ncolor">
                   <div >Kyaw Kyaw </div>
                                     
                       
                 </div>
                
               </div>
            
               {/* <div className="p_item">
                 <div>
                 Total Unit
                 </div>
                 <div className="p_ncolor">
                   <div >4000 </div>
                                     
                       
                 </div>
                
               </div> */}
            
           </div>
           
        </div>)
         }
           
           <div className="p_group">
              <div className="p_info_header">
              PERSONAL INFO
              </div>
              <div className="p_field">
              <div className="p_item ">
                      <div>
                      Name
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values?.name}</p>
                         <div className="p_btn"  onClick={()=>{showInput(11)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===11 &&  "p_a_show"}`} id="input_4">
                           <input type="name"   value={values?.name}
                            onChange={handleChange('name')} / >
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                        </div>
                    </div>
                  <div className="p_item ">
                      <div>
                      Date Of  Birth
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values.dob}</p>
                         <div className="p_btn"  onClick={()=>{showInput(10)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===10 &&  "p_a_show"}`} id="input_4">
                         <input
                    type="date"
                    className="form_p date_input "
                    onChange={handleChange("dob")}
                    value={values.dob ? values.dob.replace(".", "-") : ""}
                  />
                           
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                        </div>
                    </div>
                    <div className="p_item">
                    <div>
                      Deposit Percentage
                    </div>
                    <div className="p_ncolor">
                      <div >5% </div>
                                        
                          
                    </div>
                   
                  </div>
                  <div className="p_item">
                    <div>
                      Withdraw Percentage
                    </div>
                    <div className="p_ncolor">
                      <div >5% </div>
                                        
                          
                    </div>
                   
                  </div>
           
              </div>
           </div>
    
       
       </div>
       <div className="p_col person_ml">
          <div className="p_group">
            
              <div className="p_field">
              <div className="p_item ">
                      <div>
                      National Identity card Number
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values.NRC}</p>
                         <div className="p_btn"  onClick={()=>{showInput(8)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===8 &&  "p_a_show"}`}  id="input_4">
                           <input type="text" className="form_p date_input "    value={values.NRC}
                            onChange={handleChange("NRC")}
                             / >
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                        </div>
                    </div>
              <div className="p_item ">
                      <div>
                        Passport Number
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values.passport}</p>
                         <div className="p_btn"  onClick={()=>{showInput(7)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===7 &&  "p_a_show"}`} id="input_4">
                           <input type="text" className="form_p date_input "   value={values.passport}
                            onChange={handleChange('passport')} / >
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                        </div>
                    </div>
              <div className="p_item ">
                      <div>
                          Phone
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values.phone}</p>
                         {/* <div className="p_btn"  onClick={()=>{showInput(6)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===6 &&  "p_a_show"}`}   id="input_4">
                           <input type="number" className="form_p date_input "  value={values.phone}
                            onChange={handleChange('phone')} / >
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div> */}
                        </div>
                    </div>
              <div className="p_item ">
                      <div>
                              Email
                      </div>
                      <div className="p_ncolor">
                          <p className="input_1">{values.email}</p>
                               {/* <div className="p_btn" onClick={()=>{showInput(1)}}><i className="fas fa-pencil-alt"></i></div>
                               <div className={`p_absolute ${ showForm=== 1 &&  "p_a_show"}`}id="input_3">
                                   <input type="email" className="form_p"  value={values.email}
                            onChange={handleChange('email')} />
                                   <i className="fas fa-check-circle" onClick={()=>{showInput("")}} ></i>
                                  </div> */}
                        </div>
                    </div>
                    {/* <div className="p_item ">
                      <div>
                              Nationality
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values.nationality}</p>
                         <div className="p_btn"  onClick={()=>{ showInput(2)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===2 &&  "p_a_show"}`} id="input_4">
                           <input type="text" className="form_p text_input "  value={values.nationality}
                            onChange={handleChange('nationality')} / >
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                        </div>
                    </div> */}
                 
                   
                    <div className="p_item ">
                      <div>
                              Country
                      </div>
                      <div className="p_ncolor">
                          <p className="input_1">{values.country}</p>
                               <div className="p_btn" onClick={()=>{showInput(3)}}><i className="fas fa-pencil-alt"></i></div>
                               
                               <div className={`p_absolute ${ showForm=== 3 &&  "p_a_show"}`}id="input_3">
                                    
                                   <input type="text" className="form_p"   value={values.country}
                            onChange={handleChange('country')}/>
                                   <i className="fas fa-check-circle" onClick={()=>{showInput("")}} ></i>
                                  </div>
                        </div>
                    </div>
                    <div className="p_item ">
                      <div>
                         Region
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values.region}</p>
                         <div className="p_btn"  onClick={()=>{showInput(5)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===5 &&  "p_a_show"}`} id="input_4" >
                           <input type="text" className="form_p text_input "  value={values.region}
                            onChange={handleChange('region')} / >
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                        </div>
                    </div>
                    <div className="p_item ">
                      <div>
                            Currency Type
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values.currencyType}</p>
                        
                       
                        </div>
                    </div>
                
              </div>
           </div>
       
             
    
    </div>
    </div>
   <button className="btn_save" onClick={editSubmitHandler}> SAVE</button>
       
        
</div>
    // <div>
    //     <div className={classes["agent-user-image-group"]}>
    //     <img
    //       src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
    //       className={classes["agent-user-image"]}
    //       alt=""
    //     />
    //     </div>
    //     <div className={classes['btn-container']}>
    //       <Button onClick={()=>navigate("/dashboard/master/profile/edit")} variant="contained">Edit</Button>
    //     </div>
    //   <div className={classes["grid-container"]}>
    //       <Card>
    //       <div className={classes["form-group-desc"]}>
    //       <label htmlFor="">Name </label>
    //       :<p>&nbsp;&nbsp;{userData?.agent?.name}</p>
    //       </div>
    //     <div className={classes["form-group-desc"]}>
    //       <label htmlFor="">Date of Birth </label>
    //       :<p>&nbsp;&nbsp;20/12/1998</p>
    //     </div>
    //     <div className={classes["form-group-desc"]}>
    //       <label htmlFor="">National Identity Card Number </label>
    //       :<p>&nbsp;&nbsp;Mama-1500</p>
    //     </div>
    //     <div className={classes["form-group-desc"]}>
    //       <label htmlFor="">Passport  Number</label>
    //       :<p>&nbsp;&nbsp;2343wsd3</p>
    //     </div>
    //     <div className={classes["form-group-desc"]}>
    //       <label htmlFor="">Phone</label>
    //       :<p>&nbsp;&nbsp;{userData?.agent?.phone}</p>
    //     </div>
    //   </Card>
    //   {/* ---------------------------------------------------------------- */}
    //    <Card>
    //       <div className={classes["form-group-desc"]}>
    //       <label htmlFor="">Email </label>
    //       :<p>&nbsp;&nbsp;{userData?.email}</p>
    //     </div>
    //     <div className={classes["form-group-desc"]}>
    //       <label htmlFor="">Nationality </label>
    //       :<p>&nbsp;&nbsp;Myanmar</p>
    //     </div>
    //     <div className={classes["form-group-desc"]}>
    //       <label htmlFor="">Country </label>
    //       :<p>&nbsp;&nbsp;{userData?.agent?.country}</p>
    //     </div>
    //     <div className={classes["form-group-desc"]}>
    //       <label htmlFor="">Region</label>
    //       :<p>&nbsp;&nbsp;{userData?.agent?.region}</p>
    //     </div>
    //     <div className={classes["form-group-desc"]}>
    //       <label htmlFor="">Currency Type</label>
    //       :<p>&nbsp;&nbsp;Crypto</p>
    //     </div>
    //    </Card>
    //     </div>
    // </div>
  );
};

export default ProfileDetail;
