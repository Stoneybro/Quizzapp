import React from 'react'
import { useEffect } from 'react'
import emoji from './emojione_trophy.svg'
import { Link, useLocation } from 'react-router-dom'
import {AiFillLeftCircle,AiOutlineCloseSquare} from 'react-icons/ai'
import {ThreeCircles} from 'react-loader-spinner'
import Questions from './Questions'

export default function Quiz() {
    const location=useLocation()
    const categorydifficulty=location.state
    const [questions,setquestions]=React.useState()
    const [stopClick,setStopClick]=React.useState(false)
    const [showmodal,setshowmodal]=React.useState(false)
    const [ans,setans]=React.useState(false)
    const [goback,setgoback]=React.useState(false)
    const [scores,setscores]=React.useState(JSON.parse(localStorage.getItem('scores'))||[''])
    const [dataloading,setdataloading]=React.useState(true)

 
    ////////////////////////////////////////////////////
    
let url=`https://the-trivia-api.com/api/questions?categories=${categorydifficulty[0]}&limit=10&difficulty=${categorydifficulty[1]}`
const fetchApi=async()=>{
  setdataloading(true)
    try {
        const response=await fetch(url)
        const data= await response.json()
        setquestions(data)
        setdataloading(false)
    } catch (error) {
        console.log(error.message);
    }
}

useEffect(()=>{
  if (categorydifficulty[0]&&categorydifficulty[1]) {
    fetchApi()
  }
    return
},[])



    /////////////////////////////////////////////////////
    
    
    useEffect(()=>{
        setquestions(questions?.map((question)=>{
            return {...question,showanswer:false,selectedanswer:''}
        }))
        
       },[])
    function getlocalstorage(params) {
        
        if (localStorage.getItem('answers')) {
            return JSON.parse(localStorage.getItem('answers'))
        }else{
            return questions
        }
    }
function clearstorage(params) {
    localStorage.removeItem('answers')
}
  


    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
                          let j = Math.floor(Math.random() * (i + 1));
                          let temp = array[i];
                          array[i] = array[j];
                          array[j] = temp;
                      }
    }


const correctans=questions?.reduce((total,amount)=>{
    
       if (amount.selectedanswer===amount.correctAnswer&&!total.includes(amount.selectedanswer)) {
        total.push(amount.selectedanswer)
       }
       return total
},[])

 
   function handleselect(id,answer) {
    if (stopClick) {
        return
    }
   setquestions(question=>question.map((question)=>{
    if (question.id===id) {
        return({...question,selectedanswer:answer})
    }else{
        return question
    }
    
   })
   
   )
   }

   useEffect(()=>{
    localStorage.setItem('answers',JSON.stringify(questions))
   },[handleselect])
   function checkanswers(params) {
    setquestions(questions.map((question)=>{
        return({...question,showanswer:true})
    }))
    setStopClick(true)
    setshowmodal(true)
    setscores(scores.map((scoress)=>{
        return([...scoress,{category:questions[0].category,score:`${correctans.length}/10`}])

    }))
   }


   

    const questionelements=questions?.map((question,index)=>{
        return <Questions key={question.id} {...question} handleselect={handleselect} shuffleArray={shuffleArray} index={index} />
    })

    useEffect(()=>{
        localStorage.setItem('scores',JSON.stringify(scores))
    },[checkanswers])
    function clickback(params) {
        setgoback(true)
    }

   
   useEffect(()=>{
    if (!scores.includes('')) {
        const points=scores[0]?.reduce((total,amount)=>{

            return parseInt(total)+parseInt(amount.score)
          },[0])
          const percent=scores[0]?.reduce((total,amount)=>{
          
          return parseInt(total)+parseInt(amount.score)/scores[0].length
            
          },[0])
          let percentage=Math.round(percent*10)
          localStorage.setItem('usernumbers',JSON.stringify([percentage,points]))
          
    }
   },[checkanswers])



    ///////////////////////////////////////////
  
    if (!questions) {
        return <div className='threecircles'><ThreeCircles color="rgba(104, 92, 218, 1)"  /></div>
    }
    return(
        <div className="quizapp-main">
            <div className="quizpage-topbar">
               <div className="backtopicon" onClick={()=>history.back()}><AiFillLeftCircle color='rgba(104, 92, 218, 1)' size={40} /></div>
               <div className="text">{questions[0]?.category}</div> <div></div>
              
            </div>
           {showmodal&& <div className="modalscores">
               <div className="yourscores">
                <img src={emoji} alt="" />
                You got {correctans.length}/{questions.length} questions correctly
                <div className="start inactive stylestart" onClick={()=>setshowmodal(false)}>Check Answers</div>
               </div>
               
                

                
              
                <button className='restart' onClick={()=>history.back()}> Go Home</button>
            </div>}
      
            
      {questionelements}
 
     <button className='submitbutton' type="button" onClick={()=>checkanswers()}>Submit</button>


   </div>
    )
}