import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errorpage = () => {
    const nevigate = useNavigate();
    const redirect =(event)=>{
        event.preventDefault();
        nevigate('/')
    }
    
  return (
    <div>404 Error page .
 
     <button onClick={redirect}>click me</button>

    
    </div>

  )
}

export default Errorpage