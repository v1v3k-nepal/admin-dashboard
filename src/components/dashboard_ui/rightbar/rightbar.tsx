import React from 'react'
import Image from 'next/image'
import { rightbarData} from '@/app/lib/data'
import "./_rightbar.scss"

const Rightbar = () => {
  const rightbarDataNew:Com.TrightbarData = rightbarData;
  return (
    <>
    {rightbarDataNew.map((item)=>(
      <div className='rightbar-card' key={item.title}>
      {item.image && <div className="img-container">
        <Image src={item.image} alt="image" fill className='image'></Image>
      </div>}
      <div className="text">
        <span className='notification'>{item.notification}</span>
        <h3 className='title'>{item.title}</h3>
        <span className='subtitle'>{item.subtitle}</span>
        <p className='desc'>{item.desc}</p>
      </div>
      <button className="btn">
      {item.button.icon}
      {item.button.text}
      </button>
    </div>
    ))}
    </>

  )
}

export default Rightbar