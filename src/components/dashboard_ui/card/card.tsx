import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'
import "./_card.scss"

// type Props = {
//     item: string
// }

const Card = () => {
  return (
    <div className='card-container'>
        <MdSupervisedUserCircle size={24}/>
        <div className="card-content">
            <h1 className='title'>Total Users</h1>
            <p>10.928</p>
            <div className="details">
                <span className='positive'>5.46%</span>
                <span> more </span>
                <span>than previous week</span>
            </div>
        </div>
    </div>
  )
}

export default Card