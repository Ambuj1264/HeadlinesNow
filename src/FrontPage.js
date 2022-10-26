import React from 'react'
import { useNavigate } from 'react-router-dom';
 import './index.css'
const FrontPage = () => {
const navigate=useNavigate()
const hello=()=>{
navigate("/worldwide")
}

  return (

    <div className='fontpae' >
    <div className="getstart">
   <button onClick={hello} className="getstar"> Get Started </button>
   </div>
    </div>
  )
}

export default FrontPage;

