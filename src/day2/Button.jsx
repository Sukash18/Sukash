import React from 'react'

const Button = (prop) => {
  return (
    <div><button className={'bg-${prop.color}'}></button></div>
  )
}

export default Button