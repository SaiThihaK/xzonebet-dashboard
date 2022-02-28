import React,{useState} from 'react';
import classes from './OddDetail.module.css';
import OddDetailColOne from './OddDetailColOne';
const OddDetail = ({odd,team}) => {
    let odd1= odd.filter((el,index)=>{
        return (index % 2 == 0);
    });
    let odd2= odd.filter((el,index)=>{
        return !(index % 2 == 0);
    });

    const[tab,showtab]=useState( {
        'tab1': true,
        'tab2': false,
        'tab3': false,
        'tab4': false,
        'tab5': false,
     })
  
    return (
        <div className={ `${classes["scoreboardContainer"]} ${classes["detail_show"]}`} >
        <nav className={classes["scoreboardNav"]}>
            <div className={classes["firstScoreNav"]}>
                <div className={`${classes["scoreboard_icn"]} ${ tab.tab1 && classes["activeBorder"]} ${classes["scorelink"]} `} onClick={()=>{   showtab({'tab1': true,'tab2': false,'tab3': false,'tab4': false,'tab5' : false, })} }  >
                    <div title="All markets"  >
                        <i className="far fa-chart-bar"></i>
                        <span>1568</span>
                    </div>
                </div>

                <div className={`${classes["scoreboard_icn"]}  ${classes["scorelink"]}  ${ tab.tab2 && classes["activeBorder"]} `} onClick={()=>{   showtab({'tab1': false,'tab2': true,'tab3': false,'tab4': false,'tab5' : false, })} }  >
                    <div title="Total" >
                        <i className="fas fa-arrows-alt-v"></i>
                        <span>107</span>
                    </div>
                </div>

                <div className={`${classes["scoreboard_icn"]}  ${classes["scorelink"]}  ${ tab.tab3 && classes["activeBorder"]} `} onClick={()=>{   showtab({'tab1': false,'tab2': false,'tab3': true,'tab4': false,'tab5' : false, })} } >
                    <div title="Handicap"  >
                        <i className="fas fa-coins"></i>
                        <span>20</span>
                    </div>
                </div>

                <div className={`${classes["scoreboard_icn"]}  ${classes["scorelink"]}  ${ tab.tab4 && classes["activeBorder"]} `} onClick={()=>{   showtab({'tab1': false,'tab2': false,'tab3': false,'tab4': true,'tab5' : false, })} } >
                    <div title="Popular"  >
                        <i className="fas fa-fire-alt"></i>
                        <span>343</span>
                    </div>
                </div>

                <div className={`${classes["scoreboard_icn"]}  ${classes["scorelink"]}  ${ tab.tab5 && classes["activeBorder"]} `} onClick={()=>{   showtab({'tab1': false,'tab2': false,'tab3': false,'tab4': false,'tab5' : true, })} } >
                    <div title="Result + Total"  >
                        <i className="fas fa-tshirt"></i>
                        <span>4</span>
                    </div>
                </div>

                <div className={`${classes["scoreboard_icn"]}  ${classes["scorelink"]}  `}>
                    <div className={classes["scoreboard_search"]}>
                        <input type="text" placeholder="Search by market" className={classes["inp"]}/>
                        <i className={`fas fa-search ${classes['search_icn']}`}></i>
                    </div>
                </div>

            </div>
           

        </nav>


<div className={classes["betGroupContainer"]}>
<div className={ `${classes['betGroup']} ${classes['detail_tab']} ${ tab.tab1 && classes['show_detail_table']} `}>

<OddDetailColOne odd={odd1} team={team}/>
<OddDetailColOne odd={odd2} team={team} />


</div>
<div className={ `${classes['betGroup']} ${classes['detail_tab']} ${ tab.tab2 && classes['show_detail_table']} `}>

<OddDetailColOne odd={odd1} team={team}  />
    <OddDetailColOne odd={odd2} team={team} />



</div>
<div className={ `${classes['betGroup']} ${classes['detail_tab']} ${ tab.tab3 && classes['show_detail_table']} `}>

<OddDetailColOne odd={odd1} team={team}  />
    <OddDetailColOne odd={odd2} team={team} />



</div>
<div className={ `${classes['betGroup']} ${classes['detail_tab']} ${ tab.tab4 && classes['show_detail_table']} `}>

<OddDetailColOne odd={odd1} team={team}  />
    <OddDetailColOne odd={odd2} team={team} />



</div>
<div className={ `${classes['betGroup']} ${classes['detail_tab']} ${ tab.tab5 && classes['show_detail_table']} `}>

<OddDetailColOne odd={odd1} team={team}  />
    <OddDetailColOne odd={odd2} team={team} />



</div>






</div>
    
    </div>
    );
}

export default OddDetail;
