import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'
import "./_card.scss"

const Card = ({item}:{item:Com.TCardData}) => { 
  return (
    <div className='card-container'>
        <MdSupervisedUserCircle size={24}/>
        <div className="card-content">
            <h1 className='title'>{item.title}</h1>
            <p>{item.userTotal}</p>
            <div className="details">
                <span className={`${item.change > 0? "positive": "negative"}`}>{item.change}%</span>
                <span>
                  {item.change > 0 ? "more than previous week": "less than previous week"}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Card