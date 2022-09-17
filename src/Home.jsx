import {AiOutlineStar,AiOutlineBulb} from 'react-icons/ai'
import {RiVipCrownLine,RiHomeSmileFill} from 'react-icons/ri'
import {BiBasketball,BiPalette,BiTv,BiWorld,BiDish,BiBarChartAlt2,BiHistory} from 'react-icons/bi'
import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Bnavbar from './bottomnavbar'
import categorydata from './category'
import Q from './Vector.svg'
import {FaPlay,FaHistory,FaHome} from 'react-icons/fa'
//ApiCall(difficultyapi,categoryapi)

function App(props) {
  const [category,setcategory]=useState(categorydata)
  const [difficultybutton,setdifficultybutton]=React.useState(false)
  const [categorybutton,setcategorybutton]=React.useState(true)
  const [signup,setsignup]=React.useState(JSON.parse(localStorage.getItem('details'))||{name:'',username:''})
  const [start,setstart]=React.useState(true)
  const [userfigures,setuserfigures]=React.useState(JSON.parse(localStorage.getItem('usernumbers'))||[0,0])
  const [categorycolor,setcategorycolor]=React.useState()
  const [difficultycolor,setdifficultycolor]=React.useState()
  const [points,setpoints]=React.useState(userfigures[1])
  const [percentage,setpercentage]=React.useState(userfigures[0])
  //const [scoredata,setscoredata]=React.useState(JSON.parse(localStorage.getItem('scores'))||[ {category:'',score:''}])

function handlechange(e) {
  setsignup(prev=>{
    return  {...prev, [e.target.name]:e.target.value}
  })
}

const{byCategory,byDifficulty}=category
const difficulty=Object.keys(byDifficulty)
  const categories=Object.keys(byCategory)

  function categoryset(categori) {
    props.apiCall(categori)
    setcategorybutton(true)
    setcategorycolor(categori)
  }

  function difficultyset(difficulties) {
    props.apiCall(difficulties)
    setdifficultybutton(true)
    setdifficultycolor(difficulties)
  }


useEffect(()=>{
  localStorage.setItem('details',JSON.stringify(signup))

},[button])
useEffect(()=>{
  localStorage.setItem('points',JSON.stringify(points))

},[button])
useEffect(()=>{
  if (JSON.parse(localStorage.getItem('details'))&&signup.username&&signup.name) {
    setstart(false)
  }
},[])
  function button(e) {
    e.preventDefault()
    if (signup.name&&signup.username) {
      setstart(false)
    }
  }

  let names=signup.name.split('')[0]?signup.name.split('')[0].toUpperCase():signup.name.split('')[0]
    return(

      <div className="quizapp">
        <div className="quizapp-text-profile">
          <div className="quizapp-text">Quizapp</div>
          <div className="quizapp-profile">{names}</div>
        </div>
      <div className="home-dashboard">
        <div className="points">
          <AiOutlineStar  size={30} />
          <div className="points-text">POINTS</div>
          <div className="points-figure">{points}</div>
        </div>
        <div className="win-percent">
            <RiVipCrownLine size={30} />
            <div className="win-percent-text">WIN PERCENTAGE</div>
            <div className="win-percent-figure">{percentage}%</div>
        </div>
        <div className="rank">
              <BiBarChartAlt2  size={30} />
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
