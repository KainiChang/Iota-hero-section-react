
import React from 'react'
import './App.css';
import Main from './main';
import Menu from "./menu";

function App() {


  const [textArrayIndex, setArrayIndex] = React.useState(0)
  function handleClick1() {
    if (textArrayIndex === 0) {
      setArrayIndex(2)
    }else
    setArrayIndex(prev => prev - 1)
  }
  function handleClick2() {
    if (textArrayIndex === 2) {
      setArrayIndex(0)
    }else
    setArrayIndex(prev => prev + 1)
  }

  const [menuState,setMenuState]=React.useState(false)
  const handleClick =()=>{
    setMenuState(prev=>!prev)
  }



  return (
    <div className="App">
      <video src={`./images/video${textArrayIndex}.webm`} loop="loop" playsInline="" className='video' autoPlay="autoplay" muted="muted"></video>

      <div className={menuState?"navbar-menu":"navbar"} >

        <img className="navbar--logo1" src={menuState?'./images/logo-icon-dark.svg':'./images/logo-icon-light.svg'} onClick={handleClick} alt='logo' />
        <img className="navbar--menu"  onClick={handleClick}  src={menuState?'./images/off.png':'./images/menu.svg'} alt='menu'/>
    
      </div>
      <div className={menuState?"menu-visible":"menu-unvisible" }> 
        <Menu title="Get Started" localList ={( ["For Developers", "For Enterprise", "For Finacial Investors", "For Community Members","What Is IOTA","The IOTA Token","Buying IOTA","securing IOTA","Institutional Acquisition"])}/>
         <Menu  title="Solutions" localList ={( ["Industry Overview", "Mobility & Automotive", "Global Trade & Supply Chains", "Customs & Border Management", "Digital Identity","Smart City","Industrial IoT","EHealth"])}/> 
         <Menu  title="Develop" localList ={( ["Industry Overview", "Mobility & Automotive", "Global Trade & Supply Chains", "Customs & Border Management", "Digital Identity","Smart City","Industrial IoT","EHealth"])}/> 

      </div>
       
      <Main index={textArrayIndex} handleClick1={handleClick1} handleClick2={handleClick2} />
    </div>
  );
}

export default App;
