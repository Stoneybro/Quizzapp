import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import categorydata from './category'
import home from './Home.png'
import Home from './Home'
import {FaPlay,FaHistory,FaHome} from 'react-icons/fa'


function App() {
  const [category,setcategory]=useState()
  
  const [questions,setquestions]=React.useState()
  const [difficulty,setdifficulty]=React.useState()
  const{byCategory,byDifficulty}=categorydata

const difficulties=Object.keys(byDifficulty)
  const categories=Object.keys(byCategory)

 function ApiCall(newcategorydifficulty) {
  if (categories.includes(newcategorydifficulty)) {
    const regex=/ & /
    setcategory(newcategorydifficulty.replace(regex, '_and_' ))

  }
  if (difficulties.includes(newcategorydifficulty)) {
    setdifficulty(newcategorydifficulty)
  }

}


    return(
      // <Frontpage change={changestart} categories={category} />
    <Home apiCall={ApiCall} categorydifficulty={[category,difficulty]} />

    )

}

export default App
