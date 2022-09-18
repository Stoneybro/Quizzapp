import {AiOutlineStar,AiOutlineBulb} from 'react-icons/ai'
import {RiVipCrownLine,RiHomeSmileFill} from 'react-icons/ri'
import {BiBasketball,BiPalette,BiTv,BiWorld,BiDish,BiBarChartAlt2,BiHistory} from 'react-icons/bi'
import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Bnavbar from './bottomnavbar'
import categorydata from './category'
import Q from './Vector.svg'
//ApiCall(difficultyapi,categoryapi)

function App(props) {
  const [category,setcategory]=useState(categorydata)
  const [difficultybutton,setdifficultybutton]=React.useState(false)//states to validate if the category and difficulty button where clicked
  const [categorybutton,setcategorybutton]=React.useState(false)//
  const [signup,setsignup]=React.useState(JSON.parse(localStorage.getItem('details'))||{name:'',username:''})
  const [start,setstart]=React.useState(true)//toggling the login page
  const [userfigures,setuserfigures]=React.useState(JSON.parse(localStorage.getItem('usernumbers'))||[0,0])//values(percentage and points) from localstorage (set in the leaderboard component)
  const [categorycolor,setcategorycolor]=React.useState()//state to use styles on clicked category and difficulty button
  const [difficultycolor,setdifficultycolor]=React.useState()
  const [points,setpoints]=React.useState(userfigures[1])
  const [percentage,setpercentage]=React.useState(userfigures[0])

function handlechange(e) {
  setsignup(prev=>{
    return  {...prev, [e.target.name]:e.target.value}
  })
}// function to save text inputs as objects to state

const{byCategory,byDifficulty}=category
const difficulty=Object.keys(byDifficulty)
  const categories=Object.keys(byCategory)

  function categoryset(categori) {
    props.apiCall(categori)
    setcategorybutton(true)
    setcategorycolor(categori)
  }
//functions to send strings as arguments to parent component function(apicall) and also save to state to be used to filter and add styles to the category and filter buttons
  function difficultyset(difficulties) {
    props.apiCall(difficulties)
    setdifficultybutton(true)
    setdifficultycolor(difficulties)
  }


useEffect(()=>{
  localStorage.setItem('details',JSON.stringify(signup))

},[button])
//saving the objects and points in signup state to local storage onclick of the 'enter quizapp' button
useEffect(()=>{
  localStorage.setItem('points',JSON.stringify(points))
},[button])
useEffect(()=>{//useeffect hook to validate if local storage contains the user details and whether to show the login page
  if (JSON.parse(localStorage.getItem('details'))&&signup.username&&signup.name) {
    setstart(false)
  }
},[])
  function button(e) {//removes the login page when the the form is filled
    e.preventDefault()
    if (signup.name&&signup.username) {
      setstart(false)
    }
  }

  let names=signup.name.split('')[0]?signup.name.split('')[0].toUpperCase():signup.name.split('')[0]//first letter of the name of the user(gotteen from signup.name)
    return(

      <div className="quizapp">
        <div className="quizapp-text-profile">
          <div className="quizapp-text">Quizapp</div>
          <div className="quizapp-profile">{names}</div>
        </div>
      <div className="home-dashboard">
        <div className="points">
          <AiOutlineStar  size={25} />
          <div className="points-text">POINTS</div>
          <div className="points-figure">{points}</div>
        </div>
        <div className="win-percent">
            <RiVipCrownLine size={25} />
            <div className="win-percent-text">WIN PERCENTAGE</div>
            <div className="win-percent-figure">{percentage}%</div>
        </div>
        <div className="rank">
              <BiBarChartAlt2  size={25} />
              <div className="rank-text">RANK</div>
              <div className="rank-figure">1</div>
        </div>
    </div>
   <div className="category-difficulty-container">
    <div className="category">
      <h3>
        Category 
      </h3>
      <div className="category-container">
      <div className="btn-category-container">
     {categories.map((categories,index)=>{
        let selectcolor=categories===categorycolor?'select-option':''
        
        return <button key={index} className={`button-category-color ${selectcolor}`} onClick={()=>{categoryset(categories);}}>{categories}</button>
     })}
      </div>
    </div>
    </div>
    <div className="difficulty">
      <h3>Difficulty</h3>
      <div className="btn-difficulty-container">
      {difficulty.map((difficulties,index)=>{
            let selectcolor=difficulties===difficultycolor?'select-option':''
        return <button key={index} className={`button-difficulty-color ${selectcolor}`} onClick={()=>{difficultyset(difficulties);}}>{difficulties}</button>
     })}
      </div>
    </div>
    </div>
     {difficultybutton&&categorybutton? <div className='start'><NavLink style={{color:'white'}} to={'/Quiz'}state={props.categorydifficulty} >Start Quiz</NavLink ></div>:<div className='start inactive'>Start Quiz</div>}
     {start&&<div className='signup'>
      <div className="signup-img-title">
      <img src={Q} alt="" />
     <div className="signup-title">Quizzapp</div>
      </div>
     <form>
     <div className="signup-input">
     <input type="text" placeholder='Name' value={signup.name} name='name' onChange={(e)=>handlechange(e)} required />
      <input type="text" placeholder='Username' value={signup.username} name='username' onChange={(e)=>handlechange(e)} required/>
     </div>
     
      <button onClick={(e)=>{button(e)}} className='submitbutton signup-button'>Enter Quizapp</button>
      </form>
      </div>
      }
   <Bnavbar />
  </div>
    )

}

export default App
