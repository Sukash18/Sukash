import React,{useState} from 'react'

export const Dynami = () => {
    const [isvisible,setvisible]=useState(false);
    const handleClick=()=>{
        setvisible(!isvisible);
    };
  return (
    <div>
        <button onClick={handleClick}>hjvjh</button> 
    </div>
  )
}
