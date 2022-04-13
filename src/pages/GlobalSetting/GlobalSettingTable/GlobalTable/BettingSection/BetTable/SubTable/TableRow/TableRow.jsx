import React,{useState} from 'react'
import ExtraOdd from './ExtraOdd/ExtraOdd';
import OddCol from './OddCol/OddCol';
import OddDetail from './OddDeatil/OddDetail';
import classes from './TableRow.module.css';

const TableRow=({team1,team2,duration,half,odd})=> {
 const teamName= {"1": team1 ,"2": team2, "X": "Draw" }
  const [detail,setDetail]=useState(false);
  const [extra,setExtra]=useState(false);
  return (
      <div className={classes["table-row"]}>
    <div className={classes["table-body"]}>
    <div className={classes["table-content"]}>
        <div className={classes["table-team-score"]}>
            <div className={["display-flex"]}>

           
                <div className={classes["icon"]}>
                  <i className={classes["fas fa-thumbtack"]}></i>
                </div>
                <div className={classes["team-name"]}>
                  <a href="./betDetail.html"> 
                      <p className={["mb-3"]}>{team1}</p>
                      <p>{team2}</p>
                  </a>
                </div>
              </div>
                <div className={classes["score"]}>
                    <div className={classes["row"]}>
                        
                      
                    </div>
                  
        </div>
        
      </div>
     
  <div className={classes["match-info"]}>
      <div className={classes["display-flex"]}>
            
        <div className={classes["star"]}>
            <i className="far fa-star"></i>
          </div>
          <div className={classes["duration"]}>
            <span className={classes["color-blue"]}>{duration}</span>
            <span className={classes["color-green"]}>{half}</span>
          </div>
      </div>
      
      <div className={classes["match-status"]}>
        <a href="#!" className={classes["ball-svg"]}>
          {/* <svg version="1.1" id="Layer-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="360px" height="360px" viewBox="0 0 360 360" enable-background="new 0 0 360 360" xml:space="preserve">
          <image display="none" overflow="visible" width="128" height="109" xlink:href="../Source/Untitledddd.png"  transform="matrix(0.7501 0 0 0.7501 69 65.75)">
          </image>
          <image display="none" overflow="visible" width="192" height="100" xlink:href="../Source/ss.png"  transform="matrix(0.7501 0 0 0.7501 186.666 65.75)">
          </image>
          <g>
            <path fill="#77A02E" d="M286.807,140.887v70.698h41.453v-70.698H286.807z M300.927,183.428v-14.12h14.12v14.12H300.927z"/>
            <rect x="31.74" y="140.887" fill="#77A02E" width="42.097" height="70.698"/>
            <polygon fill="#C9D9AB" points="88.741,125.82 31.74,125.82 31.74,140.887 73.837,140.887 73.837,211.585 31.74,211.585 
              31.74,226.229 88.741,226.229 	"/>
            <rect x="45.597" y="169.308" fill="#C9D9AB" width="14.12" height="14.12"/>
            <polygon fill="#C9D9AB" points="286.807,140.887 328.26,140.887 328.26,125.82 271.902,125.82 271.902,226.229 328.26,226.229 
              328.26,211.585 286.807,211.585 	"/>
            <rect x="300.927" y="169.308" fill="#C9D9AB" width="14.12" height="14.12"/>
            <polygon fill="#77A02E" points="328.26,125.82 328.26,84.701 240.145,84.701 186.992,84.701 172.872,84.701 150.455,84.701 
              31.74,84.701 31.74,125.82 88.741,125.82 88.741,226.229 31.74,226.229 31.74,268 150.455,268 172.872,268 186.992,268 
              240.145,268 328.26,268 328.26,226.229 271.902,226.229 271.902,125.82 	"/>
            <g>
              <rect x="180.184" y="84.701" fill="#C9D9AB" width="14.12" height="183.299"/>
              <rect x="166.162" y="197.499" fill="#C9D9AB" width="42.262" height="13.923"/>
               <rect x="166.113" y="141.019" fill="#C9D9AB" width="42.262" height="13.924"/>
              <rect x="152.189" y="155.09" fill="#C9D9AB" width="13.923" height="42.261"/>
              <rect x="208.424" y="155.09" fill="#C9D9AB" width="13.924" height="42.261"/>
            </g>
          </g>
          <g display="none">
            <rect x="21.613" y="275.107" display="inline" fill="#464646" width="315.775" height="25.509"/>
            <rect x="62.427" y="173.159" display="inline" fill="#464646" width="49.408" height="89.147"/>
            <rect x="190.912" y="134.136" display="inline" fill="#464646" width="49.406" height="128.17"/>
            <rect x="251.596" y="49.642" display="inline" fill="#464646" width="49.408" height="212.665"/>
            <rect x="126.385" y="90.457" display="inline" fill="#464646" width="49.406" height="171.85"/>
          </g>
          <g display="none">
            <rect x="14.881" y="95.016" display="inline" fill="none" width="329.238" height="171.547"/>
            <polygon display="inline" fill="#4A8CBB" points="344.119,266.563 344.119,95.016 14.881,95.016 14.881,266.563 154.433,266.563 
              154.433,279.006 122.537,279.006 122.537,298.066 237.432,298.066 237.432,279.006 205.535,279.006 205.535,266.563 	"/>
            <rect x="152.981" y="254.385" display="inline" fill="none" width="46.857" height="43.682"/>
            <rect x="120.154" y="279.006" display="inline" fill="none" width="114.895" height="19.061"/>
            <rect x="25.115" y="107.723" display="inline" fill="#3077AB" width="304.973" height="145.736"/>
            <rect x="32.354" y="112.356" display="inline" fill="#1E68A0" width="291.555" height="136.689"/>
            <g display="inline">
              <path fill="#A7BFD1" d="M110.111,209.459v18.188H55.204v-91.061h18.304v72.872H110.111z"/>
              <path fill="#A7BFD1" d="M120.439,136.587h18.3v91.061h-18.3V136.587z"/>
              <path fill="#A7BFD1" d="M233.551,136.587l-42.593,93.319h-0.675l-42.423-93.319h19.375l23.329,52.872l23.389-52.872H233.551z"/>
              <path fill="#A7BFD1" d="M261.014,154.605V172.4h31.403v18.246h-31.403v18.813h36.603v18.188h-54.907v-91.061h54.907v18.019
                H261.014z"/>
            </g>
          </g>
          </svg> */}
         </a>
         <a href="#!" className={classes["ball-svg"]}>
          {/* <svg version="1.1" id="Layer-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="360px" height="360px" viewBox="0 0 360 360" enable-background="new 0 0 360 360" xml:space="preserve">
          <image display="none" overflow="visible" width="128" height="109" xlink:href="../Source/Untitledddd.png"  transform="matrix(0.7501 0 0 0.7501 69 65.75)">
          </image>
          <image display="none" overflow="visible" width="192" height="100" xlink:href="../Source/ss.png"  transform="matrix(0.7501 0 0 0.7501 186.666 65.75)">
          </image>
          <g display="none">
            <path display="inline" fill="#77A02E" d="M286.807,140.887v70.698h41.453v-70.698H286.807z M300.927,183.428v-14.12h14.12v14.12
              H300.927z"/>
            <rect x="31.74" y="140.887" display="inline" fill="#77A02E" width="42.097" height="70.698"/>
            <polygon display="inline" fill="#C9D9AB" points="88.741,125.82 31.74,125.82 31.74,140.887 73.837,140.887 73.837,211.585 
              31.74,211.585 31.74,226.229 88.741,226.229 	"/>
            <rect x="45.597" y="169.308" display="inline" fill="#C9D9AB" width="14.12" height="14.12"/>
            <polygon display="inline" fill="#C9D9AB" points="286.807,140.887 328.26,140.887 328.26,125.82 271.902,125.82 271.902,226.229 
              328.26,226.229 328.26,211.585 286.807,211.585 	"/>
            <rect x="300.927" y="169.308" display="inline" fill="#C9D9AB" width="14.12" height="14.12"/>
            <polygon display="inline" fill="#77A02E" points="328.26,125.82 328.26,84.701 240.145,84.701 186.992,84.701 172.872,84.701 
              150.455,84.701 31.74,84.701 31.74,125.82 88.741,125.82 88.741,226.229 31.74,226.229 31.74,268 150.455,268 172.872,268 
              186.992,268 240.145,268 328.26,268 328.26,226.229 271.902,226.229 271.902,125.82 	"/>
            <g display="inline">
              <rect x="180.184" y="84.701" fill="#C9D9AB" width="14.12" height="183.299"/>
              <rect x="166.162" y="197.499" fill="#C9D9AB" width="42.262" height="13.923"/>
              <rect x="166.113" y="141.019" fill="#C9D9AB" width="42.262" height="13.924"/>
              <rect x="152.189" y="155.09" fill="#C9D9AB" width="13.923" height="42.261"/>
              <rect x="208.424" y="155.09" fill="#C9D9AB" width="13.924" height="42.261"/>
            </g>
          </g>
          <g display="none">
            <rect x="21.613" y="275.107" display="inline" fill="#464646" width="315.775" height="25.509"/>
            <rect x="62.427" y="173.159" display="inline" fill="#464646" width="49.408" height="89.147"/>
            <rect x="190.912" y="134.136" display="inline" fill="#464646" width="49.406" height="128.17"/>
            <rect x="251.596" y="49.642" display="inline" fill="#464646" width="49.408" height="212.665"/>
            <rect x="126.385" y="90.457" display="inline" fill="#464646" width="49.406" height="171.85"/>
          </g>
          <g>
            <rect x="14.881" y="95.016" fill="none" width="329.238" height="171.547"/>
            <polygon fill="#4A8CBB" points="344.119,266.563 344.119,95.016 14.881,95.016 14.881,266.563 154.433,266.563 154.433,279.006 
              122.537,279.006 122.537,298.066 237.432,298.066 237.432,279.006 205.535,279.006 205.535,266.563 	"/>
            <rect x="152.981" y="254.385" fill="none" width="46.857" height="43.682"/>
            <rect x="120.154" y="279.006" fill="none" width="114.895" height="19.061"/>
            <rect x="25.115" y="107.723" fill="#3077AB" width="304.973" height="145.736"/>
            <rect x="32.354" y="112.356" fill="#1E68A0" width="291.555" height="136.689"/>
            <g>
              <path fill="#A7BFD1" d="M110.111,209.459v18.188H55.204v-91.061h18.304v72.872H110.111z"/>
              <path fill="#A7BFD1" d="M120.439,136.587h18.3v91.061h-18.3V136.587z"/>
              <path fill="#A7BFD1" d="M233.551,136.587l-42.593,93.319h-0.675l-42.423-93.319h19.375l23.329,52.872l23.389-52.872H233.551z"/>
              <path fill="#A7BFD1" d="M261.014,154.605V172.4h31.403v18.246h-31.403v18.813h36.603v18.188h-54.907v-91.061h54.907v18.019
                H261.014z"/>
            </g>
          </g>
          </svg> */}
         </a>
          <div className={classes["match-signal"]}   >
            {/* <svg version="1.1" id="Layer-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="360px" height="360px" viewBox="0 0 360 360" enable-background="new 0 0 360 360" xml:space="preserve">
            <image display="none" overflow="visible" width="128" height="109" xlink:href="../Source/Untitledddd.png"  transform="matrix(0.7501 0 0 0.7501 69 65.75)">
            </image>
            <image display="none" overflow="visible" width="192" height="100" xlink:href="../Source/ss.png"  transform="matrix(0.7501 0 0 0.7501 186.666 65.75)">
            </image>
            <g display="none">
              <path display="inline" fill="#77A02E" d="M286.807,140.887v70.698h41.453v-70.698H286.807z M300.927,183.428v-14.12h14.12v14.12
                H300.927z"/>
              <rect x="31.74" y="140.887" display="inline" fill="#77A02E" width="42.097" height="70.698"/>
              <polygon display="inline" fill="#C9D9AB" points="88.741,125.82 31.74,125.82 31.74,140.887 73.837,140.887 73.837,211.585 
                31.74,211.585 31.74,226.229 88.741,226.229 	"/>
              <rect x="45.597" y="169.308" display="inline" fill="#C9D9AB" width="14.12" height="14.12"/>
              <polygon display="inline" fill="#C9D9AB" points="286.807,140.887 328.26,140.887 328.26,125.82 271.902,125.82 271.902,226.229 
                328.26,226.229 328.26,211.585 286.807,211.585 	"/>
              <rect x="300.927" y="169.308" display="inline" fill="#C9D9AB" width="14.12" height="14.12"/>
              <polygon display="inline" fill="#77A02E" points="328.26,125.82 328.26,84.701 240.145,84.701 186.992,84.701 172.872,84.701 
                150.455,84.701 31.74,84.701 31.74,125.82 88.741,125.82 88.741,226.229 31.74,226.229 31.74,268 150.455,268 172.872,268 
                186.992,268 240.145,268 328.26,268 328.26,226.229 271.902,226.229 271.902,125.82 	"/>
              <g display="inline">
                <rect x="180.184" y="84.701" fill="#C9D9AB" width="14.12" height="183.299"/>
                <rect x="166.162" y="197.499" fill="#C9D9AB" width="42.262" height="13.923"/>
                <rect x="166.113" y="141.019" fill="#C9D9AB" width="42.262" height="13.924"/>
                <rect x="152.189" y="155.09" fill="#C9D9AB" width="13.923" height="42.261"/>
                <rect x="208.424" y="155.09" fill="#C9D9AB" width="13.924" height="42.261"/>
              </g>
            </g>
            <g>
              <rect x="21.613" y="275.107" fill="#464646" width="315.775" height="25.509"/>
              <rect x="62.427" y="173.159" fill="#464646" width="49.408" height="89.147"/>
              <rect x="190.912" y="134.136" fill="#464646" width="49.406" height="128.17"/>
              <rect x="251.596" y="49.642" fill="#464646" width="49.408" height="212.665"/>
              <rect x="126.385" y="90.457" fill="#464646" width="49.406" height="171.85"/>
            </g>
            <g display="none">
              <rect x="14.881" y="95.016" display="inline" fill="none" width="329.238" height="171.547"/>
              <polygon display="inline" fill="#4A8CBB" points="344.119,266.563 344.119,95.016 14.881,95.016 14.881,266.563 154.433,266.563 
                154.433,279.006 122.537,279.006 122.537,298.066 237.432,298.066 237.432,279.006 205.535,279.006 205.535,266.563 	"/>
              <rect x="152.981" y="254.385" display="inline" fill="none" width="46.857" height="43.682"/>
              <rect x="120.154" y="279.006" display="inline" fill="none" width="114.895" height="19.061"/>
              <rect x="25.115" y="107.723" display="inline" fill="#3077AB" width="304.973" height="145.736"/>
              <rect x="32.354" y="112.356" display="inline" fill="#1E68A0" width="291.555" height="136.689"/>
              <g display="inline">
                <path fill="#A7BFD1" d="M110.111,209.459v18.188H55.204v-91.061h18.304v72.872H110.111z"/>
                <path fill="#A7BFD1" d="M120.439,136.587h18.3v91.061h-18.3V136.587z"/>
                <path fill="#A7BFD1" d="M233.551,136.587l-42.593,93.319h-0.675l-42.423-93.319h19.375l23.329,52.872l23.389-52.872H233.551z"/>
                <path fill="#A7BFD1" d="M261.014,154.605V172.4h31.403v18.246h-31.403v18.813h36.603v18.188h-54.907v-91.061h54.907v18.019
                  H261.014z"/>
              </g>
            </g>
            </svg> */}
            <div className={classes["statistics"]}>
                <a href="#!">
                   <i className="fas fa-chart-bar"></i>
                   <p>Statistics</p>
                 
                </a>
                <a href="#!">
                   <i className={["fas fa-th"]}></i>
                   <p>Stadings</p>
                </a>
                 </div>
          </div>
            
          {/* <div className={classes["bets-detail"]} onClick={()=>{setDetail(!detail)}} >
              <p >314</p> 
              <div className={`${classes["bet-arrow"]} ${ detail && classes["detail-active"]} `}>
                <i className="fas fa-chevron-down arrow-fs"></i> 
              </div>
               

          </div> */}
        
             <div className={`${classes["down "]} ${extra && classes["extra-active"]}  ` } onClick={()=>{setExtra(!extra)}}  >
                <i className="fas fa-chevron-down arrow-fs"></i> 
             </div>
      </div>
  </div>
         
</div>

 
 {
 odd.length != 0 &&  <OddCol odd={odd.data} />
} 
  
   


  
</div>
{/* {extra && <ExtraOdd />} */}

{detail &&<OddDetail ColType="OddCol" odd={odd.data} team={teamName} />}


</div>

  )
}

export default TableRow