"use client"
import {motion} from "framer-motion"
import React from 'react'

type Props = {
    children: React.ReactNode,
    id: number
}

const AnimatedTd = ({children, id}: Props) => {
  return (
    <motion.td className="table-data"
    initial={{scale: 0.5, opacity: 0, x: -100}} 
    animate={{scale: 1, opacity: 1, x: 0}}
    transition={{
      delay: 0.2*id,
      x: {type: "spring", stiffness: 60},
      opacity:{duration: 1},
      ease: "easeIn" 
    }}
    >
        {children}
    </motion.td>
  )
}

export default AnimatedTd