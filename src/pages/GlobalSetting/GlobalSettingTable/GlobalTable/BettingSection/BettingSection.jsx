import React,{useEffect,useState} from 'react';
import classes from './BettingSection.module.css' 
import BetTable from './BetTable/BetTable';


import axios from 'axios';


const BettngSection = () => {
    const [softing,setSofting]=useState([]);
    const [show,setShow]=useState(false);
    useEffect( async() => {
      const options = {
        method: 'GET',
        url: 'https://football-pro.p.rapidapi.com/api/v2.0/fixtures/between/2022-2-26/2022-3-2',
        params: {
          bookmakers: '25679340',
          page: 5,
        
          tz: 'Asia/Yangon',
          include: 'localTeam,visitorTeam,league,odds'
        },
        headers: {
          'x-rapidapi-host': 'football-pro.p.rapidapi.com',
          'x-rapidapi-key': '9b4fb89138mshdc697cc5d45c52fp1daa25jsne2be8889fabc'
        } };

    
         await axios.request(options)
          .then(   function (res) {
            
         
           let softData=res.data.data;
          
         
           let group = softData.reduce((r, a) => {
           
            r[a.league_id] = [...r[a.league_id] || [], a];
            return r;
           }, {});
        console.log(group);
             return   group;              
          }).then(res =>{
         
          setSofting(res);
           setShow(true);
          }
                 
          )
          .catch(function (error) {
            console.error(error);
          }) 
         
        } 
       
      // hello();
      

          
          
          ,[]) ;


    return (
        <div className={classes["betting_section"]}>
     
        <div className={classes["live_bet"]}>
            <div className={classes["mb_10"]}> 
            {/* <TableLists/> */}
<BetTable data={softing} />

</div>
</div>

</div>
    );
}

export default BettngSection;
