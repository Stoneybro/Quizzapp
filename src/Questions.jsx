 import React, { useState } from "react";
import { useEffect } from "react";
 import {nanoid} from 'nanoid'


 const child=(props)=> {
  const {correctAnswer,incorrectAnswers,question}=props
  const next=[...incorrectAnswers,correctAnswer]
  const [fullarray,setfullarray]=React.useState(next)
  shuffleArray(next)
  useEffect(()=>{
    setfullarray(next)
  },[])




function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
                      let j = Math.floor(Math.random() * (i + 1));
                      let temp = array[i];
                      array[i] = array[j];
                      array[j] = temp;
                      
                  }
                  
}







   

   function check(wrong) {
    for (let i = 0; i < incorrectAnswers.length; i++) {
      if (wrong===incorrectAnswers[i]) {
        return wrong
      }
    }
    return wrong
   }
   
  const buttonarray=fullarray?.map((answers)=>{
    const checkanswer=`${props.selectedanswer===answers?'option':''}
      ${(props.showanswer)&&answers===correctAnswer?'correct-ans':''}
      ${(props.showanswer)&&check(answers)?(props.selectedanswer===answers?'wrong-ans':''):''} `

    return (<button onClick={()=>props.handleselect(props.id,answers)} className={`button-answer-color ${checkanswer}`} key={nanoid()}>{answers}</button>)
  })


    return(
  <div className="quizapp-main-container">    
          <div  className="q-a">
          <div className="question-number">   Question {props.index+1}/10</div>
          <div className="question">{props.question}</div>
          </div>
          <div className="answers">
          
          {buttonarray}
          
          </div>   
  </div>     
      )


 }
export default  child