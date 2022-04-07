import { Button, Stack, TextareaAutosize, TextField } from "@mui/material";
import  React, { useState } from "react";
import Card from "../../../components/UI/Card";
import PaymentAnnouncementModal from "../../../components/UI/Modal/PaymentSetting/PaymentAnnouncement/PaymentAnnouncementModal";
import classes from "./PaymentAnnouncement.module.css";




const PaymentAnnouncement = ()=>{
const [text,setText] = useState(
  "ကျေးဇူးပြု၍ သတ်မှတ်ထားသောနံပါတ်သို့ ငွေလွှဲပြီး ၁၀ မိနစ်အတွင်း Order request တင်ပါ ။ အကယ်၍ နောက်ကျပြီးမှ ငွေလွှဲပါက ငွေလွှဲပြီးကြောင်း အတည်ပြုချက် ကြန့်ကြာခြင်းနှင့် သင့် အကောင့်ထဲသို့ ငွေရောက်ရှိရန် နောက်ကျခြင်းများဖြစ်ပေါ်စေနိုင်ပါသည်။ ///// သင့်ငွေလွှဲပြေစာစခရင်ရှော့ကို upload လုပ်ချိန်တွင် အခက်အခဲရှိပါက ကျေးဇူးပြု၍ တစ်ခြား ပုံစံဖြင့် upload လုပ်ဖို့ ကြိုးစားပေးပါ။(ဥပမာ ဤပုံစံများဖြင့်- jpg,png, သို့မဟုတ် pdf) သင့်ဘရောက်ဇာထဲရှိ cookies နှင့် cache များကိုရှင်းလင်းပါ။အကယ်၍ ထိုသို့ပြုလုပ်ပါသော်လည်း အဆင်မပြေဖြစ်နေပါက တစ်ခြား device အသုံးပြုရန် အကြံပေးပါသည်။ ");
const [textValue,setTextValue] = useState("");
const [open,setOpen] = useState(false);
const handleOpen = ()=>setOpen(true);
const handleClose= ()=>setOpen(false);
return(
    <div className={classes["soccer-setting-container"]}>
    <Card>
      <div className={classes["card-header"]}>
        <h1 className={classes["card-title"]}>Payment Announcement</h1>
      </div>
      <div className={classes["card-body"]}>
            {!open ? (<p className={classes["card-text"]}>
                {text}
             </p>):(
               <textarea   onChange={(e)=>setTextValue(e.target.value)}   rows="8" cols="105" />
               )}
               
        </div>
    </Card>
    {open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
    <Button onClick={()=>{handleClose();setText(textValue)}} variant="contained" >Confirm</Button>
    <Button onClick={()=>{handleClose()}}  variant="contained" color="error">Cancel</Button>
    </Stack> }
    {!open &&<Stack direction="row" spacing={3} style={{display:"flex",justifyContent:"flex-end",marginTop:20,marginRight:20}}>
     <Button onClick={handleOpen} variant="contained" color="success">Edit</Button>
     </Stack> }
    {/* <PaymentAnnouncementModal handleClose={handleClose} open={open} setText={setText}/> */}
  </div>
  )
}

export default PaymentAnnouncement;


