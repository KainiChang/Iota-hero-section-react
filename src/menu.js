import React from 'react'
import Chevron from "./chevron.svg"

export default function Menu(props) {
    const [toggle, setToggle] = React.useState(false)
    const [heightEl, setHeightEl] = React.useState(false)
  
        const refHeight =React.useRef() 
    React.useEffect(() => {
  
      setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])
  
    const toggleState = () => {
      setToggle(!toggle)
    }
  

  
    const [tickState, setTickState] = React.useState(-1)
   return (
  
      <div  >
        <button className={'accordion-list' }
          onClick={toggleState}>
          <span className='accordin__title'>{props.title}</span>
           <img className={toggle && "active"} src={Chevron} style={{ width: "20px", height: "20px"} } alt="arrow" />
        </button>
  
        <div className={toggle ? "accordion-toggle animated" : 'accordion-toggle'}
          style={{ height: toggle ? `${heightEl}` : "0px" }}
          ref={refHeight}>
          {
            props.localList.map((item,index) => {
              return (
                  
                <div className="accordion--flexOption">             

                   <div className={tickState===index?"accordion--listType--hovered":"accordion--listType"}  onMouseEnter={()=>setTickState(index)} onMouseLeave={()=>setTickState(-1)}>{item}
                   </div>
                </div>
  
  
              );
            })
          }
        </div>
        
      </div>
  
    );
  }
