"use client"
import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'
import {motion} from "framer-motion"
import "./_card.scss"

const Card = ({item}:{item:Com.TCardData}) => { 
  return (
    <motion.div className='card-container'
    initial={{scale: 0.6, opacity: 0, y: -50, x: 50}}
    whileInView={{scale: 1, opacity: 1, y: 0, x: 0}}
    transition={{
      delay: 0.1*item.id,
      x:{type: "spring", stiffness: 60},
      y:{type: "spring", stiffness: 60},
      ease: "easeIn"
    }}
    >
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
    </motion.div>
  )
}

export default Card