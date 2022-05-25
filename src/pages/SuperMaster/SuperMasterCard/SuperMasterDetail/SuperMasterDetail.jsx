import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../../../components/UI/Card';
import CustomGetFunction from '../../../../services/CustomGetFunction';
import SuperMasterDesc from './SuperMasterDesc/SuperMasterDesc';
import SuperMasterDescTable from './SuperMasterDesc/SuperMasterDescTable/SuperMasterDescTable';
import CustomLoading from "../../../../components/CustomLoading/CustomLoading"
import classes from './SuperMasterDetail.module.css';
const SuperMasterDetail = () => {
  const {id} = useParams();
  const {data,loading} = CustomGetFunction(`api/agents/${id}`,[]);
  console.log(data);
  const [values, setValues] =useState({     
    name:"",
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
     name: data?.name,
      phone: data?.phone,
      email: data?.email,
      country:data?.country,
      city:data?.city,
      deposit_percent:data?.deposit_percent || "-",
      withdraw_percent:data?.withdraw_percent || "-"
  });
},[data]);

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
    <div className={classes["soccer-setting-container"]}>
      {
        loading ? (<Card>
          <div className={classes["card-header"]}>
            <h1 className={classes["card-title"]}>Super Master Form Detail</h1>
          </div>
          <div className={classes["card-body"]}>
              {/* <SuperMasterDesc userInfo={data} /> */}
              <div className={classes["agent-user-image-group"]}>
          <img
            src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg"
            className={classes["agent-user-image"]}
            alt=""
          />
          <div className={classes["agent-user-des"]}>
            <h3>{data.name}</h3>
            <span>ID - {data.id}</span>
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
                        Name
                        </div>
                        <div className="p_ncolor" >
                            <p className="input_1">{values?.name}</p>
                           <div className="p_btn"  onClick={()=>{showInput(20)}}> <i className="fas fa-pencil-alt"></i></div>
                           <div className={`p_absolute ${ showForm===20 &&  "p_a_show"}`} id="input_4">
                             <input type="name"   value={values?.name}
                              onChange={handleChange('name')} / >
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
                           <div className="p_btn"  onClick={()=>{showInput(15)}}> <i className="fas fa-pencil-alt"></i></div>
                           <div className={`p_absolute ${ showForm===15 &&  "p_a_show"}`} id="input_4">
                             <input type="deposite_percentage"   value={values?.deposit_percent}
                              onChange={handleChange('deposite_percentage')} / >
                             <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                            </div>
                          </div>
                      </div>
                    
                      <div className="p_item ">
                        <div>
                        Withdraw  Percentage
                        </div>
                        <div className="p_ncolor" >
                            <p className="input_1">{values?.withdraw_percent }%</p>
                           <div className="p_btn"  onClick={()=>{showInput(19)}}> <i className="fas fa-pencil-alt"></i></div>
                           <div className={`p_absolute ${ showForm===19 &&  "p_a_show"}`} id="input_4">
                             <input type="withdraw_percentage"   value={values?.withdraw_percent}
                              onChange={handleChange('withdraw_percent')} / >
                             <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                            </div>
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
                              onChange={handleChange('city')} />
                             <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                            </div>
                          </div>
                      </div>
                </div>
             </div>
      </div>
      </div>
     <button className="btn_save"> SAVE</button>     
  </div>
          </div>
        </Card>):(<CustomLoading />)
      }
      
      {/* <SuperMasterDescTable /> */}
    </div>
  )
}

export default SuperMasterDetail