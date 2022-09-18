import React, { useState } from 'react'
import './App.css'
import categorydata from './category'
import Home from './Home'



function App() {
  const [category,setcategory]=useState()
  const [difficulty,setdifficulty]=useState()

 const{byCategory,byDifficulty}=categorydata//category data is imported from the category.jsx file that has json file that contains the categories and difficulties
const difficulties=Object.keys(byDifficulty)
 const categories=Object.keys(byCategory)

 function ApiCall(newcategorydifficulty) {
  if (categories.includes(newcategorydifficulty)) {
    const regex=/ & /
    setcategory(newcategorydifficulty.replace(regex, '_and_' ))// regex is used to make the string suitable for an api call by replacing some characters

  }
  if (difficulties.includes(newcategorydifficulty)) {
    setdifficulty(newcategorydifficulty)
  }

}//apicall gets an argument(newcategorydifficulty) from the Home.jsx component and sets the appropriate string to the category and difficulty state ,which are then sent as props back to home component


    return(
    <Home apiCall={ApiCall} categorydifficulty={[category,difficulty]} />

    )

}

export default App
