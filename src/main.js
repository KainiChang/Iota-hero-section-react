import React from 'react'

export default function Main(props) {
const text1Array=["Connecting","Securing","Enpowering"]
const text2Array=["Machines","Data","People"]
const text3Array=["IOTA connects machines with secure data and value exchange",
                  "IOTA protects the integrity and variability of data",
                  "IOTA helps people securely navigate their digital life"]


  return (
    <div className='main'>
        <span className='text1'>{text1Array[props.index]}</span> 
        <span className='text2'>{text2Array[props.index]}</span> 
        <div className='line'></div>
        <span className='text3'>{text3Array[props.index]}</span> 

        <div className='btn-container'>
            <img src='./images/left.png' className='btn-image' onClick={props.handleClick1} alt='btn'/>
            <img src='./images/right.png'className='btn-image' onClick={props.handleClick2} alt='btn'/>
        </div>

    </div>
  )
}
