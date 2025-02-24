import React from 'react'
import herosectionBg from "@/assets/herosection/herosection-bg.jpg";
import Herosection from '../ui/Herosection';

export default function page() {
  return (
    <div className=" bg-cover bg-center" 
    style={{ backgroundImage: `url(${herosectionBg.src})` }}>
      <Herosection isServeyFinish={true}/>
    </div>
  )
}
