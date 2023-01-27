import React from 'react'
import Icomplte from '../image/icon-complete.svg'
export const Done = ({reset}) => {
  return (
    <>
        <div className='finish-card'>
        <img src={Icomplte} alt=""/>
        <h2> THANK YOU</h2>
        <p>We've added your card credentials</p>
        <button className="btn-confirm" onClick={reset} >
              Continue
        </button>
        </div>

    </>
  )
}
