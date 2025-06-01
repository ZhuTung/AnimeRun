import React from 'react'
import '../styles/components/textbox.css'

const Textbox = ({ label, id, placeholder, value, onChange, className, isPassword = false }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={isPassword ? "password" : "text" } id={id} placeholder={placeholder} value={value} onChange={onChange} className={className} />
    </>
    
  )
}

export default Textbox