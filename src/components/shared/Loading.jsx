import React from "react"
import logo from './spinner.gif'
export const Loading = () => {
    return (
    <div  className='w-100 mt-20'>
        <img         
        width={180}
        className='text-center mx-auto'
        src={logo} 
        alt="Loading" />
    </div>
    )
}