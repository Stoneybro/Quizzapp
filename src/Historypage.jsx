import React, { useEffect } from "react";
import {FaFreeCodeCamp} from 'react-icons/fa'
import {AiOutlineLeftSquare,AiFillDelete,AiFillLeftCircle, AiOutlineLeftCircle} from 'react-icons/ai'
import { Link } from "react-router-dom";
import Bnavbar from './bottomnavbar'
export default function (params) {
  const [history,sethistory]=React.useState(JSON.parse(localStorage.getItem('scores')))
  useEffect(()=>{

  },[clear])
  function clear(params) {
        localStorage.removeItem('scores')
        sethistory(null)
  }

  return(
    <div className="quizapp">
   
    <div className="recent-topbar">
      <div className="recent-topbar-icon"  >
  <Link to='/'>   <AiFillLeftCircle color='rgba(104, 92, 218, 1)' size={35} /></Link>
      </div>
      <div className="recent">Recent</div>
      <div className="clear-recent" onClick={clear} >Clear All <span>< AiFillDelete size={25} color='rgba(191, 95, 91, 1)' /></span></div>
    </div>
    <div className="recent-card-container">
   {history&&history[0].reverse().map((history,index)=>{
    return(

     <div className="recent-card" key={index}>
         
             <div className="title-scores">
                 <div className="title">{history?.category}</div>
                 <div className="score">{history?.score}</div>    
              </div>
           </div>
           
     
)
   })}
        </div>
        <Bnavbar />
   
 </div>
  )
}