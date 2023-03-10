import React from 'react'

function SingleHeaderOptions({Icon, title, selected}) {
  return (
    <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-b-500 pb-3 ${selected && "text-blue-500 border-blue-500"}` }>
        {Icon}
        <p className='hidden sm:inline-flex'> {title} </p>
    </div>
  )
}

export default SingleHeaderOptions