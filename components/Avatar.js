import React from 'react'

function Avatar({url, className}) {
  return (
   <img loading='lazy' src={url} alt="profile pic" 
   className={`h-10 w-10 rounded-full cursor-pointer hover:scale-110 ease-in-out transition duration-150 ${className}`} />   
  )
}

export default Avatar