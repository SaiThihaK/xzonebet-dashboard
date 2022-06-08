
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProfileDetail from "../../../../../Dashboard/MasterDashboard/Page/Profile/ProfileDetail/ProfileDetail";
import { PatchMethod, PostMethod } from "../../../../../services/api-services";
import classes from "./CompleteMasterDesc.module.css";


const CompleteMasterDesc = ({userInfo,render,setRender}) => {
  const navigate = useNavigate();
  console.log("userInfo",userInfo);
  
  const type = localStorage.getItem("type");
  const [values, setValues] =useState({     
    first_name : "",
    last_name: "",
     phone: "",
     email: "",
      country: "",
      region: "",
      currencyType: "",
      deposit_percent: "",
      withdraw_percent:""
 }); 
  useEffect(()=>{
    setValues({      
      first_name : userInfo?.first_name,
      last_name: userInfo?.last_name,
       phone: userInfo?.phone,
       email: userInfo?.email,
        country: userInfo?.country,
        city: userInfo?.city,
        currencyType:userInfo.currency_type || "",
        deposit_percent:userInfo?.deposit_percent || "-",
        withdraw_percent:userInfo?.withdraw_percent || "-"
   });
 },[userInfo]);
 
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
  }

  const EditHandler = async()=>{
    try{
  const response = await axios.request(PatchMethod(`api/agents/${userInfo.id}`,{
    email:values.email,
    phone:values.phone,
    deposit_percent:values.deposit_percent,
    withdraw_percent:values.withdraw_percent,
    country:values.country,
    city:values.city,
    first_name:values.first_name,
    last_name:values.last_name
  }));
  console.log(response);
  if(response.data.status==="success"){
    toast.success(response.data.message);
    setShowForm("")
    setRender(!render)
    return;
  }
  if(response.data.status==="error"){
    toast.error(response.data.message);
    return;
  }
    }catch(error){
      toast.error(error.response.data.message);
      return
    }
  }
  return (
    <div>
      <div className={classes["agent-user-image-group"]}>
        <img
          src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
          className={classes["agent-user-image"]}
          alt=""
        />
        <div className={classes["agent-user-des"]}>
          <h3>{userInfo.name ? userInfo.name : `${userInfo.first_name} ${userInfo.last_name}`}</h3>
           
          <span>ID - {userInfo.id}</span>
        </div>
      </div>
     <div className="personal_info">
    <div className="p_flex">
      
       <div className="p_col person_mr">
           <div className="p_group">
              <div className="p_info_header">
              PERSONAL INFO
              </div>
              <div className="p_field">
              <div className="p_item ">
                      <div>
                      First Name
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values?.first_name}</p>
                         <div className="p_btn"  onClick={()=>{showInput(11)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===11 &&  "p_a_show"}`} id="input_4">
                           <input type="name"   value={values?.first_name}
                            onChange={handleChange('first_name')} / >
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                        </div>
                    </div>
                    <div className="p_item ">
                      <div>
                      Last Name
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values?.last_name}</p>
                         <div className="p_btn"  onClick={()=>{showInput(20)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===20 &&  "p_a_show"}`} id="input_4">
                           <input type="name"   value={values?.last_name}
                            onChange={handleChange('last_name')} / >
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                        </div>
                    </div>
                  
                    <div className="p_item ">
                      <div>
                      Deposite Percentage
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values?.deposit_percent }%</p>
                          {
                            type !=="master" && (
                              <>
                              <div className="p_btn"  onClick={()=>{showInput(15)}}> 
                              <i className="fas fa-pencil-alt"></i>
                              </div>
                              <div className={`p_absolute ${ showForm===15 &&  "p_a_show"}`} id="input_4">
                                <input type="deposite_percentage"   value={values?.deposit_percent}
                                 onChange={handleChange('deposit_percent')} />
                                <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                               </div>
                               </>
                            )
                          }
                        
                        </div>
                    </div>
                  
                    <div className="p_item ">
                      <div>
                      Withdraw  Percentage
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values?.withdraw_percent }%</p>
                          {
                            type !== "master" && (
                              <>
                          <div className="p_btn"  onClick={()=>{showInput(19)}}> 
                         <i className="fas fa-pencil-alt"></i>
                         </div>
                         <div className={`p_absolute ${ showForm===19 &&  "p_a_show"}`} id="input_4">
                           <input type="withdraw_percentage"   value={values?.withdraw_percent}
                            onChange={handleChange('withdraw_percent')} />
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                              </>
                            )
                          }
                       
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
                          Phone
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values.phone}</p>
                         <div className="p_btn"  onClick={()=>{showInput(6)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===6 &&  "p_a_show"}`}   id="input_4">
                           <input type="text" className="form_p date_input "  value={values.phone}
                            onChange={handleChange('phone')} / >
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                        </div>
                    </div>
              <div className="p_item ">
                      <div>
                              Email
                      </div>
                      <div className="p_ncolor">
                          <p className="input_1">{values.email}</p>
                               <div className="p_btn" onClick={()=>{showInput(1)}}><i className="fas fa-pencil-alt"></i></div>
                               <div className={`p_absolute ${ showForm=== 1 &&  "p_a_show"}`}id="input_3">
                                   <input type="email" className="form_p"  value={values.email}
                            onChange={handleChange('email')} />
                                   <i className="fas fa-check-circle" onClick={()=>{showInput("")}} ></i>
                                  </div>
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
                         City
                      </div>
                      <div className="p_ncolor" >
                          <p className="input_1">{values.city}</p>
                         <div className="p_btn"  onClick={()=>{showInput(5)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===5 &&  "p_a_show"}`} id="input_4" >
                           <input type="text" className="form_p text_input "  value={values.city}
                            onChange={handleChange('city')} / >
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
   <button className="btn_save" onClick={EditHandler}> SAVE</button>
       
        
</div>


    </div>
  );
};

export default CompleteMasterDesc;