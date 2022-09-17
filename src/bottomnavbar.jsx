import {AiOutlineStar,AiOutlineBulb} from 'react-icons/ai'
import {RiVipCrownLine,RiHomeSmileFill} from 'react-icons/ri'
import {BsHeadphones,BsThermometerLow,BsThermometerHalf,BsThermometerHigh} from 'react-icons/bs'
import {BiBasketball,BiPalette,BiTv,BiWorld,BiDish,BiBarChartAlt2,BiHistory} from 'react-icons/bi'
import {MdOutlineHistoryEdu} from 'react-icons/md'
import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'




export default function bnavbar(params) {

    return(
        <div className="bottomnavbar">
        <div className='links'> <NavLink   to='/' ><RiHomeSmileFill color='rgba(199, 199, 199, 1' size={30} className='active-link'  /></NavLink>Home</div>
        <div className='links'> <NavLink to='/Randomfact' ><AiOutlineBulb color='rgba(199, 199, 199, 1' size={30}  className='active-link'   /></NavLink>Facts</div>
        <div className='links'> <NavLink to='/Leaderboard'><BiBarChartAlt2 color='rgba(199, 199, 199, 1' size={30} className='active-link'  /></NavLink>Leaderboard</div>
        <div className='links'> <NavLink to='/Historypage'><BiHistory color='rgba(199, 199, 199, 1' size={30}  className='active-link' /></NavLink>History</div>
      </div>
    )
}
//rgba(104, 92, 218, 1)