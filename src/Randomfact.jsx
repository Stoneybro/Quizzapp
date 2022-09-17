import React, { useEffect } from "react";
import Bnavbar from './bottomnavbar'
import {CirclesWithBar,ThreeCircles,BallTriangle} from 'react-loader-spinner'
export default function randomfact(params) {
    
    const [facts,setFacts]=React.useState()
    const [loading,setloading]=React.useState(true)
    const [factno,setfactno]=React.useState(0)
    //console.log(localfacts());
    const url = "https://api.api-ninjas.com/v1/facts?limit=30";
 const fetchRandom=async()=>{
    const response=await  fetch(url,{headers: { 'X-Api-Key': 'zi4CTQ1GeyV5vb4Gsa7U+w==VvtEUSbo9oajPUHa'},})
        const data=await response.json()
        setFacts(data)
        setloading(false)
  }

  useEffect(()=>{
    fetchRandom()
  },[])
  useEffect(()=>{
    localStorage.setItem('facts',JSON.stringify(facts))
  },[facts])


  if (!facts) {
    return(<div className="factloading">
        <ThreeCircles color="rgba(104, 92, 218, 1)" />
        <Bnavbar />
    </div>)
    
  }
  
  return(
    <div>
        <div className="facts">
            <div className="recent-topbar">
                <div className="recent">Random Facts</div>
            </div>
            <div className="fact">{facts[factno].fact}</div>
            <div className="fact-buttons">
            <button  onClick={()=>{setfactno(factno-1);factno<=0?setfactno(0):factno}}>Prev</button>
                <button onClick={()=>{setfactno(factno+1);factno>=29?setfactno(0):factno}}>Next</button>
            </div>
        </div>

<Bnavbar />
    </div>
  )
}