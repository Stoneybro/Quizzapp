import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from './App'
import './App.css'
import Quiz from './Quiz'
import History from './Historypage'
import Wrongpage from './Wrongpage'
import Randomfact from './Randomfact'
import Leaderboard from './Leaderboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='Quiz' element={<Quiz />}></Route>
    <Route path='Historypage' element={<History />}></Route>
    <Route path='*' element={<Wrongpage />}></Route>
    <Route path='Randomfact' element={<Randomfact />}></Route>
    <Route path='Leaderboard' element={<Leaderboard />}></Route>
    </Routes>
    
    </BrowserRouter>
   

  </React.StrictMode>
)
