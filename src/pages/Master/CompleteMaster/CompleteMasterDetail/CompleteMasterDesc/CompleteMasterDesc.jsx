
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileDetail from "../../../../../Dashboard/MasterDashboard/Page/Profile/ProfileDetail/ProfileDetail";
import classes from "./CompleteMasterDesc.module.css";


const CompleteMasterDesc = ({userInfo}) => {
  const navigate = useNavigate();
  console.log("userInfo",userInfo);
  const type = localStorage.getItem("type");
  const [values, setValues] =useState({     
    first_name : userInfo?.first_name,
    last_name: userInfo?.last_name,
    dob :  "20-12-1998",
     NRC: "12432144543",
     passport: "2343wsd3",
     phone: userInfo?.phone,
     email: userInfo?.email,
     nationality: "Myanmar",
      country: userInfo?.country,
      region: userInfo?.city,
      currencyType: "Crypto",
      deposit_percent:userInfo?.deposit_percent,
      withdraw_percent:userInfo?.withdraw_percent
 }); 
  useEffect(()=>{
    setValues({      
      first_name : userInfo?.first_name,
      last_name: userInfo?.last_name,
      dob :  "20/12/1998",
       NRC: "12432144543",
       passport: "2343wsd3",
       phone: userInfo?.phone,
       email: userInfo?.email,
      //  nationality: userInfo?.agent?.country,
        country: userInfo?.country,
        region: userInfo?.city,
        currencyType: "Crypto",
        deposit_percent:userInfo?.deposit_percent,
        withdraw_percent:userInfo?.withdraw_percent
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
    console.log("hhei");
    console.log(el);
    console.log(showForm);  
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
          <h3>{userInfo.first_name + " " + userInfo.last_name}</h3>
          <span>ID - {userInfo.id}</span>
        </div>
      </div>
      {/* <div   className={classes["form-container"]}>
      <div className={classes["form-group-desc"]}>
          <label htmlFor="">Unit </label>:<p>&nbsp;&nbsp;</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{userInfo.email}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{userInfo.phone}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Country </label>:<p>&nbsp;&nbsp;{userInfo.country}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">City </label>:<p>&nbsp;&nbsp;{userInfo.city}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Deposite Percentage </label>:<p>&nbsp;&nbsp;{userInfo.deposit_percent}</p>
        </div>
        <div className={classes["form-group-desc"]}>
          <label htmlFor="">Withdraw Percentage </label>:<p>&nbsp;&nbsp;{userInfo.withdraw_percent}</p>
        </div>
      </div> */}
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
                            onChange={handleChange('first_name')} / >
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
   <button className="btn_save"> SAVE</button>
       
        
</div>


    </div>
  );
};

export default CompleteMasterDesc;