import React from 'react'
import Bnavbar from './bottomnavbar'
import crown from './Group.svg'
export default function leaderboard(params) {
    const [userdata,setuserdata]=React.useState(JSON.parse(localStorage.getItem('details')))
    const [points,setpoints]=React.useState(JSON.parse(localStorage.getItem('points')))
    let profile=userdata.name.split('')[0]?userdata.name.split('')[0].toUpperCase():userdata.name.split('')[0]
    console.log(userdata.name.split(''));
    return(
        <div className='leader-board'>
            <div className="leaders">
                <h3>Leaderboard</h3>
                <div className="first-leader">
                <div><img src={crown} alt="" width={40} /></div>
                    <div className="leader-profile">{profile}</div>
                    <div className="leader-point">{points}</div>
                    <div className="leader-username">{userdata.username}</div>
                    
                </div>
            </div>
            <div className="leaderboard-list">
               <div className="user">
                    <div className="boardlist-no">1</div>
                        <div className="boardlist-profile">{profile}</div>
                        <div className="boardlist-username">{userdata.username}</div>
                        <div className="boardlist-points">{points}</div>
               </div>
            </div>
            <Bnavbar />
        </div>
    )
}