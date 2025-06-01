import React from 'react'
import '../styles/components/button.css'

const Button = ({ onClick, children, className }) => {
  return (
    <div>
        <button onClick={onClick} className={`blue-btn ${className}`}>{children}</button>
    </div>
  )
}

export default Button