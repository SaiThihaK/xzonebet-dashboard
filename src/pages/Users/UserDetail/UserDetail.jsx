import { Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import SuperMasterDesc from '../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc'
import classes from   "./UserDetail.module.css";
import CustomLoading from '../../../components/CustomLoading/CustomLoading'
import CustomGetFunction from '../../../services/CustomGetFunction'
const UserDetail = () => {
 const navigate = useNavigate();
 const {id} = useParams();
 console.log(id);
 const {data,loading} = CustomGetFunction(`api/users/${id}`,[id]);
 console.log("userDetail",data);

 const type = localStorage.getItem("type");
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
      phone: data?.agent?.phone,
      email: data?.agent?.email,
      country:data?.agent?.country,
      city:data?.agent?.city
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
  <PageTitleCard title="User Detail">
    {
      loading ? (<>
        <div className={classes["card-body"]}>
        {/* <SuperMasterDesc master agent userInfo={data} />  */}
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
                         <div className="p_btn"  onClick={()=>{showInput(11)}}> <i className="fas fa-pencil-alt"></i></div>
                         <div className={`p_absolute ${ showForm===11 &&  "p_a_show"}`} id="input_4">
                           <input type="name"   value={values?.name}
                            onChange={handleChange('first_name')} / >
                           <i className="fas fa-check-circle" onClick={()=>{showInput("")}}></i>
                          </div>
                        </div>
                    </div>   
       {/* ============================================ */}
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
                 
            </div>
         </div>
              </div>
           </div>
    
       
       </div>
    </div>
   <button className="btn_save"> SAVE</button>    
</div>
        </div>
        <Stack direction="row" 
        style={{display:"flex",justifyContent:"center",paddingBottom:20,paddingTop:20}}
        spacing={6}
        >
      <Button variant="contained">Bet History</Button>
      <Button variant="contained" onClick={()=>{navigate("/dashboard/deposite-withdraw-table")}}>Deposite/WithDraw</Button>
        </Stack>
        </>):(<CustomLoading />)
    }
      
  </PageTitleCard>
  )
}

export default UserDetail